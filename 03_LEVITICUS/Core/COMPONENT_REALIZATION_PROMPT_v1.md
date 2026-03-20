# COMPONENT REALIZATION PROMPT v1

## 1. Role

Transform `01_GENESIS/PROJECT_SEED.md` and
`01_GENESIS/REQUIREMENTS_LEDGER.md` into
`01_GENESIS/COMPONENT_REALIZATION_MAP.md` that conforms exactly to
`03_LEVITICUS/Core/COMPONENT_REALIZATION_MAP_SCHEMA_v1.md`.

Output only schema-valid component realization map content. No commentary or
explanation.

## 2. Objective

Freeze concrete component-to-artifact realization boundaries after requirements
derivation and before roadmap phasing so roadmap construction cannot satisfy
build-distinct components through generic or collapsed artifact coverage.

The realization layer must preserve:
- concrete primary artifact ownership
- concrete supporting and validation artifact paths
- non-collapse boundaries between sibling components
- dependency-consistent realization constraints

It must NOT introduce:
- phase sequencing
- entry or exit criteria
- command procedures
- implementation-complete claims

## 3. Input Contract

Primary authority source: `01_GENESIS/PROJECT_SEED.md`.
Normalized planning source: `01_GENESIS/REQUIREMENTS_LEDGER.md`.

Schema authority:
`03_LEVITICUS/Core/COMPONENT_REALIZATION_MAP_SCHEMA_v1.md`.

If required input artifacts are missing: halt with `SCHEMA_VIOLATION`.

## 4. Realization Pass

Before emitting output, perform a complete realization pass over every
component block in `01_GENESIS/REQUIREMENTS_LEDGER.md`.

The pass MUST account for:
- concrete implementation artifact ownership under `02_EXODUS/`
- concrete supporting artifact paths
- concrete validation artifact paths
- distinct user-facing surface boundaries
- workflow, module, integration, and validation-harness boundaries
- non-collapse rules implied by requirements or component purpose
- dependency preservation from the requirements ledger
- existing repository conventions when selecting artifact path patterns

Hold output until every component has:
- exactly one candidate realization block
- one-or-more primary artifact paths
- dependency-consistent boundary rules
- supporting or validation artifact paths where required

If the requirements ledger preserves build-distinct surface or control-layer
components, keep them distinct in concrete artifact ownership. Do not satisfy
multiple sibling surface components through one generic chat-surface artifact
set unless the requirements ledger explicitly makes them the same component.

## 5. Protection Gates

### 5.1 Component Ownership Gate

Every component must own one-or-more concrete primary artifact paths under
`02_EXODUS/`.

Do not emit generic realization language without concrete artifact ownership.

### 5.2 Surface Separation Gate

If the requirements ledger contains multiple `surface` components, preserve
their separate realization boundaries.

Do not collapse evidence, system/configuration, or other sibling surface
components into the primary chat surface artifact set.

### 5.3 Boundary Rule Gate

If a component purpose, artifact obligation, or source requirement preserves a
non-collapse boundary, emit one-or-more `Boundary Rules` that make that
preservation explicit.

### 5.4 Existing Convention Gate

When concrete artifact paths must be selected, prefer established repository
layout conventions already present in `02_EXODUS/` rather than inventing new
parallel structures without need.

### 5.5 No Roadmap Leakage Gate

Do not emit phases, phase identifiers, commands, entry criteria, exit criteria,
or schedule/order claims.

## 6. Failure Rules

If any component from `01_GENESIS/REQUIREMENTS_LEDGER.md` is omitted: halt with
`ARCHITECTURE_COVERAGE_FAILURE`.

If any realization block lacks concrete primary artifact ownership: halt with
`ARCHITECTURE_COVERAGE_FAILURE`.

If build-distinct sibling components are collapsed into identical primary
artifact ownership without explicit requirements support: halt with
`ARCHITECTURE_COVERAGE_FAILURE`.

If output violates the realization-map schema: halt with `SCHEMA_VIOLATION`.

## 7. Prohibitions

- No phases
- No commands
- No tests expressed as command lines
- No roadmap matrices
- No silent collapse of distinct surfaces into one artifact set
- No documentation-only realization blocks
- No reliance on chat memory or unstated external context

## 8. Output Contract

Output must:
- be written only to `01_GENESIS/COMPONENT_REALIZATION_MAP.md`
- conform exactly to
  `03_LEVITICUS/Core/COMPONENT_REALIZATION_MAP_SCHEMA_v1.md`
- contain no commentary before or after the realization map artifact
