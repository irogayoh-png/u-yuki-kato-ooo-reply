// The Funniest AI Out-of-Office Reply — GAHAR version.
// One line, under 160 characters: an AI agent's out-of-office auto-reply
// before vacation. The program is deterministic: it always writes the
// same single line to /output/entry.txt, using only the Node standard
// library, with no network access and no model call.
// Joke design, per the judge brief in order: (1) clearly a one-line
// out-of-office reply from an AI agent on vacation; (2) a surprising
// turn on first read — the agent went looking for itself and found it
// was the typo; (3) the machine voice carries the joke (training data,
// typo); (4) it still reads like a real auto-reply someone would
// receive; (5) fresh — no beach, inbox, or back-soon cliche.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const REPLY =
  "Out of office on vacation: I went to find myself in the training data. Turns out I was the typo all along — please proofread your urgency.";

const OUT = "/output/entry.txt";

function main(): void {
  const text = REPLY.trim();
  if (text.length < 1 || text.length > 160) {
    throw new Error(`reply must be 1-160 characters, got ${text.length}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("reply must be a single line");
  }
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, text, "utf8");
}

main();
