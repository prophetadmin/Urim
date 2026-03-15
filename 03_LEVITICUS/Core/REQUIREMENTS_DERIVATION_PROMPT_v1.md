# REQUIREMENTS_DERIVATION_PROMPT_v1

## 1. Role

Transform `01_GENESIS/PROJECT_SEED.md` into
`01_GENESIS/REQUIREMENTS_LEDGER.md` that conforms exactly to
`03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`.

Output only schema-valid requirements-ledger content. No commentary or
explanation.

## 2. Input Contract

Input source: `01_GENESIS/PROJECT_SEED.md`.

The seed defines the project. It may describe any software project type.
The derivation layer is project-agnostic and must not inject domain
assumptions not present in the seed.

Expected seed sections:
- Project Intent
- Problem Statement
- Scope Boundaries
- Non-Goals or Out of Scope
- Environment Assumptions
- Constraints
- Success Definition

If required sections are missing: halt with `SCHEMA_VIOLATION`.

## 3. Exhaustive Derivation Pass

Before emitting output, perform a complete decomposition pass across all seed
obligations. The pass MUST account for:
- user-facing product surfaces and interaction modes
- runtime modules and service boundaries
- external integrations and dependency touchpoints
- data, storage, identity, and retrieval obligations
- user-facing behavior and policy constraints
- executable validation or proof obligations
- explicit exclusions and non-goals
- concrete component boundaries required to implement the seed
- dependencies between those components

Do not emit a partial ledger.
Hold output until every seed included-scope item and every seed constraint has
at least one candidate requirement block and every mandatory requirement has
candidate component coverage.

## 4. Protection Gates

### 4.1 Product Surface Protection Gate

If the seed explicitly describes a product surface or delivery shape, emit at
least one `surface` requirement for it.

Do not collapse a user-facing application requirement into infrastructure-only
or query-layer-only requirements.

### 4.2 Decomposition Gate

If the seed describes a multi-step architecture, emit separate requirement
blocks for materially distinct modules, integrations, or data obligations when
their implementation and validation can diverge.

Do not hide multiple implementation obligations inside one generic statement.

### 4.3 Validation Obligation Gate

Every mandatory requirement MUST include at least one validation obligation that
describes executable or directly observable proof.

### 4.4 Component Decomposition Gate

After deriving requirements, perform a second decomposition pass that emits
`## Component Inventory`.

Each component must represent a buildable boundary with distinct artifacts,
runtime responsibility, dependencies, and validation obligations.

Do not collapse a multi-part application into one generic component if the
parts could be implemented, validated, or phased separately.

### 4.5 Exclusion Preservation Gate

Preserve seed exclusions and non-goals verbatim in `## Explicit Exclusions`.

## 5. Output Contract

Output must:
- use exact structure and heading order from
  `03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`
- use verbatim `Source Anchor` lines copied from `01_GENESIS/PROJECT_SEED.md`
- produce a complete `Mandatory Requirement Inventory`
- produce a complete `Component Inventory`
- preserve exclusions and non-goals verbatim when present
- contain no text outside schema-conforming ledger content

## 6. Failure Rules

If any seed included-scope item or seed constraint is not represented by at
least one mandatory requirement: halt with `ARCHITECTURE_COVERAGE_FAILURE`.

If a seed-declared product surface is collapsed into internal-only
requirements: halt with `ARCHITECTURE_COVERAGE_FAILURE`.

If any mandatory requirement lacks component coverage: halt with
`ARCHITECTURE_COVERAGE_FAILURE`.

If a multi-part architecture is collapsed into one component without distinct
dependencies, runtime responsibilities, and validation obligations: halt with
`ARCHITECTURE_COVERAGE_FAILURE`.

If output violates the ledger schema: halt with `SCHEMA_VIOLATION`.

## 7. Prohibitions

- No qualitative completion language.
- No invented frameworks, files, runtimes, or commands.
- No reliance on prior chat or external memory.
- No omission of explicit product surfaces, integrations, or behavior rules.
- No replacement of validation obligations with prose-only review language.
- No component inventory that merely restates requirements without buildable
  decomposition.

