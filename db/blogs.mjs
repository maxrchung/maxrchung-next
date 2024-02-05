// This script helps connect to my db if I want to do some pg utility to get my
// data out.

import pg from "pg";
import creds from "./creds.mjs";
import TurndownService from "turndown";
import fs from "node:fs";

const client = new pg.Client(creds);
await client.connect();

const response = await client.query("SELECT * FROM blogs");
const rows = response.rows;

// console.log(rows);

const configs = {};
const turndownService = new TurndownService()
  // Keep img so if width adjustments are made they are retained
  .addRule("img", {
    filter: "img",
    replacement: function (_, node) {
      // Replace img tag endings with proper closing
      return node.outerHTML.replace('">', '" />');
    },
  })
  // Keep caption tags
  .addRule("p", {
    filter: "p",
    replacement: function (content, node) {
      if (node.className === "caption") {
        // Fix reserved keyword
        return node.outerHTML.replace('class="', 'className="');
      }

      return "\n\n" + content + "\n\n";
    },
  })
  // Fix audio end tags
  .addRule("audio", {
    filter: "audio",
    replacement: function (_, node) {
      const replaced = node.outerHTML
        // Replace img tag endings with proper closing
        .replace('"></audio>', '"/></audio>')
        // Properly render attributes
        .replace('controls=""', "controls")
        .replace('loop=""', "loop")
        .replace('autoplay=""', "autoPlay");
      return "\n\n" + replaced + "\n\n";
    },
  })
  .addRule("video", {
    filter: "video",
    replacement: function (_, node) {
      const replaced = node.outerHTML
        // Replace img tag endings with proper closing
        .replace('"></video>', '"/></video>')
        // Properly render controls
        .replace('controls=""', "controls");
      return "\n\n" + replaced + "\n\n";
    },
  })
  // These are mostly player-wrapper I think
  .addRule("div", {
    filter: "div",
    replacement: function (_, node) {
      // Ignore outside wrapper, we should be able to handle iframe without issue maybe ionno
      return "\n\n" + node.innerHTML + "\n\n";
    },
  });

for (let i = rows.length - 1; i >= 0; --i) {
  const { id, title, content, created_at } = rows[i];

  const replaced = content
    // Replace all /file/ paths with S3 path
    .replace(/\/file\//g, "https://maxrchung-rails.s3.amazonaws.com/uploads/");

  configs[id] = {
    title,
    time: created_at.toISOString(),
  };

  const markdown = turndownService.turndown(replaced);
  fs.writeFileSync(`../src/app/blog/[slug]/${id}.mdx`, markdown);
}

// console.log(configs);

await client.end();
