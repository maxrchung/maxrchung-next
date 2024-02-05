// This script helps connect to my db if I want to do some pg utility to get my
// data out.

import pg from "pg";
import creds from "./creds.mjs";
import TurndownService from "turndown";
import fs from "node:fs";

const client = new pg.Client(creds);
await client.connect();

const response = await client.query("SELECT * FROM projects");
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
      let replaced = node.outerHTML

        // Properly render attributes
        .replace('controls=""', "controls")
        .replace('loop=""', "loop")
        .replace('autoplay=""', "autoplay");

      // Some audio uses src attribute instead of source tag
      if (replaced.includes("<source ")) {
        // Replace tag endings with proper closing
        replaced = replaced.replace('"></audio>', '"/></audio>');
      }
      return "\n\n" + replaced + "\n\n";
    },
  })
  .addRule("video", {
    filter: "video",
    replacement: function (_, node) {
      let replaced = node.outerHTML
        // Properly render controls
        .replace('controls=""', "controls")
        .replace('loop=""', "loop")
        .replace('autoplay=""', "autoplay");

      // Also some videos use src attribute instead of source tag
      if (replaced.includes("<source ")) {
        // Replace tag endings with proper closing
        replaced = replaced.replace('"></video>', '"/></video>');
      }

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
  })
  .addRule("h1", {
    filter: "h1",
    replacement: function (content, node) {
      // Ignore Info header
      if (node.innerHTML.includes("Info")) {
        return "";
      }

      // Otherwise turn into h2 lol
      return "\n\n" + "## " + content + "\n\n";
    },
  });

for (let i = rows.length - 1; i >= 0; --i) {
  const {
    title,
    content,
    extension,
    updated_at,
    startdate,
    enddate,
    thumbnail,
    description,
  } = rows[i];

  configs[extension] = {
    thumbnail: thumbnail
      ? "https://maxrchung-rails.s3.amazonaws.com/uploads/" + thumbnail
      : "",
    title,
    start: startdate.toISOString(),
    end: enddate?.toISOString(),
    description,
    time: updated_at.toISOString(),
  };

  const markdown = turndownService.turndown(
    content
      // Replace all /file/ paths with S3 path
      .replace(/\/file\//g, "https://maxrchung-rails.s3.amazonaws.com/uploads/")
  );
  fs.writeFileSync(`../src/app/projects/[slug]/${extension}.mdx`, markdown);
}

// console.log(configs);

await client.end();
