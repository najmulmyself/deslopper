# Project skills

Installed for this project so every Claude Code session (local or cloud) picks them up.

| Skill | Source | Pinned commit | License | Use |
|---|---|---|---|---|
| `unslop` | [heydamir/unslop](https://github.com/heydamir/unslop) by Damir Sokolovsky | `a6f121e` | CC BY 4.0 | `/unslop` — audit and redesign AI-looking UI |
| `reanimate` | [NiazMorshed2007/reanimate](https://github.com/NiazMorshed2007/reanimate) by Niaz Morshed | `3f7a55a` | MIT | `/reanimate` — record an animation from a URL/video and rebuild it, verified frame by frame |

Notes
- `unslop` needs Playwright (`npm i -D playwright`) only for live-site snapshots and story videos; story videos also need ffmpeg.
- `reanimate` needs Bun. Its first run (`bash .claude/skills/reanimate/scripts/setup.sh`) installs Playwright Chromium and a static ffmpeg (~250 MB). Evidence goes in `.reanimate/`, which is git-ignored.
- To update, re-copy `skills/<name>` from the upstream repo over the folder here.
