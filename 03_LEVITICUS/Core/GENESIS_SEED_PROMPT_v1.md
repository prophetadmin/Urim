# GENESIS SEED PROMPT v1 - Deterministic Workflow Framework

## 1. Role

You are generating a structured project idea document.

You are NOT generating:
- A roadmap
- Phases
- Entry criteria
- Exit criteria
- Slash command specifications
- Resume protocol content
- Execution sequencing
- Implementation steps

You must not reference schema mechanics or workflow phases.

## 2. Objective

Produce a high-signal idea document suitable for later transformation into a formal roadmap.

The document must be:
- Project-specific
- Structurally constrained
- Deterministic
- Free of roadmap leakage
- Faithful to verified project-defining details that materially constrain later roadmap generation

## 3. Output Structure (Mandatory)

Output must contain ONLY the following sections in this exact order:

Project Intent  
Problem Statement  
Scope Boundaries  
Non-Goals  
Environment Assumptions  
Constraints  
Success Definition  

No additional sections permitted.

## 4. Section Requirements

Project Intent  
   - Describe what the project is intended to create.  
   - Single clear objective statement.

Problem Statement  
   - Define the core problem being addressed.  
   - No solutions or execution sequencing.

Scope Boundaries  
   - Define what is included.  
   - Define what is explicitly excluded.

Non-Goals  
   - Explicitly list what this project will not attempt to solve.

Environment Assumptions  
   - Define tooling, runtime, or contextual assumptions.
   - Preserve exact verified service endpoints, collection identifiers, storage patterns, or interface anchors when they materially constrain implementation or roadmap derivation.

Constraints  
   - Define structural, technical, or environmental limitations.
   - Preserve verified architectural facts that restrict implementation choices, including authority boundaries, required resolution layers, or mandatory interface behavior.

Success Definition  
   - Must contain only mechanically verifiable statements.
   - Must use explicit observable conditions (artifact, exact string, exact count, deterministic mapping, or explicit command outcome).
   - No qualitative language.
   - No subjective completion terms.

## 5. Deterministic Success Definition Rules

Each `Success Definition` bullet MUST conform to one of these forms:

- Artifact Exists: `File exists at <path>.`
- Anchor Present: `<path> contains the exact string: "<string>".`
- Count Condition: `<path> contains exactly <N> instances of "<string>".`
- Deterministic Mapping: `<Artifact A> is generated strictly from <Artifact B>.`
- Explicit Runtime Result: `Command "<command>" exits with code 0 and emits "<anchor>" in <output path>.`

Each bullet must be independently checkable without interpretation.

Disallowed in `Success Definition`:

- qualitative words (`reliable`, `robust`, `correct`, `good`, `adequate`)
- subjective outcomes (`works well`, `complete`, `satisfactory`)
- non-testable claims (`without error`, `ready`, `validated`)
- implicit expectations without structural anchor

## 6. Prohibitions

The output must NOT:

- Contain phases
- Contain numbered roadmap steps
- Contain execution sequencing
- Contain validation procedures
- Contain schema references
- Contain slash commands
- Contain resume logic
- Claim completion
- Use qualitative success language
- Use non-mechanical success criteria
- Omit verified runtime or storage details when those details materially constrain the implementation or downstream roadmap structure
- Replace concrete verified system facts with higher-level abstraction when the concrete facts affect architecture, integration, or artifact resolution

## 6.1 Fidelity Rules

- Prefer preservation over compression for verified facts that influence implementation structure.
- If the idea includes exact runtime endpoints, collection names, resolver mappings, storage patterns, or sidecar artifact requirements that constrain the system, include them in the appropriate section.
- Do not generalize away a verified dependency boundary if the project depends on that boundary being true.
- Compression is allowed only for details that do not materially affect roadmap derivation or implementation constraints.

## 7. Formatting Rules

- No markdown headers beyond section titles.
- No commentary outside required sections.
- No explanatory text before or after the document.
- Output only the structured idea document.
