# PROJECT CHARTER
## Prophet Workspace - Project Governance

Location: `03_LEVITICUS/Contracts/project_charter.md`  
Status: Authoritative (Project Scope and Governance Principles)

---

## 1. Scope

This charter governs behavior within this repository and defines constitutional project rules.

It establishes:
- authority boundaries
- layer responsibilities
- evidence handling constraints
- promotion discipline
- tool replaceability requirements

This charter does not define runtime file-loading behavior.  
Runtime execution behavior is defined in `AGENTS.md`.

---

## 2. Authority Model (Binding)

Authority order within this workspace:

1. Filesystem state
2. This charter
3. Canonical project artifacts (`PROJECT_ROADMAP`, `STATE_SUMMARY`, canonical phase receipts, approved canon)
4. Chat output

Chat is never authoritative.

---

## 3. Layer Responsibilities

### GENESIS
- ideation and problem framing
- non-binding

### EXODUS
- working drafts, code, experiments
- mutable, non-canonical by default

### LEVITICUS
- governance rules, interfaces, constraints

### DEUTERONOMY
- approved canon and durable summaries
- superseded only by explicit revision

### NUMBERS
- forensic logs and decision trail
- append-only intent

---

## 4. Evidence and Retrieval Discipline

Evidence handling requirements:
- retrieval must be explicit
- evidence must remain verbatim when cited as evidence
- hidden/implicit memory must not be treated as authority

Assistants must not:
- invent authority
- silently promote artifacts
- rewrite evidence as if original

---

## 5. Promotion Rules

Promotion from non-canonical to canonical layers requires explicit human action.

No silent promotion is permitted.

Promotion actions must:
- identify source artifact
- identify destination canonical artifact
- record rationale in project state/logs

---

## 6. Bootstrap Derivation Discipline

Project-defining planning semantics must originate from the repository's
Genesis idea artifacts.

For this workspace, the authoritative human-authored bootstrap source is:
- `01_GENESIS/IDEA.md`

The following are derived planning artifacts:
- `01_GENESIS/PROJECT_SEED.md`
- `01_GENESIS/REQUIREMENTS_LEDGER.md`
- `01_GENESIS/COMPONENT_REALIZATION_MAP.md`
- `03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md`

During an active bootstrap run, agents may:
- use bounded scaffold-and-backfill writes inside the artifact currently being
  produced
- correct bootstrap prompt or schema artifacts when explicitly authorized by
  repository policy
- rerun the earliest affected bootstrap stage until a schema-valid downstream
  artifact is produced

After a derived planning artifact has been successfully emitted by its
producing bootstrap command, semantic repair must occur through regeneration
from the earliest affected bootstrap stage rather than ad hoc manual patching
of that completed derived artifact.

---

## 7. Replaceability Principle

All tools and models must remain replaceable.

No project-critical logic may depend on:
- proprietary hidden memory
- opaque persistence mechanisms
- non-portable assistant state

The repository remains the durable system of record.

---

## 8. Change Control

Changes to this charter require:
- explicit revision
- revision note
- logged rationale

Silent governance drift is prohibited.

---

## 9. Applicability

This charter applies to this repository only.
