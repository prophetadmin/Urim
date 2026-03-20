# PROJECT SEED SCHEMA v1

## 1. Scope

This schema defines the required structure for `01_GENESIS/PROJECT_SEED.md`.

The project seed is a deterministic bootstrap artifact. It normalizes the
project idea into a bounded statement of intent, problem, scope, assumptions,
constraints, product experience invariants, and mechanically verifiable
success conditions that later bootstrap commands must consume.

## 2. Canonical Path Rule

The canonical output path for a generated project seed is:

`01_GENESIS/PROJECT_SEED.md`

No alternate filename is permitted.

## 3. Required Seed Structure

The seed MUST conform to the exact structure below.
Order is fixed and non-reorderable.
Headings are case-sensitive.

Project Intent
<Single prose paragraph stating what the project is intended to create.>

Problem Statement
<Single prose block stating the problem being addressed.>

Scope Boundaries
Included
- <Atomic included-scope boundary>

Excluded
- <Atomic excluded-scope boundary>

Non-Goals
- <Explicit non-goal>

Environment Assumptions
- <Factual runtime, storage, tooling, or contextual assumption>

Constraints
- <Atomic structural, technical, behavioral, or environmental limitation>

Product Experience Invariants
- <Atomic user-facing experience, interaction, presentation, or anti-pattern invariant>

Success Definition
- <Mechanically verifiable statement>

## 4. Structural Constraints

1. The only permitted section titles are:
   `Project Intent`
   `Problem Statement`
   `Scope Boundaries`
   `Non-Goals`
   `Environment Assumptions`
   `Constraints`
   `Product Experience Invariants`
   `Success Definition`

2. No additional sections, subsection headings, inline labeled subsections, or
   transformed-output instructions are permitted anywhere in the seed.

3. `Project Intent` MUST be prose only. It MUST NOT contain bullets.

4. `Problem Statement` MUST be prose only. It MUST NOT contain bullets.

5. `Scope Boundaries` MUST contain exactly:
   `Included`
   `Excluded`
   in that order.

6. `Included`, `Excluded`, `Non-Goals`, `Environment Assumptions`,
   `Constraints`, `Product Experience Invariants`, and `Success Definition`
   MUST use flat bullets only.

7. Every bullet in `Scope Boundaries` -> `Included` MUST express one distinct
   project boundary. If the idea contains separately buildable or separately
   constrainable concerns, they MUST be split into separate bullets.

8. Distinct user-facing product surfaces MUST appear as separate included-scope
   bullets or separate constraint bullets. They MUST NOT be collapsed into one
   blended delivery-shape bullet when their boundaries can diverge.

9. Inherited implementation boundaries, prerequisite normalization work,
   portability work, and downstream product surfaces MUST remain separately
   represented when they are structurally distinct in the idea.

10. `Environment Assumptions` MUST contain factual assumptions only. They MUST
    preserve exact endpoints, collection identifiers, storage patterns, and
    other verified anchors when those anchors materially constrain later work.

11. `Environment Assumptions` MUST NOT contain normative project obligations,
    later-command instructions, or transformation guidance.

12. `Constraints` MUST contain limiting facts, behavioral rules, or mandatory
    architectural conditions. If one bullet contains multiple independent
    obligations, it MUST be split into separate bullets.

13. `Product Experience Invariants` MUST contain atomic user-facing
    experience, interaction, presentation, disclosure-shape, setup-friction,
    evidence-shape, or anti-pattern constraints that materially constrain the
    finished product.

14. If the idea declares multiple independent product-experience constraints,
    each invariant MUST be represented as a separate bullet. They MUST NOT be
    collapsed into one generic quality statement.

15. `Success Definition` MUST contain only mechanically verifiable bullets.
    Each bullet MUST conform to one of these forms:
    `File exists at <path>.`
    `<path> contains the exact string: "<string>".`
    `<path> contains exactly <N> instances of "<string>".`
    `<Artifact A> is generated strictly from <Artifact B>.`
    `Command "<command>" exits with code 0 and emits "<anchor>" in <output path>.`

16. `Success Definition` MUST NOT contain qualitative language, future intent,
    validation procedures, or subjective claims.

17. The seed MUST NOT contain roadmap phases, slash commands, resume logic,
    execution sequencing, implementation steps, or later-bootstrap directives.

## 5. Separation Coverage Rules

The seed MUST satisfy all of the following:

1. If the idea declares an inherited implementation boundary already present in
   the repo, that boundary MUST remain separately represented from the broader
   product outcome.

2. If the idea declares prerequisite normalization, portability correction, or
   enabling foundation work, that work MUST remain separately represented from
   downstream application surfaces or polished-product outcome language.

3. If the idea declares multiple user-facing product surfaces, each surface
   MUST remain separately represented rather than blended into one generic
   product-surface statement.

4. Runtime endpoints, collection identifiers, path layouts, fanout rules, and
   sidecar naming patterns MUST appear in `Environment Assumptions`, not inside
   `Project Intent`, `Problem Statement`, or downstream transformation prose.

5. User-facing behavior rules such as support-state handling, disclosure
   gating, persistence gating, or truthful failure boundaries MUST appear in
   `Constraints` as separate atomic bullets when they impose distinct rules.

6. If the idea declares stylistic, interaction, presentation, or anti-pattern
   language that materially constrains the finished product shape, that
   language MUST be preserved in `Product Experience Invariants` as atomic
   bullets rather than compressed away into generic scope or surface language.

7. The seed MUST NOT contain meta-transformation content such as "next step",
   "requirements derivation should extract", or similar instructions to later
   bootstrap commands.

## 6. Schema Authority

This document defines `PROJECT_SEED_SCHEMA_v1`.

Any generated project seed MUST conform exactly to this schema.
Deviation from required section order, section content rules, separation
coverage rules, or success-definition forms constitutes schema violation.
