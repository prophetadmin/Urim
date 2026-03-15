# ROADMAP SCHEMA v2 - Implementation-Bearing Phase Template

Schema Revision: v2.1

## 1. Scope

This schema defines the required structure for any roadmap generated into
`03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md` when using v2 planning rules.

The schema is project-agnostic.
It must not assume a specific application type, language, framework, runtime,
or directory layout beyond the canonical project root described below.

## 2. Canonical Path Resolution

The canonical project root is the directory that contains:
- `01_GENESIS/`
- `02_EXODUS/`
- `03_LEVITICUS/`

All artifact paths in a roadmap MUST be written as workspace-relative paths from
that project root.

## 3. Phase Block - Required Structure

Each phase MUST conform to the exact block structure defined below.
No additional top-level headings are permitted inside a phase block.
Headings are case-sensitive.
Order is fixed and non-reorderable.

### PHASE <IDENTIFIER> - <TITLE>

**Phase Type**
<One of: `implementation`, `validation`>

**Purpose**
<Single-paragraph structural objective statement. No qualitative claims.>

**Inputs (Required)**
- <Artifact or dependency identifier>
- <Artifact or dependency identifier>

**Entry Criteria (All Required)**
- <Mechanically verifiable condition>
- <Mechanically verifiable condition>

**Work Definition (Scope-Bound)**
- <Concrete action>
- <Concrete action>

**Exit Criteria (All Required)**
- <Mechanically verifiable structural condition>
- <Mechanically verifiable structural condition>

**Produced Artifacts**
- <Artifact path>
- <Artifact path>

**Failure Signals**
- <Observable structural failure condition>
- <Observable structural failure condition>

## 4. Structural Constraints

1. A phase block MUST begin with:
   `### PHASE <IDENTIFIER> - <TITLE>`

2. `<IDENTIFIER>` MUST be a monotonically increasing integer starting at 1.

3. All bolded subsection headings inside a phase block are mandatory and must
   appear exactly once.

4. No subsection may contain freeform narrative outside its defined purpose.

5. Exit Criteria MUST define structural, observable, or executable conditions.
   They MUST NOT reference:
   - satisfaction
   - quality
   - adequacy
   - logical soundness
   - review status
   - subjective completeness

6. Completion of a phase is defined strictly as all Exit Criteria evaluating
   TRUE under direct inspection.

7. A roadmap MUST contain at least:
   - one `implementation` phase
   - one `validation` phase
   - `PHASE 1` with `Phase Type` = `implementation`

## 5. Criteria Grammar

### 5.1 Allowed Entry/Exit Criterion Forms

A criterion MUST conform to one of the following forms:

1. Artifact Exists
   `File exists at <workspace-relative path>.`

2. Artifact Contains Anchor
   `<File path> contains the exact anchor string: "<string>".`

3. Structure Present
   `<File path> contains heading: "<heading text>".`

4. Count Condition
   `<File path> contains exactly <N> instances of "<string>".`

5. Enumeration Complete
   `All required subsections defined in Section 3 are present exactly once.`

6. Deterministic Mapping
   `<Artifact A> is generated strictly from <Artifact B> without schema deviation.`

7. Command Exit Code
   `Command "<command>" exits with code <N>.`

8. Command Output Anchor
   `Command "<command>" exits with code <N> and emits "<anchor>" in <stream or output path>.`

### 5.2 Disallowed Criterion Forms

A criterion is INVALID if it:
- uses qualitative adjectives
- uses verbs such as "reviewed", "validated", "confirmed", or "looks correct"
- depends on human interpretation without structural anchor
- references external unstated memory

Invalid criteria invalidate the phase.

## 6. Phase-Type Enforcement

### 6.1 Implementation Phase Rules

An `implementation` phase MUST satisfy all of the following:
- At least one Exit Criterion MUST be of type Command Exit Code or Command
  Output Anchor.
- At least one Produced Artifact MUST be a non-documentation implementation
  artifact under `02_EXODUS/` (for example executable/module/service/surface/
  test harness).
- Exit Criteria MUST NOT be satisfiable using only `.md` artifacts plus
  file-exists or anchor checks.
- Command criteria MUST NOT be exclusively dry-run commands.
- Produced Artifacts MUST NOT be exclusively governance or planning artifacts
  under `01_GENESIS/` or `03_LEVITICUS/`.

If any rule above is not met: `ARCHITECTURE_COVERAGE_FAILURE`.

### 6.2 Validation Phase Rules

A `validation` phase MUST contain at least three command-based Exit Criteria.
At least one command criterion MUST exercise the end-to-end system path required
by the seed's declared problem and scope boundaries.

## 7. Requirements Coverage Rule

