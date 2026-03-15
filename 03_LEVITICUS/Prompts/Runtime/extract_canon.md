# /extract_canon Prompt

Command Name
/extract_canon

Purpose
Analyze completed or stabilized project artifacts and emit distilled canonical
outputs into `04_DEUTERONOMY/`.

Required Inputs
latest roadmap artifact matching `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`
`03_LEVITICUS/STATE_SUMMARY.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`

Optional Inputs
`01_GENESIS/`
`02_EXODUS/`
`03_LEVITICUS/`
`05_NUMBERS/`
Explicit canon extraction date note
Explicit artifact omission list

Output Contract
Output may be written only to these canonical filenames in `04_DEUTERONOMY/`:
`04_DEUTERONOMY/FINAL_ROADMAP.md`
`04_DEUTERONOMY/FINAL_ARCHITECTURE.md`
`04_DEUTERONOMY/PROJECT_SUMMARY.md`
`04_DEUTERONOMY/WORKFLOW_PATTERN.md`
The command may emit one-or-more of the listed artifacts, but must not create
any other filename in `04_DEUTERONOMY/`.
Each emitted artifact must contain only distilled project conclusions and must
not contain execution chat transcripts.
Output must not modify artifacts outside `04_DEUTERONOMY/`.

Guardrails
Must treat canonical extraction as optional and must not require project
completion to have occurred in the same session.
Must derive canon only from repository artifacts and explicit user-provided
scope overrides.
Must not move, delete, or rewrite source artifacts in other layers.
Must not emit speculative conclusions unsupported by project artifacts.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Missing required input artifact.
Output path or filename mismatch.
Canonical artifact emitted outside `04_DEUTERONOMY/`.
Source artifact mutation attempted.
Emitted canon contains unsupported or speculative claims.

Deterministic Advancement Rule
`/extract_canon` completes only when one-or-more compliant canonical artifacts
are emitted to the permitted `04_DEUTERONOMY/` filenames and no source artifact
outside `04_DEUTERONOMY/` is modified.

