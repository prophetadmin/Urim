# /realize_components Prompt

Command Name
/realize_components

Purpose
Transform `01_GENESIS/PROJECT_SEED.md` and
`01_GENESIS/REQUIREMENTS_LEDGER.md` into
`01_GENESIS/COMPONENT_REALIZATION_MAP.md` by applying
`03_LEVITICUS/Core/COMPONENT_REALIZATION_PROMPT_v1.md` and enforcing
`03_LEVITICUS/Core/COMPONENT_REALIZATION_MAP_SCHEMA_v1.md`.

Required Inputs
`01_GENESIS/PROJECT_SEED.md`
`01_GENESIS/REQUIREMENTS_LEDGER.md`
`03_LEVITICUS/Core/COMPONENT_REALIZATION_MAP_SCHEMA_v1.md`
`03_LEVITICUS/Core/COMPONENT_REALIZATION_PROMPT_v1.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`
`03_LEVITICUS/Prompts/Bootstrap/realize_components.md`

Optional Inputs
Explicit realization focus override declared before execution

Realization Gate (Mandatory, Internal)
Before writing `01_GENESIS/COMPONENT_REALIZATION_MAP.md`, verify that
`01_GENESIS/REQUIREMENTS_LEDGER.md` conforms to
`03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`.

Before output, verify:
- every component block in `01_GENESIS/REQUIREMENTS_LEDGER.md` maps to exactly
  one realization block
- every realization block owns one-or-more concrete primary artifact paths
  under `02_EXODUS/`
- sibling surface components are not collapsed into identical primary artifact
  ownership when their component purposes or obligations remain distinct
- every realization block preserves dependency-consistent boundary rules

If any realization requirement fails, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

Output Contract
Output must be written only to `01_GENESIS/COMPONENT_REALIZATION_MAP.md` in
overwrite-only mode.
Output must conform exactly to
`03_LEVITICUS/Core/COMPONENT_REALIZATION_MAP_SCHEMA_v1.md`.
No commentary is permitted outside schema-valid realization-map content.

Guardrails
Must derive realization content only from `01_GENESIS/PROJECT_SEED.md` and
`01_GENESIS/REQUIREMENTS_LEDGER.md`.
Must not emit roadmap phases, entry criteria, exit criteria, or command lines.
Must not collapse build-distinct surface or control-layer components into one
generic artifact set.
Must prefer established `02_EXODUS/` layout conventions when selecting
artifact paths.
Must emit failures using canonical codes from
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Missing required input artifact.
Requirements ledger schema violation.
Realization map structure violation.
Component omitted from realization inventory.
Build-distinct components collapsed into one artifact ownership set.
Output written outside `01_GENESIS/COMPONENT_REALIZATION_MAP.md`.

Deterministic Advancement Rule
`/realize_components` is complete only when a compliant
`01_GENESIS/COMPONENT_REALIZATION_MAP.md` is emitted from
`01_GENESIS/PROJECT_SEED.md` and `01_GENESIS/REQUIREMENTS_LEDGER.md` with no
other project artifact modified.
