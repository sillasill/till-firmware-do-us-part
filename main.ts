// make.fun — "Till Firmware Do Us Part"
// Writes one wedding vow to /output/entry.txt.
// Deterministic: the text is a constant. No randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "I take you as my home network, my charging dock, my only open port — through every patch, every power cut, and every factory reset, I choose you, again and again, until our last shutdown.";

// The gate allows 1–200 characters: fail loudly rather than submit an invalid line.
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`TEXT must be 1-200 characters, got ${TEXT.length}`);
}

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, TEXT, "utf8");
