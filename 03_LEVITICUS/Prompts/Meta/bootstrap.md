# /bootstrap Prompt

Command Name
/bootstrap

Purpose
Orchestrate the canonical bootstrap chain by executing `/seed`,
`/derive_requirements`, `/realize_components`, and `/create_map_v2` in that
exact order for fresh or reset workspaces.

Canonical command order is mandatory; limited in-run refinement before final bootstrap completion is permitted.

Required Inputs
`01_GENESIS/IDEA.md`
`03_LEVITICUS/Prompts/Bootstrap/seed.md`
`03_LEVITICUS/Prompts/Bootstrap/derive_requirements.md`
`03_LEVITICUS/Prompts/Bootstrap/realize_components.md`
`03_LEVITICUS/Prompts/Bootstrap/create_map_v2.md`
`03_LEVITICUS/Prompts/Bootstrap/validate_map_v2.md`
`03_LEVITICUS/Core/SLASH_COMMAND_SPECS_v1.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`

Optional Inputs
Project title override for `/seed`
Explicit derivation focus override for `/derive_requirements`
Explicit realization focus override for `/realize_components`
Explicit phase count override for `/create_map_v2`

Output Contract
`/bootstrap` must emit bootstrap artifacts only through the canonical command
outputs below and in this exact sequence:
- `01_GENESIS/PROJECT_SEED.md`
- `01_GENESIS/REQUIREMENTS_LEDGER.md`
- `01_GENESIS/COMPONENT_REALIZATION_MAP.md`
- `03_LEVITICUS/PROJECT_ROADMAP_v1.md`

No additional artifact paths may be substituted.
No commentary is permitted between chained command outputs.

Guardrails
Must execute the chain strictly in this order: `/seed` ->
`/derive_requirements` -> `/realize_components` -> `/create_map_v2` ->
`/validate_map_v2`.
Must halt immediately if any chained command fails its own contract or schema
gate.
Must not skip an earlier command because a later artifact already exists when
the workspace is being intentionally bootstrapped or reset.
Must not modify `01_GENESIS/IDEA.md`.
Must not rewrite bootstrap sequencing into a different command order.
Must not replace the underlying command prompts; `/bootstrap` is an
orchestrator over the canonical bootstrap commands.
Must emit failures using canonical codes from
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Failure Modes
Missing required input artifact.
Missing underlying bootstrap command prompt.
Bootstrap command ordering violation.
Chained command failure.
Output artifact missing after successful chained execution.
Non-canonical output path emitted.

Deterministic Advancement Rule
`/bootstrap` completes only when `/seed`, `/derive_requirements`,
`/realize_components`, `/create_map_v2`, and `/validate_map_v2` have
completed in order and the resulting canonical outputs exist at
`01_GENESIS/PROJECT_SEED.md`,
`01_GENESIS/REQUIREMENTS_LEDGER.md`,
`01_GENESIS/COMPONENT_REALIZATION_MAP.md`, and
`03_LEVITICUS/PROJECT_ROADMAP_v1.md`.