A roadmap MUST include a coverage matrix block before the Component Coverage
Matrix:

**Requirements Coverage Matrix**
- `REQ-<IDENTIFIER>` -> <Phase identifier(s)> -> <Produced artifact path(s)> -> <Exit criterion anchor>

Coverage obligations:
- Every requirement block in `01_GENESIS/REQUIREMENTS_LEDGER.md` with
  `Mandatory` = `yes` MUST map to at least one phase Exit Criterion.
- Every requirement of type `surface`, `module`, or `integration` MUST map to
  at least one Produced Artifact and at least one command-based Exit Criterion.
- Every requirement of type `behavior`, `data`, or `constraint` MUST map to at
  least one Exit Criterion that proves the requirement structurally or
  executably.
- Every requirement of type `validation` MUST map to at least one `validation`
  phase Exit Criterion.
- Every mandatory requirement MUST map to at least one Produced Artifact path
  under `02_EXODUS/` that does not end with `.md`.
- No mandatory requirement may map only to documentation artifacts plus
  file-exists or anchor checks.

Any unmapped mandatory requirement is a schema violation.

## 8. Component Coverage Rule

A roadmap MUST include a coverage matrix block before the Seed Coverage Matrix:

**Component Coverage Matrix**
- `COMP-<IDENTIFIER>` -> <Phase identifier(s)> -> <Produced artifact path(s)> -> <Exit criterion anchor>

Coverage obligations:
- Every component block in `01_GENESIS/REQUIREMENTS_LEDGER.md` MUST map to at
  least one phase Exit Criterion and at least one Produced Artifact.
- Every component of type `surface`, `service`, `module`, `integration`, or
  `workflow` MUST map to at least one command-based Exit Criterion.
- Every component of type `validation_harness` MUST map to at least one
  `validation` phase Exit Criterion.
- Every component block MUST map to at least one Produced Artifact path under
  `02_EXODUS/` that does not end with `.md`.
- Component dependencies MUST not be contradicted by mapped phase ordering.
- No component may map only to documentation artifacts plus file-exists or
  anchor checks.

Any unmapped component is a schema violation.

## 9. Seed Coverage Rule

A roadmap MUST include a coverage matrix block before Phase 1:

**Seed Coverage Matrix**
- <Seed constraint or included-scope item> -> <Phase identifier(s)> -> <Exit criterion anchor>

Coverage obligations:
- Every item from seed `Scope Boundaries` -> `Included` MUST map to at least one
  phase Exit Criterion.
- Every item from seed `Constraints` MUST map to at least one phase Exit
  Criterion.

Any unmapped item is a schema violation.

## 10. Phase Completion Rule

A phase is COMPLETE if and only if:
- every Exit Criterion evaluates TRUE

If any Exit Criterion is unmet, the phase remains ACTIVE.

`Produced Artifacts` declares the artifacts expected to be created or updated by
that phase. Any artifact whose existence is required for completion must also be
expressed explicitly in `Exit Criteria`.

`Failure Signals` are diagnostic indicators for validation and drift handling.
They do not add independent completion conditions unless a phase explicitly
anchors them through `Exit Criteria`.

No qualitative declaration such as "done", "complete", or "satisfactory" has
any effect on phase state.

## 11. Schema Authority

This document defines `ROADMAP_SCHEMA_v2` with revision `v2.1`.

Any roadmap generated under v2 command contracts MUST conform exactly to this
schema. Deviation from required headings, required order, criteria grammar,
phase-type enforcement, seed coverage rules, or phase completion rules
constitutes schema violation.

Schema changes require:
- explicit version increment
- documented delta section appended to this file

No planner, agent, or resume protocol may redefine or extend this schema
implicitly.

## 12. Revision Metadata Rule (When Superseding Existing Roadmap)

If a roadmap revision supersedes an existing roadmap artifact, the revised
roadmap MUST include a top metadata block before the Requirements Coverage
Matrix:

**Roadmap Version**
<Version identifier, for example: v2, v3>

**Supersedes**
<Prior roadmap version identifier or `None`>

**Revision Rationale**
<Short structural reason for revision>

When generating an initial roadmap under v2 rules, `Supersedes` should be
`None`.
The active roadmap artifact is the highest available
`03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md` by integer version.

## 13. Delta v2.1

Change summary for revision `v2.1`:
- Removed `contract` as an allowed `Phase Type` value.
- Required `PHASE 1` to be `implementation`.
- Strengthened implementation phase enforcement to require non-documentation
  artifacts under `02_EXODUS/`.
- Added code-first mapping constraints for mandatory requirements and component
  coverage so mappings include non-`.md` artifacts under `02_EXODUS/`.
