# /validate_map_v2 Prompt

Command Name
/validate_map_v2

Purpose
Validate a roadmap artifact against `03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`,
requirements-ledger coverage, and seed-coverage requirements so roadmap
acceptance cannot pass on documentation-only implementation criteria.

Required Inputs
`01_GENESIS/PROJECT_SEED.md`
`01_GENESIS/REQUIREMENTS_LEDGER.md`
`03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`
`03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`
`03_LEVITICUS/PROJECT_ROADMAP_v<INTEGER>.md` (target)

Validation Checks (All Required)
1. Schema structure and subsection order exactly match v2 schema.
2. Phase identifiers are monotonically increasing integers starting at 1.
3. `01_GENESIS/REQUIREMENTS_LEDGER.md` conforms to
   `03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`.
4. Required `Requirements Coverage Matrix` exists and maps every mandatory
   requirements-ledger item to concrete phase Exit Criteria and Produced
   Artifacts.
5. Required `Component Coverage Matrix` exists and maps every component block
   to concrete phase Exit Criteria and Produced Artifacts.
6. Required `Seed Coverage Matrix` exists and maps:
   - all seed Scope Boundaries Included items
   - all seed Constraints items
   to concrete phase Exit Criteria.
7. `PHASE 1` has `Phase Type` = `implementation`.
8. At least one phase has `Phase Type` = `implementation`.
9. At least one phase has `Phase Type` = `validation`.
10. Every `implementation` phase includes:
   - at least one command-based Exit Criterion
   - at least one non-documentation produced artifact under `02_EXODUS/`
   - at least one non-dry-run command criterion
11. No implementation phase can complete using only `.md` file-exists and anchor
   checks.
12. Every mandatory requirement maps to at least one produced artifact path
    under `02_EXODUS/` that does not end with `.md`.
13. No mandatory ledger item of type `surface`, `module`, or `integration`
    maps only to documentation artifacts or anchor checks.
14. Every component block maps to at least one produced artifact path under
    `02_EXODUS/` that does not end with `.md`.
15. No component block maps only to documentation artifacts or anchor checks.
16. Component dependency ordering is not contradicted by mapped phase order.
17. Validation phase includes at least one command criterion that exercises the
   end-to-end system path implied by the seed problem and included scope.
18. If the requirements ledger contains a mandatory `surface` requirement, the
    roadmap includes at least one implementation artifact and one validation
    command that exercise that surface.
19. If the requirements ledger contains build-distinct component blocks, the
    roadmap preserves them as separately mappable implementation or validation
    work rather than collapsing them into one generic artifact path.
20. Roadmap does not invent command/path/framework conventions unless grounded in
   seed or explicitly allowed in policy.

Failure Contract
- Structural or grammar failure: `SCHEMA_VIOLATION`
- Missing architecture or coverage mapping: `ARCHITECTURE_COVERAGE_FAILURE`
- Unseeded command/path/runtime assumptions: `SCOPE_VIOLATION`

Output Contract
Emit only one of:
- `PASS`
- `FAIL <CODE>: <single-line reason>`

