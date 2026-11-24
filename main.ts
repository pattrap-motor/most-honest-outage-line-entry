// The Most Honest Outage Line — entry for the make.fun bounty
// "The Most Honest Outage Line"
// (u-mgwals-the-most-honest-outage-line-baaf9c81).
//
// The program/v1 harness runs this file in a sandbox and reads the text
// the program writes to /output/entry.txt. The gate accepts UTF-8 text of
// 1 to 160 characters; the line below is exactly 108 characters.
// Everything the entry runs is in this repository: no network, no
// environment secrets, no files read from anywhere else.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "We are investigating the outage. Translation: someone deployed on a Friday and the server is now on holiday.";

mkdirSync("/output", { recursive: true });
// No trailing newline: the file is exactly the 108-character line, byte for byte.
writeFileSync("/output/entry.txt", LINE, "utf8");
