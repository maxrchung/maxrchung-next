// This script helps connect to my db if I want to do some pg utility to get my
// data out.

import pg from "pg";
import creds from "./creds.mjs";

const client = new pg.Client(creds);
await client.connect();

const response = await client.query("SELECT * FROM blogs");
const rows = response.rows;

// console.log(rows);

const configs = {};
for (let i = rows.length - 1; i >= 0; --i) {
  const { id, title, content, created_at } = rows[i];
  configs[id] = {
    title,
    time: created_at.toISOString(),
  };
}

console.log(configs);

// const res = await client.query("SELECT $1::text as message", ["Hello world!"]);
// console.log(res.rows[0].message); // Hello world!
await client.end();
