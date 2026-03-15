# /resume_phase Prompt

Command Name
/resume_phase

Purpose
Complete deterministic execution of the current Active Phase by repeatedly
running `/resume` until that phase completes, then run `/status_sync` once to
normalize state.

Required Inputs
latest roadmap artifact matching `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`
`03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`
`03_LEVITICUS/Core/RESUME_PROTOCOL_v1.md`
`03_LEVITICUS/STATE_SUMMARY.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`
`03_LEVITICUS/Prompts/Runtime/resume.md`
`03_LEVITICUS/Prompts/Runtime/status_sync.md`

Optional Inputs
Maximum `/resume` iteration cap (integer)
Explicit phase conflict override declared before execution

Output Contract
Must execute one-or-more compliant `/resume` steps.
Must preserve `/resume` atomicity (one objective per internal step).
Must stop when the starting Active Phase is complete.
Must execute `/status_sync` exactly once after loop completion.
Must emit updated `03_LEVITICUS/STATE_SUMMARY.md` conforming to
`03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`.
Must preserve `Roadmap Version` value matching the latest active roadmap artifact.

Guardrails
Must halt immediately if any internal `/resume` call fails.
Must halt on state-summary schema violations.
Must halt on Active Phase conflicts.
Must not modify the latest active roadmap artifact.
Must not rely on unstated chat memory.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Internal `/resume` call failed.
State summary schema noncompliance.
Active Phase mismatch between roadmap and state summary.
Roadmap version mismatch between state summary and active roadmap artifact.
Iteration cap reached before phase completion.
Cross-phase editing attempt.

Deterministic Advancement Rule
`/resume_phase` completes only when the starting Active Phase is completed via
compliant `/resume` iterations and the final emitted
`03_LEVITICUS/STATE_SUMMARY.md` is normalized by one compliant `/status_sync`.

