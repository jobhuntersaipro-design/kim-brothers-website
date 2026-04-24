# AGENTS.md

This project uses `CLAUDE.md` as the canonical agent instructions file. All project context, commands, conventions, and constraints live there.

See [CLAUDE.md](./CLAUDE.md) for:

- Project overview and stack
- Commands (dev, build, test, lint, format)
- Design constraints and SEO requirements
- Content rules (plain language, no published numbers)
- Git conventions
- Deeper context files in `/context`

All AI coding agents (Claude Code, Cursor, Windsurf, Copilot, etc.) should read `CLAUDE.md` and the files it references in `/context` before making changes.
