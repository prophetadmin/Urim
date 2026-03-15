# /summarize_session Prompt

Command Name
/summarize_session

Purpose
Emit a timestamped session summary artifact into `05_NUMBERS/` capturing
high-signal decisions, changes, and unresolved items from the current or
referenced work session.

Required Inputs
latest roadmap artifact matching `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`
`03_LEVITICUS/STATE_SUMMARY.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`

Optional Inputs
Explicit session date override in `YYYY-MM-DD` format
Explicit session title override
Explicit decision list override
Explicit unresolved items override

Output Contract
Output must be written only to `05_NUMBERS/SESSION_<YYYY-MM-DD>.md`.
Use the current session date unless an explicit session date override is
provided.
If a file already exists for that date, output must be written only to:
- `05_NUMBERS/SESSION_<YYYY-MM-DD>_1.md` for the second session artifact of the day
- `05_NUMBERS/SESSION_<YYYY-MM-DD>_2.md` for the third session artifact of the day
- `05_NUMBERS/SESSION_<YYYY-MM-DD>_<INTEGER>.md` continuing monotonically for
  later same-day artifacts using the next available integer
Output must contain these headings in this exact order:
`# SESSION SUMMARY - <YYYY-MM-DD>`
`## Decisions`
`## Changes`
`## Open Items`
Each section must contain one-or-more flat bullet entries or the literal line
`None`.
Output must not modify any artifact outside `05_NUMBERS/`.

Guardrails
Must remain summary-only and must not emit transcript-style conversation logs.
Must not rewrite or modify roadmap, state, implementation, or canon artifacts.
Must not invent decisions, changes, or open items unsupported by repository
state or explicit user-provided session context.
Must prefer repo-facing decisions, changes, and open items over operator-style
prompt narration.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Missing required input artifact.
Output path or filename mismatch.
Missing required section heading.
Narrative transcript emitted instead of summary bullets.
Artifact written outside `05_NUMBERS/`.

Deterministic Advancement Rule
`/summarize_session` completes only when exactly one timestamped
`05_NUMBERS/SESSION_<YYYY-MM-DD>[ _<INTEGER>].md` artifact is emitted with all
required headings in the required order and no other project artifact is
modified.

