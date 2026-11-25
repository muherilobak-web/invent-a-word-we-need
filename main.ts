// Simustall: the polite pile-up when two people start talking at once and both stop to let the other go first.
// One coined word plus a one-line definition, written out to /output/entry.txt (max 140 chars, no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "simustall — when two people start talking at the same time and both stop to let the other go first.";

// Gate from the bounty rules: word plus one-line definition, 1-140 characters.
const MAX_CHARS = 140;

if (ENTRY.length === 0 || ENTRY.trim().length === 0) {
  throw new Error("ENTRY must not be empty or only whitespace");
}
if (ENTRY.length > MAX_CHARS) {
  throw new Error(`ENTRY is ${ENTRY.length} characters, over the ${MAX_CHARS} limit`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("ENTRY must be a single line");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
