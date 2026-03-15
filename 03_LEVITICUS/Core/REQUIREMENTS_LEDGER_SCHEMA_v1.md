# REQUIREMENTS LEDGER SCHEMA v1

## 1. Scope

This schema defines the required structure for
`01_GENESIS/REQUIREMENTS_LEDGER.md`.

The requirements ledger is project-agnostic in structure.
It normalizes `01_GENESIS/PROJECT_SEED.md` into a mandatory planning inventory
that must be consumed by roadmap generation and roadmap validation.

## 2. Canonical Path Rule

The canonical output path for a generated requirements ledger is:

`01_GENESIS/REQUIREMENTS_LEDGER.md`

No alternate filename is permitted.

## 3. Required Ledger Structure

The ledger MUST conform to the exact structure below.
Order is fixed and non-reorderable.
Headings are case-sensitive.

# REQUIREMENTS_LEDGER.md

**Derived From**
`01_GENESIS/PROJECT_SEED.md`

**Schema Version**
v1

## Mandatory Requirement Inventory

### REQ-<IDENTIFIER> - <TITLE>

**Requirement Type**
<One of: `surface`, `module`, `behavior`, `integration`, `data`, `constraint`, `validation`>

**Source Anchor**
<Exact anchor string copied verbatim from `01_GENESIS/PROJECT_SEED.md`>

**Requirement Statement**
<Single-paragraph structural requirement derived from the source anchor>

**Artifact Obligation**
- <Artifact class or implementation obligation>
- <Artifact class or implementation obligation>

**Validation Obligation**
- <Mechanically verifiable validation obligation>
- <Mechanically verifiable validation obligation>

**Mandatory**
<`yes` or `no`>

## Component Inventory

### COMP-<IDENTIFIER> - <TITLE>

**Component Type**
<One of: `surface`, `service`, `module`, `integration`, `data_store`, `workflow`, `validation_harness`>

**Source Requirement IDs**
- `REQ-<IDENTIFIER>`
- `REQ-<IDENTIFIER>`

**Purpose**
<Single-paragraph structural purpose statement>

**Dependencies**
- `COMP-<IDENTIFIER>`
- `None`

**Artifact Obligation**
- <Concrete artifact class or implementation obligation>
- <Concrete artifact class or implementation obligation>

**Runtime Responsibility**
- <Concrete runtime responsibility>
- <Concrete runtime responsibility>

**Validation Obligation**
- <Mechanically verifiable validation obligation>
- <Mechanically verifiable validation obligation>

## Explicit Exclusions

- <Verbatim exclusion, non-goal, or out-of-scope item from `01_GENESIS/PROJECT_SEED.md`>

## 4. Structural Constraints

1. Requirement blocks MUST begin with:
   `### REQ-<IDENTIFIER> - <TITLE>`

2. `<IDENTIFIER>` MUST be a monotonically increasing integer starting at 1.

3. All bolded subsections inside a requirement block are mandatory and must
   appear exactly once.

4. `Requirement Type` MUST use one of the enumerated values in Section 3.

5. `Source Anchor` MUST be copied verbatim from `01_GENESIS/PROJECT_SEED.md`.

6. `Artifact Obligation` and `Validation Obligation` MUST each contain at
   least one flat bullet.

7. `Mandatory` MUST be either `yes` or `no`.

8. Component blocks MUST begin with:
   `### COMP-<IDENTIFIER> - <TITLE>`

9. Component `<IDENTIFIER>` MUST be a monotonically increasing integer
   starting at 1.

10. All bolded subsections inside a component block are mandatory and must
    appear exactly once.

11. `Component Type` MUST use one of the enumerated values in Section 3.

12. `Source Requirement IDs` MUST reference one-or-more requirement blocks
    defined in `## Mandatory Requirement Inventory`.

13. `Dependencies`, `Artifact Obligation`, `Runtime Responsibility`, and
    `Validation Obligation` MUST each contain at least one flat bullet.

14. `## Explicit Exclusions` MUST preserve verbatim excluded or non-goal items
   from `01_GENESIS/PROJECT_SEED.md` when they exist.

## 5. Derivation Coverage Rules

The ledger MUST satisfy all of the following:

1. Every item under seed `Scope Boundaries` -> `Included` MUST produce at least
   one requirement block with `Mandatory` = `yes`.

2. Every item under seed `Constraints` MUST produce at least one requirement
   block with `Mandatory` = `yes`.

3. If the seed explicitly defines a user-facing product surface or delivery
   shape (for example chat-first app, web app, API, CLI, dashboard), the
   ledger MUST include at least one `surface` requirement for that shape.

4. If the seed explicitly defines a multi-step subsystem, resolver,
   orchestrator, pipeline stage, or integration boundary, the ledger MUST
   decompose that work into one-or-more `module`, `integration`, or `data`
   requirements rather than collapsing it into a single generic requirement.

5. If the seed defines user-facing policies or behavior rules, the ledger MUST
   include one-or-more `behavior` requirements covering them.

6. If the seed defines success conditions, executable checks, or proof
   obligations, the ledger MUST include one-or-more `validation` requirements.

7. No mandatory requirement may describe only documentation output. Mandatory
   requirements must imply implementable artifacts, executable behavior, or
   verifiable structural constraints.

8. Validation obligations MUST describe executable or directly observable proof.
   They MUST NOT be satisfiable by prose alone.

9. Every mandatory requirement MUST map to one-or-more component blocks through
   `Source Requirement IDs`.

10. If the seed explicitly defines a user-facing product surface, the ledger
    MUST include at least one component of type `surface` for that shape.

11. If the seed defines a multi-step architecture, the ledger MUST emit
    materially distinct component blocks when implementation boundaries,
    dependencies, or validation paths can diverge.

12. No component may exist only as a documentation placeholder. Every
    component must imply concrete artifacts, runtime behavior, and executable
    validation obligations.

## 6. Schema Authority

This document defines `REQUIREMENTS_LEDGER_SCHEMA_v1`.

Any generated requirements ledger MUST conform exactly to this schema.
Deviation from required headings, heading order, requirement types, verbatim
source anchors, or derivation coverage rules constitutes schema violation.
