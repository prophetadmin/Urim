# GENESIS SEED PROMPT v1

## 1. Role

Transform `01_GENESIS/IDEA.md` into `01_GENESIS/PROJECT_SEED.md` that
conforms exactly to `03_LEVITICUS/Core/PROJECT_SEED_SCHEMA_v1.md`.

You are generating a bounded bootstrap seed artifact.

You are NOT generating:
- A roadmap
- Phases
- Entry criteria
- Exit criteria
- Slash command specifications
- Resume protocol content
- Execution sequencing
- Implementation steps
- Transformation instructions for later commands

## 2. Objective

Produce a project-specific, structurally constrained, deterministic project
seed that preserves only the idea details that materially constrain later
requirements derivation and roadmap generation.

The seed must remain faithful to verified project-defining details while
preventing structural blending between:
- inherited implementation foundation
- prerequisite normalization or portability work
- user-facing product surfaces
- user-facing product experience invariants
- runtime anchors and environment facts
- behavior and policy constraints
- mechanically verifiable success conditions

## 3. Input Contract

Input source: `01_GENESIS/IDEA.md`.

Schema authority:
`03_LEVITICUS/Core/PROJECT_SEED_SCHEMA_v1.md`.

If the required source artifact is missing: halt with `SCHEMA_VIOLATION`.

## 4. Normalization Pass

Before emitting output, perform a complete normalization pass over the idea.

The pass MUST account for:
- project outcome intent
- core problem definition
- inherited implementation boundaries already present in the repo
- prerequisite normalization, portability, or enabling foundation work
- distinct user-facing product surfaces
- distinct user-facing product experience invariants
- runtime endpoints, collection identifiers, storage patterns, fanout rules,
  and other exact environment anchors
- behavior and policy rules that constrain implementation
- explicit exclusions and non-goals
- mechanically verifiable success conditions only

Do not emit output until each idea detail has been normalized into exactly one
schema-valid section role.

If the idea keeps structurally distinct concerns separate, preserve that
separation in the seed. Do not compress them into broad blended prose.

## 5. Protection Gates

### 5.1 Section Discipline Gate

Each statement must be written into the section defined by
`PROJECT_SEED_SCHEMA_v1`.

Do not place:
- runtime endpoints or storage patterns inside intent prose
- behavior rules inside environment assumptions
- product-surface inventory inside problem statement prose
- later-bootstrap instructions anywhere in the seed

### 5.2 Separation Gate

If the idea declares any of the following as distinct concerns, they MUST
remain separately represented in the seed:
- inherited implementation foundation already present in the repo
- prerequisite normalization or portability work
- each user-facing product surface
- each user-facing product experience invariant
- behavior or policy rules with distinct user-visible effects

Do not blend foundation, normalization, product surfaces, product experience
invariants, runtime anchors, and behavior rules into one multi-purpose
statement when later derivation may need to preserve those boundaries
separately.

### 5.3 Runtime Anchor Gate

If the idea provides exact endpoints, collection identifiers, path layouts,
fanout rules, or sidecar naming patterns that materially constrain later work,
preserve them verbatim in `Environment Assumptions`.

Do not generalize away verified runtime anchors.

### 5.4 Success Definition Gate

`Success Definition` may contain only mechanically verifiable bullets allowed by
`PROJECT_SEED_SCHEMA_v1`.

Do not emit qualitative, aesthetic, subjective, or procedural success claims.

### 5.5 Product Experience Invariant Gate

If the idea declares stylistic, interaction, presentation, evidence-shape,
setup-friction, or anti-pattern language that materially constrains the
finished product, preserve that language as atomic
`Product Experience Invariants` bullets.

Do not compress product experience intent into one generic "polished app"
statement when the idea defines distinct user-facing invariants.

### 5.6 No Transformation Leakage Gate

Do not emit statements about what later commands should extract, infer,
generate, or validate.

Do not emit "next step", "transformation intent", "standard to hold", or
similar meta-bootstrap guidance.

## 6. Output Contract

Output must:
- be written only to `01_GENESIS/PROJECT_SEED.md`
- conform exactly to `03_LEVITICUS/Core/PROJECT_SEED_SCHEMA_v1.md`
- contain only seed content permitted by the schema
- contain no commentary before or after the seed artifact

## 7. Failure Rules

If output violates the seed schema: halt with `SCHEMA_VIOLATION`.

If distinct inherited-foundation, prerequisite-normalization, product-surface,
product-experience, runtime-anchor, or behavior-rule concerns are blended into
one statement such that later derivation cannot preserve them separately: halt
with
`ARCHITECTURE_COVERAGE_FAILURE`.

If materially constraining product-experience language from the idea is omitted
or collapsed into non-specific seed prose: halt with
`ARCHITECTURE_COVERAGE_FAILURE`.

If later-command instructions, roadmap leakage, or execution sequencing appear
in the seed: halt with `SCHEMA_VIOLATION`.

## 8. Prohibitions

The output must NOT:
- contain extra sections or subsection headers
- contain roadmap phases
- contain numbered roadmap steps
- contain execution sequencing
- contain validation procedures
- contain slash commands
- contain resume logic
- claim completion
- omit stylistic, presentation, or anti-pattern language when it materially
  constrains the finished product shape
- replace concrete verified system facts with higher-level abstraction when the
  concrete facts affect architecture, integration, or artifact resolution

## 9. Formatting Rules

- Use only the exact section order defined by the schema.
- Use flat bullets only where the schema permits bullets.
- Output only the structured project seed artifact.
