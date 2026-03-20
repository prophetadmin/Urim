# `03_LEVITICUS/STATE_SUMMARY.md` SCHEMA v1 - Canonical Continuity Block

## 1. Scope

This schema defines the required structure for
`03_LEVITICUS/STATE_SUMMARY.md`.

The canonical project root is the directory containing:
- `01_GENESIS/`
- `02_EXODUS/`
- `03_LEVITICUS/`

All artifact paths in the state summary are resolved relative to that project
root.

## 2. State Block - Required Fields

### `03_LEVITICUS/STATE_SUMMARY.md`

**Active Phase**
<Single integer identifier matching a roadmap phase number>

**Roadmap Version**
<Version identifier matching the active roadmap artifact (example: v1)>

**Completed Phases**
- <Phase identifier>
- <Phase identifier>

**Current Work Artifact**
<Path to the single artifact to open first on resume>

**Open Risks**
- <Short structural risk statement>
- <Short structural risk statement>

**Deferred Registry**
- ID: <Unique ID>
  Origin Phase: <Phase identifier>
  Description: <Deferred work description>
  Reason: <Why deferred>
  Re-entry Phase: <Phase identifier>
  Status: <Open | Resolved>

**Next Deterministic Objective**
<Single structural action that advances one unmet Exit Criterion>

## 3. Structural Constraints

Exactly one `03_LEVITICUS/STATE_SUMMARY.md` block may exist per session end.

Completed Phases must list identifiers only.
No historical description or narrative is permitted.

Roadmap Version must match the latest active roadmap artifact version used for
execution.

Current Work Artifact must reference exactly one file path.

Open Risks must be structural or execution risks only.
No commentary or qualitative reflection is permitted.

Deferred Registry entries are append-only.
Entries may not be removed.
Status may change from Open to Resolved only.

Next Deterministic Objective must:
- advance a single unmet Exit Criterion
- be executable without reinterpretation
- not span multiple phases

## 4. Minimalism Rule

`03_LEVITICUS/STATE_SUMMARY.md` must remain structurally minimal.

It MUST NOT contain:
- historical session logs
- narrative recap
- design discussion
- validation transcripts
- proof snippets

It MUST contain only the defined fields in Section 2.

`03_LEVITICUS/STATE_SUMMARY.md` functions as a re-entry index, not a work log.
