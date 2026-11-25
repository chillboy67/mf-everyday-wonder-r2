// Everyday Wonder, Two Days to Find the Line — make.fun one-liner entry.
// Writes one line of everyday wonder to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";

// The line is built from two fixed halves joined by one space,
// so the written text is exactly the entry line, every run.

const LINE = [
  "The lift doors opened on a stranger humming my childhood lullaby,",
  "and for one floor, the whole building felt like a house I used to live in.",
].join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");

console.log(`Wrote ${LINE.length} characters to ${OUTPUT_PATH}`);
