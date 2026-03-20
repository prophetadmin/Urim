# `03_LEVITICUS/Execution/ROADMAP_<Roadmap Version>_PHASE_<IDENTIFIER>_RECEIPT.md` SCHEMA v1 - Canonical Implementation Phase Receipt

## 1. Scope

This schema defines the required structure for canonical implementation-phase
completion receipts written under `03_LEVITICUS/Execution/`.

Receipts under this schema are project-pass evidence artifacts.
They record that direct proof was obtained for every non-receipt Exit Criterion
of one implementation phase in the active roadmap version.

Validation-phase completion is not recorded through this schema.

## 2. Canonical Path Rule

The canonical receipt path for an implementation phase is:

`03_LEVITICUS/Execution/ROADMAP_<Roadmap Version>_PHASE_<IDENTIFIER>_RECEIPT.md`

Example:
`03_LEVITICUS/Execution/ROADMAP_v1_PHASE_2_RECEIPT.md`

The path MUST bind exactly one roadmap version and one phase identifier.

## 3. Required Structure

### `03_LEVITICUS/Execution/ROADMAP_<Roadmap Version>_PHASE_<IDENTIFIER>_RECEIPT.md`

**Roadmap Version**
<Version identifier matching the active roadmap artifact>

**Phase Identifier**
<Single integer identifier matching the roadmap phase number>

**Phase Title**
<Exact phase title from the roadmap block>

**Phase Type**
implementation

**Receipt Status**
PASS

**Realization Mode**
<One of: `create`, `validate`, `extend`, `mixed`>

**Validated By**
`/record_phase_completion`

**Verified Exit Criteria**
- <Verbatim non-receipt Exit Criterion from the roadmap phase>
- <Verbatim non-receipt Exit Criterion from the roadmap phase>

## 4. Structural Constraints

Receipts must contain exactly the fields defined in Section 3 and no additional
top-level fields.

`Roadmap Version` must match both:
- the active roadmap artifact version
- the version token encoded in the receipt path

`Phase Identifier` must match both:
- the implementation phase identifier in the active roadmap
- the identifier encoded in the receipt path

`Phase Title` must match the exact roadmap phase title for the referenced
implementation phase.

`Phase Type` must be the literal value `implementation`.

`Receipt Status` must be the literal value `PASS`.

`Realization Mode` records how this project pass realized the phase boundary:
- `create` when required implementation artifacts were created in this pass
- `validate` when pre-existing implementation artifacts were directly proven
  sufficient in this pass without required extension
- `extend` when pre-existing implementation artifacts required repository-owned
  extension in this pass
- `mixed` when the phase required more than one of the modes above

`Verified Exit Criteria` must:
- list every non-receipt Exit Criterion from the referenced roadmap phase
- preserve declared order from the roadmap phase
- copy the criterion text verbatim
- exclude receipt-path existence or receipt-schema criteria for the same
  receipt artifact

## 5. Minimalism Rule

Implementation phase receipts must remain structurally minimal.

They MUST NOT contain:
- historical narrative
- session transcript excerpts
- timestamps
- qualitative commentary
- design discussion
- copied command output logs

They function as canonical project-pass completion receipts, not as work logs.

## 6. Schema Authority

This document defines `PHASE_COMPLETION_RECEIPT_SCHEMA_v1`.

Any canonical implementation-phase receipt written under
`03_LEVITICUS/Execution/` must conform exactly to this schema.
Deviation from the canonical path rule, required structure, or structural
constraints constitutes schema violation.
