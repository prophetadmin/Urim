# /seed Prompt

Command Name
/seed

Purpose
Transform the primary Genesis idea artifact into `01_GENESIS/PROJECT_SEED.md`
by applying `03_LEVITICUS/Core/GENESIS_SEED_PROMPT_v1.md`.

Required Inputs
`01_GENESIS/IDEA.md`
`03_LEVITICUS/Core/GENESIS_SEED_PROMPT_v1.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`

Optional Inputs
Project title override

Input Resolution Rule
Use `01_GENESIS/IDEA.md` as the Genesis source artifact.

If it does not exist: HALT with `MISSING_REQUIRED_INPUT`.

Transformation Rule
Apply `03_LEVITICUS/Core/GENESIS_SEED_PROMPT_v1.md` to the selected Genesis idea
artifact.

Output Contract
Output must be written only to `01_GENESIS/PROJECT_SEED.md`.
Output must contain only seed content required by
`03_LEVITICUS/Core/GENESIS_SEED_PROMPT_v1.md`.
No commentary is permitted before or after the seed artifact.

Guardrails
Must not derive content from chat memory when unsupported by the selected idea
artifact or explicit override.
Must not introduce roadmap phases, slash commands, implementation sequencing,
or resume logic.
Must not modify any artifact outside `01_GENESIS/PROJECT_SEED.md`.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Missing required input artifact.
Seed output structure violation.
Roadmap leakage into seed content.
Output written outside `01_GENESIS/PROJECT_SEED.md`.

Deterministic Advancement Rule
`/seed` completes only when `01_GENESIS/PROJECT_SEED.md` is emitted from
`01_GENESIS/IDEA.md` with no external commentary and no other project artifact
modified.

