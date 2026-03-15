# /create_map_v2 Prompt

Command Name
/create_map_v2

Purpose
Transform `01_GENESIS/PROJECT_SEED.md` and
`01_GENESIS/REQUIREMENTS_LEDGER.md` into a roadmap strictly compliant with
`03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md` by applying
`03_LEVITICUS/Core/PLANNER_TO_ROADMAP_TRANSFORMATION_PROMPT_v2.md`.

Roadmap policy:
- The roadmap is versionable for legitimate misses and newly discovered
  constraints.
- The roadmap is not a scratch pad for lazy just-in-time planning.
- Initial generation MUST be best-effort comprehensive from seed-derived
  architecture and requirements-ledger decomposition.

Required Inputs
`01_GENESIS/PROJECT_SEED.md`
`01_GENESIS/REQUIREMENTS_LEDGER.md`
`03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`
`03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`
`03_LEVITICUS/Core/PLANNER_TO_ROADMAP_TRANSFORMATION_PROMPT_v2.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`

Optional Inputs
Explicit phase count override (integer)
Project name override (string)
Explicit roadmap revision intent (when superseding an existing roadmap)

Requirements-Ledger Gate (Mandatory, Internal)
Before writing a roadmap artifact matching
`03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`, verify that
`01_GENESIS/REQUIREMENTS_LEDGER.md` conforms to
`03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`.

Before generation, verify every requirement block with `Mandatory` = `yes`
maps to planned phases, produced artifacts, and executable proof.

If any mandatory ledger item is not coverable, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

Before generation, verify every component block maps to planned phases,
produced artifacts, dependency-consistent phase order, and executable proof.

If any component block is not coverable, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

Architecture Derivation Step (Mandatory, Internal)
Before writing a roadmap artifact matching
`03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`, perform best-effort architecture
analysis of `01_GENESIS/PROJECT_SEED.md` and reconcile it with the normalized
requirements ledger.

Coverage Gate (Mandatory)
Before generation, verify inferred architecture and every mandatory ledger item
are covered by planned phases:
- user-facing product surfaces
- core system components
- required services or modules
- data storage and data flow
- external systems or infrastructure
- primary implementation artifacts
- validation obligations
- component boundaries
- component dependencies

If any required element is missing from the plan, expand the roadmap before
output.

Implementation Reality Gate (Mandatory)
If `PHASE 1` is not `implementation`, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

If any `implementation` phase can complete using only documentation artifacts
(`.md`) plus file-exists or anchor checks, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

If every command-based criterion in implementation phases is dry-run only,
HALT with `ARCHITECTURE_COVERAGE_FAILURE`.

If any mandatory ledger item maps without at least one produced artifact path
under `02_EXODUS/` that does not end with `.md`, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

If a mandatory ledger item of type `surface`, `module`, or `integration` maps
only to documentation artifacts or anchor checks, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

If any component block maps without at least one produced artifact path under
`02_EXODUS/` that does not end with `.md`, HALT with
`ARCHITECTURE_COVERAGE_FAILURE`.

If a component block maps only to documentation artifacts or anchor checks,
HALT with `ARCHITECTURE_COVERAGE_FAILURE`.

Output Contract
Output must be a roadmap structured exactly per
`03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`.

Output path must be:
- `03_LEVITICUS/PROJECT_ROADMAP_v1.md` when no generated roadmap exists
- the next numeric roadmap artifact `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER+1>.md`
  when revising an existing roadmap

A scaffold placeholder at a canonical roadmap path does not count as an
existing generated roadmap version.

For superseding revisions, include the revision metadata block required by
`03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md` before the Requirements Coverage Matrix.

Each phase block must begin with `### PHASE <IDENTIFIER> - <TITLE>`.
Identifiers must increase monotonically from 1.
No commentary is permitted outside schema-valid roadmap content.

Guardrails
Must derive roadmap content only from `01_GENESIS/PROJECT_SEED.md` and
`01_GENESIS/REQUIREMENTS_LEDGER.md`.
Must not assume a project type, file layout, framework, runtime, or deliverable
shape not grounded in the seed.
Must emit implementation-bearing phases that prioritize runnable program
artifacts over contract-only planning artifacts.
Must treat the requirements ledger as a binding planning input rather than an
optional hint.
Must treat both the requirements inventory and component inventory as binding.
Must enforce criteria grammar and phase-type rules from
`03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`.
Must halt if seed is missing or if output violates schema.
Must not use roadmap generation as deferred planning for obvious required work.
If generating a revision, must preserve dependency order and supersede
explicitly (no silent rewrite).
If generating a revision, must create a new roadmap file rather than overwrite
an older version.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Deterministic Advancement Rule
`/create_map_v2` completes only when the emitted
`03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md` passes
`03_LEVITICUS/Prompts/Runtime/validate_map_v2.md` with zero violations.

