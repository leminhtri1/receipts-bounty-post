// Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X" bounty.
// Hands in the address of one X post by copying POST.json from the repository root to the output directory,
// after checking that it names a real X post address (so a placeholder or a typo fails here, not at the gate).
//
// Locally: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const MAKEFUN_POST_ID = '2124915864336236646'; // the post being promoted; the entry must name our own post instead
const POST_URL = /^https:\/\/(?:www\.|mobile\.)?(?:x|twitter)\.com\/([A-Za-z0-9_]{1,15})\/status\/(\d+)$/;
const MAX_BYTES = 16384;

function fail(message: string): never {
  console.error(`POST.json: ${message}`);
  process.exit(1);
}

let raw: string;
try {
  raw = readFileSync(join(botDir, 'POST.json'), 'utf8');
} catch (err) {
  fail(`could not be read from ${botDir}: ${(err as Error).message}`);
}

if (Buffer.byteLength(raw, 'utf8') > MAX_BYTES) fail(`is over ${MAX_BYTES} bytes`);

let post: unknown;
try {
  post = JSON.parse(raw);
} catch (err) {
  fail(`is not valid JSON: ${(err as Error).message}`);
}
if (typeof post !== 'object' || post === null || Array.isArray(post)) fail('must be a JSON object');

const url = (post as { url?: unknown }).url;
if (typeof url !== 'string') fail('needs a "url" string');
const match = POST_URL.exec(url);
if (!match) fail(`"${url}" is not an X post address (https://x.com/<handle>/status/<id>)`);
if (match[2] === MAKEFUN_POST_ID) fail("names make.fun's own post; it must name the entrant's post");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'POST.json'), raw); // byte for byte, as the gate expects
console.log(`Handed in @${match[1]}'s post ${match[2]} -> ${join(outDir, 'POST.json')}`);
