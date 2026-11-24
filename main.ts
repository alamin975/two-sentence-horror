import { mkdirSync, writeFileSync } from "node:fs";

// The text below must stay byte-for-byte: exactly two sentences, no trailing newline.
const TEXT =
  "The smart speaker said goodnight in my voice. I live alone, and I never taught it that.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", TEXT, { encoding: "utf8" });
}

writeEntry();
