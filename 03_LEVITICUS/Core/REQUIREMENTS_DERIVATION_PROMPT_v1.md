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
- Product Experience Invariants
- Success Definition

If required sections are missing: halt with `SCHEMA_VIOLATION`.

## 3. Exhaustive Derivation Pass

Before emitting output, perform a complete decomposition pass across all seed
obligations. The pass MUST account for:
- user-facing product surfaces and interaction modes
- product experience invariants and interaction-shape constraints
- runtime modules and service boundaries
- external integrations and dependency touchpoints
- data, storage, identity, and retrieval obligations
- user-facing behavior and policy constraints
- executable validation or proof obligations
- explicit exclusions and non-goals
- concrete component boundaries required to implement the seed
- dependencies between those components
- inherited implementation boundaries already present in the repo when declared
  by the seed
- prerequisite normalization, portability, or correction work that broader
  product work depends on
- extractable engine or subsystem boundaries when the seed indicates later
  separation may matter

Do not emit a partial ledger.
Hold output until every seed included-scope item and every seed constraint has
at least one candidate requirement block and every mandatory requirement has
candidate component coverage.

If the seed states that broader product work depends on inherited runtime
normalization, portability correction, or another prerequisite implementation
boundary, preserve that work as one-or-more separate mandatory requirements and
one-or-more separate component boundaries rather than absorbing it into
app-surface or generic workflow requirements.

If the seed defines product experience invariants, preserve them as one-or-more
separate mandatory requirements rather than collapsing them into generic
"surface exists" coverage.

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

### 4.3 Product Experience Invariant Gate

If the seed defines user-facing product experience invariants, emit one-or-more
`surface`, `behavior`, or `constraint` requirements that preserve those
invariants as buildable obligations.

Do not collapse experience invariants into a generic app-surface existence
requirement if their runtime behavior, layout constraints, evidence shape, or
anti-pattern boundaries can diverge.

### 4.4 Validation Obligation Gate

Every mandatory requirement MUST include at least one validation obligation that
describes executable or directly observable proof.

### 4.5 Component Decomposition Gate

After deriving requirements, perform a second decomposition pass that emits
`## Component Inventory`.

Each component must represent a buildable boundary with distinct artifacts,
runtime responsibility, dependencies, and validation obligations.

Do not collapse a multi-part application into one generic component if the
parts could be implemented, validated, or phased separately.

### 4.6 Exclusion Preservation Gate

Preserve seed exclusions and non-goals verbatim in `## Explicit Exclusions`.

### 4.7 Repository-State Neutrality Gate

The derivation layer MUST remain compatible with both of the following starting
states:
- relevant implementation artifacts do not yet exist under `02_EXODUS/`
- relevant implementation artifacts already exist under `02_EXODUS/`

Do not assume a clean repository.
Do not assume pre-existing implementation is already sufficient.

If a seed-defined requirement may depend on repository artifacts that could
already exist, derive requirements and components in a form compatible with
one of the following realization actions at roadmap or execution time:
- create missing artifact
- validate existing artifact
- extend incomplete artifact

Artifact presence alone must not be treated as fulfillment of a mandatory
requirement.

### 4.8 Foundational Preservation Gate

If the seed declares inherited implementation already present in the repo,
prerequisite normalization work, portability correction, or another enabling
foundation that broader product work depends on, emit one-or-more separate
mandatory requirement blocks for that foundation.

If the seed indicates that the inherited or enabling foundation may remain
structurally separable from the broader application, emit one-or-more separate
component blocks that preserve that boundary rather than folding it entirely
into app-surface or generic workflow components.

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

If a seed-declared product experience invariant is omitted or collapsed into a
generic app-surface requirement such that it cannot be planned or validated
separately: halt with `ARCHITECTURE_COVERAGE_FAILURE`.

If any mandatory requirement lacks component coverage: halt with
`ARCHITECTURE_COVERAGE_FAILURE`.

If seed-declared prerequisite normalization, inherited-boundary preservation,
or extractable engine work is absorbed into downstream app requirements rather
than preserved as a separate mandatory requirement: halt with
`ARCHITECTURE_COVERAGE_FAILURE`.

If a multi-part architecture is collapsed into one component without distinct
dependencies, runtime responsibilities, and validation obligations: halt with
`ARCHITECTURE_COVERAGE_FAILURE`.

If an inherited or prerequisite implementation boundary that the seed keeps
structurally distinct is folded into a generic workflow or app-surface
component: halt with `ARCHITECTURE_COVERAGE_FAILURE`.

If output violates the ledger schema: halt with `SCHEMA_VIOLATION`.

## 7. Prohibitions

- No qualitative completion language.
- No invented frameworks, files, runtimes, or commands.
- No reliance on prior chat or external memory.
- No omission of explicit product surfaces, integrations, or behavior rules.
- No omission of explicit prerequisite normalization, inherited-boundary, or
  extractable-engine obligations declared by the seed.
- No replacement of validation obligations with prose-only review language.
- No component inventory that merely restates requirements without buildable
  decomposition.
- No collapsing of structurally distinct inherited or prerequisite work into
  downstream app-surface or generic workflow components.

