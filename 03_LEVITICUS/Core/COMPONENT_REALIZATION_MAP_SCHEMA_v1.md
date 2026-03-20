# COMPONENT REALIZATION MAP SCHEMA v1

## 1. Scope

This schema defines the required structure for
`01_GENESIS/COMPONENT_REALIZATION_MAP.md`.

The component realization map is a deterministic planning artifact that freezes
concrete component-to-artifact realization boundaries after requirements
derivation and before roadmap phasing.

Its role is to prevent later roadmap construction from collapsing build-distinct
components into generic artifact coverage.

## 2. Canonical Path Rule

The canonical output path for a generated component realization map is:

`01_GENESIS/COMPONENT_REALIZATION_MAP.md`

No alternate filename is permitted.

## 3. Required Structure

The component realization map MUST conform to the exact structure below.
Order is fixed and non-reorderable.
Headings are case-sensitive.

# COMPONENT_REALIZATION_MAP.md

**Derived From**
`01_GENESIS/PROJECT_SEED.md`
`01_GENESIS/REQUIREMENTS_LEDGER.md`

**Schema Version**
v1

## Realization Inventory

### REAL-<IDENTIFIER> - <TITLE>

**Source Component ID**
`COMP-<IDENTIFIER>`

**Source Requirement IDs**
- `REQ-<IDENTIFIER>`
- `REQ-<IDENTIFIER>`

**Primary Artifact Paths**
- `02_EXODUS/...`
- `02_EXODUS/...`

**Supporting Artifact Paths**
- `02_EXODUS/...`
- `None`

**Dependency Components**
- `COMP-<IDENTIFIER>`
- `None`

**Boundary Rules**
- <Concrete non-collapse or ownership rule>
- <Concrete non-collapse or ownership rule>

**Validation Artifact Paths**
- `02_EXODUS/tests/...`
- `None`

**Realization Objective**
<Single-paragraph structural statement describing how the component must
materialize in implementation artifacts without phase sequencing.>

## 4. Structural Constraints

1. Realization blocks MUST begin with:
   `### REAL-<IDENTIFIER> - <TITLE>`

2. `<IDENTIFIER>` MUST be a monotonically increasing integer starting at 1.

3. All bolded subsections inside a realization block are mandatory and must
   appear exactly once.

4. `Source Component ID` MUST reference a component block defined in
   `01_GENESIS/REQUIREMENTS_LEDGER.md`.

5. `Source Requirement IDs` MUST reference one-or-more requirement blocks from
   the referenced source component.

6. `Primary Artifact Paths` MUST contain one-or-more workspace-relative paths
   under `02_EXODUS/` that do not end with `.md`.

7. `Supporting Artifact Paths`, `Dependency Components`, `Boundary Rules`, and
   `Validation Artifact Paths` MUST each contain at least one flat bullet.

8. `Supporting Artifact Paths` and `Validation Artifact Paths` MAY contain the
   literal bullet `None` only when no additional supporting or validation
   artifact path is required beyond another listed subsection.

9. `Realization Objective` MUST be prose only. It MUST NOT contain bullets,
   phase sequencing, or command names.

## 5. Coverage Rules

The component realization map MUST satisfy all of the following:

1. Every component block in `01_GENESIS/REQUIREMENTS_LEDGER.md` MUST produce
   exactly one realization block.

2. No realization block may describe only documentation output. Every
   realization block must include concrete implementation artifact ownership
   under `02_EXODUS/`.

3. If two components remain build-distinct in the requirements ledger, their
   realization blocks MUST preserve distinct primary artifact ownership rather
   than mapping them to identical complete primary artifact path sets.

4. If a source component is of type `surface`, its realization block MUST
   include primary artifact paths for that surface and MUST include at least one
   boundary rule that preserves its separation from sibling user-facing
   surfaces when such siblings exist.

5. If a source component purpose or artifact obligation preserves a non-collapse
   boundary, the corresponding realization block MUST express that boundary in
   `Boundary Rules`.

6. If a source component has dependencies, `Dependency Components` MUST preserve
   those dependencies or narrow them without contradiction.

7. If a source component has executable or directly observable validation
   obligations, `Validation Artifact Paths` MUST list one-or-more concrete
   validation artifact paths under `02_EXODUS/` or `02_EXODUS/tests/` unless
   the component is purely realized through another listed validation artifact
   and the block explicitly uses the literal bullet `None`.

## 6. Schema Authority

This document defines `COMPONENT_REALIZATION_MAP_SCHEMA_v1`.

Any generated component realization map MUST conform exactly to this schema.
Deviation from required headings, heading order, path rules, component coverage,
or non-collapse preservation rules constitutes schema violation.
