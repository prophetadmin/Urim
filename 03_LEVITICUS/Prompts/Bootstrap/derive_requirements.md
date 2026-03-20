# /derive_requirements Prompt

Command Name
/derive_requirements

Purpose
Transform `01_GENESIS/PROJECT_SEED.md` into
`01_GENESIS/REQUIREMENTS_LEDGER.md` by applying
`03_LEVITICUS/Core/REQUIREMENTS_DERIVATION_PROMPT_v1.md` and enforcing
`03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`.

Required Inputs
`01_GENESIS/PROJECT_SEED.md`
`03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`
`03_LEVITICUS/Core/REQUIREMENTS_DERIVATION_PROMPT_v1.md`
`03_LEVITICUS/Core/FAILURE_CODES_v1.md`
`03_LEVITICUS/Prompts/Bootstrap/derive_requirements.md`

Optional Inputs
Explicit derivation focus override declared before execution

Careful Derivation Pass (Mandatory, Internal)
Before writing `01_GENESIS/REQUIREMENTS_LEDGER.md`, perform an exhaustive
decomposition pass over `01_GENESIS/PROJECT_SEED.md`.

The pass must explicitly account for:
- user-facing product surfaces and delivery shape
- product experience invariants and interaction-shape constraints
- runtime modules and service boundaries
- external integrations
- data, storage, and identity obligations
- user-facing behavior and policy rules
- executable validation obligations
- exclusions and non-goals
- concrete component boundaries
- dependencies between components
- inherited implementation boundaries already present in the repo when declared by the seed
- prerequisite normalization or portability work that broader product work depends on
- extractable engine or subsystem boundaries when the seed indicates later separation may matter

Do not emit output until every seed Scope Boundaries Included item and every
seed Constraint item is represented by one-or-more candidate requirement
blocks and every mandatory requirement is represented by one-or-more candidate
component blocks.

If the seed states that broader product work depends on inherited runtime
normalization, corpus-topology correction, portability work, or another
prerequisite implementation boundary, preserve that work as one-or-more
separate mandatory requirement blocks and one-or-more separate component
blocks rather than absorbing it into downstream app-surface or generic
workflow requirements.

Coverage Gate (Mandatory)
Before output, verify:
- every seed Scope Boundaries Included item maps to at least one mandatory
  requirement block
- every seed Constraints item maps to at least one mandatory requirement block
- every seed Product Experience Invariants item maps to at least one mandatory
  requirement block
- every seed-declared product surface maps to at least one `surface`
  requirement block
- no seed-declared product experience invariant is collapsed into a generic
  "surface exists" requirement when its behavior or presentation constraints
  can diverge
- every seed-declared prerequisite normalization, portability correction, or
  inherited-boundary preservation obligation maps to at least one separate
  mandatory requirement block
- every mandatory requirement includes at least one artifact obligation and at
  least one validation obligation
- every mandatory requirement maps to one-or-more component blocks
- every component block includes at least one artifact obligation, runtime
  responsibility, and validation obligation
- no multi-part application shape is collapsed into one generic component when
  its build boundaries can diverge
- no prerequisite normalization or extractable inherited-engine boundary is
  collapsed into an app-surface requirement or one generic workflow component

If any coverage requirement fails, HALT with `ARCHITECTURE_COVERAGE_FAILURE`.

Output Contract
Output must be written only to `01_GENESIS/REQUIREMENTS_LEDGER.md` in
overwrite-only mode.
Output must conform exactly to
`03_LEVITICUS/Core/REQUIREMENTS_LEDGER_SCHEMA_v1.md`.
No commentary is permitted outside schema-valid ledger content.

Guardrails
Must derive requirements only from `01_GENESIS/PROJECT_SEED.md`.
Must not invent frameworks, file layouts, runtimes, or command names not
grounded in the seed.
Must not collapse user-facing product surfaces into internal-only module
requirements.
Must not collapse seed-declared product experience invariants into generic
surface-exists requirements.
Must not collapse build-distinct implementation boundaries into a single vague
component.
Must not collapse prerequisite normalization work, inherited implementation
boundaries, or extractable engine boundaries into downstream app requirements
when the seed keeps them structurally distinct.
Must preserve exclusions and non-goals verbatim when present in the seed.
Must emit failures using canonical codes from `03_LEVITICUS/Core/FAILURE_CODES_v1.md`.

Deterministic Advancement Rule
`/derive_requirements` is complete only when a compliant
`01_GENESIS/REQUIREMENTS_LEDGER.md` is emitted from
`01_GENESIS/PROJECT_SEED.md` with no other project artifact modified.

