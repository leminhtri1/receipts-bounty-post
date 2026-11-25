# receipts-bounty-post

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/leminhtri1/receipts-bounty-post/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/leminhtri1/receipts-bounty-post/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An entry for make.fun's bounty to promote its make-your-own-bounty post on X. The entry is one post on X:
[x.com/donglaochoicoin/status/2125528225959076060](https://x.com/donglaochoicoin/status/2125528225959076060).
It quotes [make.fun's post](https://x.com/makefunai/status/2124915864336236646) and pitches a bounty idea of its
own: an app that turns grocery receipts into a weekly budget. It also carries a photo made for it, using make.fun's
press-kit lockup and palette.

The post is ranked by its replies + reposts + quotes. Got an idea you'd pay to have built?
[Make your own bounty on make.fun](https://make.fun/sponsor/new).

## What's here

- `POST.json`: the post's address, `{"url": "https://x.com/<handle>/status/<id>"}`.
- `main.ts`: Node 22, standard library only. It checks that `POST.json` is a JSON object under 16 KB whose `url` is an
  X post address (and not make.fun's own post), then copies it byte for byte to the output directory, where the
  bounty's gate reads it. Bad input exits 1 with a message saying what's wrong.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=eh1gzvjg&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
