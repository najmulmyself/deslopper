# Project skills

Installed for this project so every Claude Code session (local or cloud) picks them up.

| Skill | Source | Pinned commit | License | Use |
|---|---|---|---|---|
| `unslop` | [heydamir/unslop](https://github.com/heydamir/unslop) by Damir Sokolovsky | `a6f121e` | CC BY 4.0 | `/unslop` — audit and redesign AI-looking UI |
| `reanimate` | [NiazMorshed2007/reanimate](https://github.com/NiazMorshed2007/reanimate) by Niaz Morshed | `3f7a55a` | MIT | `/reanimate` — record an animation from a URL/video and rebuild it, verified frame by frame |
| `hallmark` | [nutlope/hallmark](https://github.com/nutlope/hallmark) by Together AI | `4f6a46c` | MIT | `/hallmark redesign <path>` or `/hallmark audit <path>` — themed page builds and a slop linter |

Notes
- `unslop` needs Playwright (`npm i -D playwright`) only for live-site snapshots and story videos; story videos also need ffmpeg.
- `reanimate` needs Bun. Its first run (`bash .claude/skills/reanimate/scripts/setup.sh`) installs Playwright Chromium and a static ffmpeg (~250 MB). Evidence goes in `.reanimate/`, which is git-ignored.
- `hallmark` only acts on an existing design when named with `redesign` or `audit`. Its `imagegen.mjs` calls Together AI only if `TOGETHER_API_KEY` is set. Build logs go in `.hallmark/`.
- To update, re-copy `skills/<name>` from the upstream repo over the folder here.
