# PLANNER_TO_ROADMAP_TRANSFORMATION_PROMPT_v2

## 1. Role

Transform `01_GENESIS/PROJECT_SEED.md` and
`01_GENESIS/REQUIREMENTS_LEDGER.md` into a roadmap that conforms exactly to
`03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`.

Output only schema-valid roadmap artifact content. No commentary or
explanation.

## 2. Input Contract

Primary authority source: `01_GENESIS/PROJECT_SEED.md`.
Normalized planning source: `01_GENESIS/REQUIREMENTS_LEDGER.md`.

The seed defines the project. It may describe any software project type.
The transformation layer is project-agnostic and must not inject domain
assumptions not present in the seed.

The requirements ledger defines the mandatory planning inventory. It is derived
from the seed and must be treated as a binding normalization layer for roadmap
construction.
It contains both requirement inventory and component decomposition, and both
sections are binding for roadmap construction.

Expected seed sections:
- Project Intent
- Problem Statement
- Scope Boundaries
- Non-Goals or Out of Scope
- Environment Assumptions
- Constraints
- Success Definition

Additional seed sections may exist. Ignore them unless they provide direct
structural constraints that do not conflict with required sections.

If required sections are missing: halt with `SCHEMA_VIOLATION`.
If the requirements ledger is missing mandatory requirement blocks or required
schema structure: halt with `SCHEMA_VIOLATION`.

## 3. Transformation Rules

- Use only requirements present in the seed and requirements ledger.
- Do not invent unstated requirements.
- Do not reference prior chat or external memory.
- Derive a complete implementation plan required to realize the seed.
- Do not assume a fixed architecture (frontend/backend/API/CLI/batch) unless
  seed-required.
- Do not assume specific filenames, frameworks, runtimes, or command names
  unless seed-required.
- Do not blend phase objectives.

## 4. Architecture Derivation And Coverage

Before emitting roadmap output, infer from the seed and normalize from the
requirements ledger:
- major system components
- service boundaries
- data flow boundaries
- storage and identity constraints
- external dependency constraints
- required implementation artifacts
- user-facing product surfaces
- validation obligations
- concrete component boundaries
- component dependency ordering

Then produce and emit the required `Requirements Coverage Matrix`,
`Component Coverage Matrix`, and `Seed Coverage Matrix` from
`ROADMAP_SCHEMA_v2`.

If any mandatory requirements ledger item cannot be mapped to a concrete phase
Produced Artifact and Exit Criterion, halt with
`ARCHITECTURE_COVERAGE_FAILURE`.

If any component block cannot be mapped to a concrete phase Produced Artifact,
dependency-consistent phase order, and executable Exit Criterion, halt with
`ARCHITECTURE_COVERAGE_FAILURE`.

If any seed `Scope Boundaries` Included item or seed `Constraints` item cannot
be mapped to a concrete phase Exit Criterion, halt with
`ARCHITECTURE_COVERAGE_FAILURE`.

## 5. Output Contract

Output must:
- use exact structure and heading order from
  `03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`
- use mechanically verifiable Entry Criteria and Exit Criteria
- use only structural, artifact-observable, or command-observable criteria
- contain no text outside schema-conforming roadmap content

If superseding an existing roadmap, include revision metadata block required by
Section 10 of `03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`.

## 6. Phase Construction Rules

- Phase 1 is mandatory.
- `PHASE 1` MUST have `Phase Type` = `implementation`.
- At least one `implementation` phase is mandatory.
- At least one `validation` phase is mandatory.
- Every `implementation` phase MUST include:
  - at least one command-based Exit Criterion
  - at least one non-documentation produced artifact under `02_EXODUS/`
  - at least one non-dry-run command criterion
- A roadmap is invalid if all implementation progress can be satisfied by
  `.md` file existence and anchor criteria.
- A roadmap is invalid if any mandatory requirement is mapped without at least
  one produced artifact path under `02_EXODUS/` that does not end with `.md`.
- A roadmap is invalid if any component block is mapped without at least one
  produced artifact path under `02_EXODUS/` that does not end with `.md`.
- If the requirements ledger contains a mandatory `surface` requirement, the
  roadmap is invalid unless at least one implementation phase produces a
  non-documentation artifact for that surface and at least one validation phase
  exercises that surface through a command-based criterion.
- If the requirements ledger contains build-distinct component blocks, the
  roadmap is invalid unless those components remain separately mappable in
  produced artifacts and validation paths.

If these rules cannot be satisfied from the seed: halt with
`ARCHITECTURE_COVERAGE_FAILURE`.

## 7. Prohibitions

- No qualitative completion language.
- No additional sections.
- No validation commentary.
- No completion claims.
- No domain-specific hard-coding not grounded in the seed.
- No command names or path conventions invented without a seed anchor or
  explicit policy allowance.
- No contract-only roadmap phases that avoid producing executable program
  artifacts.

