# REQUIREMENTS_LEDGER.md

**Derived From**
`01_GENESIS/PROJECT_SEED.md`

**Schema Version**
v1

## Mandatory Requirement Inventory

### REQ-1 - Chat-First Local Surface

**Requirement Type**
`surface`

**Source Anchor**
A chat-first local application for natural-language querying over a local knowledge foundation.

**Requirement Statement**
The system must provide a locally hosted, chat-first application surface for natural-language queries over the local knowledge foundation, with user interaction flows suitable for direct query submission and answer consumption.

**Artifact Obligation**
- Local chat interface artifacts for query input and answer rendering.
- Surface-to-runtime connection artifacts that invoke the retrieval and grounding pipeline.

**Validation Obligation**
- Runtime check confirms the local chat surface is reachable and accepts query input.
- Interaction check confirms submitted queries return rendered answer output.

**Mandatory**
`yes`

### REQ-2 - Local Chat API Integration

**Requirement Type**
`integration`

**Source Anchor**
Integration with the existing local llama.cpp chat API for answer generation.

**Requirement Statement**
The application must integrate with the currently exposed local llama.cpp chat API as the answer-generation backend used during grounded response production.

**Artifact Obligation**
- Chat API integration adapter artifacts targeting the local llama.cpp chat service.
- Request and response mapping artifacts between grounded context payloads and chat API payloads.

**Validation Obligation**
- Integration test confirms answer-generation requests are sent to the local chat API endpoint.
- Failure-path test confirms service unavailability produces deterministic error handling.

**Mandatory**
`yes`

### REQ-3 - Local Embedding API Integration

**Requirement Type**
`integration`

**Source Anchor**
Integration with the existing local llama.cpp embedding service for query embeddings.

**Requirement Statement**
The application must integrate with the currently exposed local llama.cpp embedding service and generate query embeddings through the defined local embedding interface.

**Artifact Obligation**
- Embedding integration adapter artifacts for local embedding requests.
- Embedding request construction artifacts that call `POST /embedding`.

**Validation Obligation**
- Integration test confirms embedding requests are sent to `127.0.0.1:8084`.
- Endpoint contract test confirms embedding calls use `POST /embedding`.

**Mandatory**
`yes`

### REQ-4 - Local Qdrant Retrieval Integration

**Requirement Type**
`integration`

**Source Anchor**
Integration with the existing local Qdrant service for nearest-neighbor retrieval.

**Requirement Statement**
The application must integrate with the local Qdrant service and execute nearest-neighbor retrieval as the semantic locator step in the chat query pipeline.

**Artifact Obligation**
- Qdrant integration adapter artifacts targeting the local Qdrant service endpoint.
- Retrieval request artifacts for nearest-neighbor lookup execution.

**Validation Obligation**
- Integration test confirms retrieval requests are sent to `127.0.0.1:6333`.
- Retrieval-path test confirms nearest-neighbor results are returned for valid embeddings.

**Mandatory**
`yes`

### REQ-5 - Retrieval Collection Binding

**Requirement Type**
`data`

**Source Anchor**
Retrieval against the Qdrant collection `emb_v2_nomic_embed_text_v1_5_f16_768`.

**Requirement Statement**
All semantic retrieval operations must target the Qdrant collection `emb_v2_nomic_embed_text_v1_5_f16_768` as the required collection boundary for query lookups.

**Artifact Obligation**
- Retrieval binding artifacts that enforce the required Qdrant collection identifier.
- Collection selection artifacts used by the retrieval adapter at runtime.

**Validation Obligation**
- Retrieval test confirms queries target `emb_v2_nomic_embed_text_v1_5_f16_768`.
- Negative test confirms a missing required collection is surfaced as a deterministic error.

**Mandatory**
`yes`

### REQ-6 - Tier and Source-Based Authority Resolution

**Requirement Type**
`module`

**Source Anchor**
Resolution of Qdrant hit metadata into boxed markdown authority content on disk by `tier` and `source_id`.

**Requirement Statement**
The system must resolve retrieval hit metadata into readable boxed markdown authority content on disk using tier and source identity mapping as the primary resolution path.

**Artifact Obligation**
- Resolver module artifacts that convert retrieval metadata into authority file targets.
- Authority resolution artifacts that return readable markdown content for downstream grounding.

**Validation Obligation**
- Resolver test confirms metadata-derived lookups return boxed markdown authority content.
- Mapping test confirms tier and source identity are required inputs for successful resolution.

**Mandatory**
`yes`

### REQ-7 - Verified Boxed Authority Path Support

**Requirement Type**
`data`

**Source Anchor**
Resolver support for the verified boxed authority patterns `D:\boxed\TierL_EB\<source_id>\<source_id>.md` and `D:\boxed\Tier2\<source_id>\<source_id>.md`.

**Requirement Statement**
Authority resolution must support the verified boxed authority path patterns for TierL_EB and Tier2 sources and must consume associated boxed authority artifacts as addressable local storage targets.

**Artifact Obligation**
- Path resolution artifacts for `D:\boxed\TierL_EB\<source_id>\<source_id>.md` and `D:\boxed\Tier2\<source_id>\<source_id>.md`.
- Boxed artifact access artifacts that read authority markdown and associated sidecar files.

**Validation Obligation**
- Path coverage test confirms resolver success for both verified boxed authority patterns.
- Artifact access test confirms authority markdown and sidecar artifacts are readable for resolved sources.

**Mandatory**
`yes`

### REQ-8 - Authority-First Grounded Generation

**Requirement Type**
`module`

**Source Anchor**
Use of resolved authority content, rather than Qdrant payload text alone, as the readable basis for answer generation.

**Requirement Statement**
Answer generation must use resolved boxed authority content as the readable grounding basis and must not treat Qdrant payload text alone as sufficient authority for final answer composition.

**Artifact Obligation**
- Grounding assembly artifacts that inject resolved authority content into answer-generation context.
- Guard artifacts that prevent payload-only retrieval text from becoming the final readable authority basis.

**Validation Obligation**
- Grounding test confirms answer context includes resolved boxed authority content.
- Control test confirms payload-only context is rejected as an acceptable grounding path.

**Mandatory**
`yes`

### REQ-9 - Support State Communication Behavior

**Requirement Type**
`behavior`

**Source Anchor**
Explicit handling of strong, partial, weak, and insufficient support states in user-facing answers.

**Requirement Statement**
User-facing answers must explicitly communicate support quality states, including strong, partial, weak, and insufficient support, as a mandatory part of response behavior.

**Artifact Obligation**
- Response presentation artifacts that encode support state categories in answer output.
- Behavior policy artifacts defining support state selection conditions for each answer.

**Validation Obligation**
- Behavior test confirms all four support states are reachable through controlled query scenarios.
- Assertion test confirms displayed support state aligns with evidence quality in resolved authority.

**Mandatory**
`yes`

### REQ-10 - User-Triggered Source Disclosure

**Requirement Type**
`behavior`

**Source Anchor**
Source disclosure in chat only when the user requests sources.

**Requirement Statement**
Source disclosure must be optional and user-triggered in chat, with no automatic source dump behavior in normal answer responses.

**Artifact Obligation**
- Source disclosure control artifacts exposed through the chat surface.
- Answer rendering artifacts that suppress source details unless requested by the user.

**Validation Obligation**
- Behavior test confirms default answers omit source disclosure when no request is made.
- Trigger test confirms source details are shown when the user explicitly requests sources.

**Mandatory**
`yes`

### REQ-11 - User-Triggered Session Saving

**Requirement Type**
`behavior`

**Source Anchor**
User-triggered session saving.

**Requirement Statement**
Session persistence must occur only when explicitly triggered by the user and must not automatically persist every chat exchange by default.

**Artifact Obligation**
- Session save trigger artifacts exposed through the user-facing chat experience.
- Session persistence artifacts that execute save operations only on explicit trigger events.

**Validation Obligation**
- Persistence behavior test confirms no automatic session persistence occurs without user action.
- Trigger-path test confirms explicit user save actions persist the active session.

**Mandatory**
`yes`

### REQ-12 - No Internal Model Switching

**Requirement Type**
`constraint`

**Source Anchor**
The application must not implement internal model switching.

**Requirement Statement**
The implementation must not include internal model switching or model orchestration controls and must preserve a fixed integration boundary to the currently exposed local services.

**Artifact Obligation**
- Runtime policy artifacts that omit internal model switching controls.
- Integration boundary artifacts that enforce fixed model-service usage paths.

**Validation Obligation**
- Structural check confirms no internal model switching controls are present in runtime components.
- Behavior test confirms requests follow fixed configured service routes without model arbitration.

**Mandatory**
`yes`

### REQ-13 - Stable Identity Continuity

**Requirement Type**
`constraint`

**Source Anchor**
Stable identity continuity through `source_id` and tier mapping must remain valid even if physical storage roots move.

**Requirement Statement**
Authority identity continuity must remain stable through source and tier mapping, allowing resolver behavior to remain correct even when physical storage root locations change.

**Artifact Obligation**
- Identity mapping artifacts that normalize source and tier references independent of physical root location.
- Resolver indirection artifacts that separate logical source identity from storage root resolution.

**Validation Obligation**
- Continuity test confirms the same source and tier mapping resolves correctly after storage root relocation.
- Regression test confirms identity keys remain stable across repeated retrieval and resolution cycles.

**Mandatory**
`yes`

### REQ-14 - Lexicon Advisory Constraint

**Requirement Type**
`constraint`

**Source Anchor**
Lexicon behavior, if present, must remain advisory and must not replace semantic retrieval or hard-block retrieval when it contributes no useful narrowing.

**Requirement Statement**
Any lexicon behavior included in the implementation must remain advisory only, must not replace semantic retrieval, and must not hard-block retrieval when lexicon narrowing does not add useful constraints.

**Artifact Obligation**
- Lexicon interaction artifacts that operate as advisory pre- or post-processing only.
- Retrieval guard artifacts that preserve semantic retrieval execution regardless of lexicon narrowing value.

**Validation Obligation**
- Behavior test confirms semantic retrieval executes when lexicon logic contributes no useful narrowing.
- Policy test confirms lexicon processing cannot override or replace mandatory semantic retrieval flow.

**Mandatory**
`yes`

### REQ-15 - Full Retrieval Metadata Consumption

**Requirement Type**
`module`

**Source Anchor**
Resolver behavior must consume retrieval metadata including `tier`, `source_id`, `parent_id`, and `chunk_index` when mapping retrieval hits to readable authority material.

**Requirement Statement**
Resolver mapping logic must consume retrieval metadata fields tier, source_id, parent_id, and chunk_index when translating retrieval hits into readable authority material for grounded answers.

**Artifact Obligation**
- Metadata parsing artifacts that extract `tier`, `source_id`, `parent_id`, and `chunk_index` from retrieval hits.
- Resolver mapping artifacts that use the full metadata set to locate readable authority content.

**Validation Obligation**
- Resolver contract test confirms all required metadata fields are consumed in mapping.
- Negative-path test confirms incomplete metadata inputs fail with explicit resolver errors.

**Mandatory**
`yes`

### REQ-16 - Qdrant Locator Boundary

**Requirement Type**
`constraint`

**Source Anchor**
Qdrant must remain a vector locator rather than the authority text store.

**Requirement Statement**
Qdrant must be treated exclusively as a vector locator for retrieval and must not become the readable authority text store used to ground final user answers.

**Artifact Obligation**
- Retrieval boundary artifacts that classify Qdrant outputs as locator metadata.
- Grounding boundary artifacts that require boxed authority text resolution before answer generation.

**Validation Obligation**
- Boundary test confirms retrieval outputs are handled as pointers and not final readable authority text.
- Grounding test confirms answer generation depends on resolved boxed authority content, not Qdrant text storage.

**Mandatory**
`yes`

### REQ-17 - Unsupported-Claim Safeguard Validation

**Requirement Type**
`validation`

**Source Anchor**
The application must state when support is partial, weak, or insufficient instead of presenting unsupported claims as grounded answers.

**Requirement Statement**
The system must include executable validation coverage that proves unsupported claims are not presented as grounded answers and that partial, weak, or insufficient support is explicitly surfaced in user output.

**Artifact Obligation**
- Validation harness artifacts that execute grounded-answer support-state checks.
- Assertion artifacts that fail when unsupported claims are presented as fully grounded.

**Validation Obligation**
- End-to-end test suite confirms unsupported claims are blocked or labeled with non-strong support states.
- Output assertion test confirms support-state labels are emitted for partial, weak, and insufficient evidence conditions.

**Mandatory**
`yes`

## Component Inventory

### COMP-1 - Local Chat Surface

**Component Type**
`surface`

**Source Requirement IDs**
- `REQ-1`
- `REQ-9`
- `REQ-10`
- `REQ-11`

**Purpose**
Provide the user-facing local chat surface for query entry, grounded answer display, support-state visibility, optional source disclosure controls, and explicit session save triggers.

**Dependencies**
- `COMP-2`
- `COMP-8`
- `COMP-9`

**Artifact Obligation**
- Chat surface implementation artifacts for prompt input and response rendering.
- User action artifacts for source-request and session-save triggers.

**Runtime Responsibility**
- Accept user natural-language queries and forward them into orchestration flow.
- Render answer text together with support-state and optional source details.

**Validation Obligation**
- UI behavior test confirms query submission and answer rendering are functional.
- Policy test confirms sources and persistence actions are only activated by user intent.

### COMP-2 - Retrieval Grounding Orchestrator

**Component Type**
`workflow`

**Source Requirement IDs**
- `REQ-1`
- `REQ-5`
- `REQ-6`
- `REQ-8`
- `REQ-14`
- `REQ-16`

**Purpose**
Coordinate query execution order across embedding, retrieval, resolution, policy checks, and answer-grounding stages so grounded response assembly follows deterministic pipeline boundaries.

**Dependencies**
- `COMP-3`
- `COMP-4`
- `COMP-5`
- `COMP-6`
- `COMP-8`
- `COMP-10`

**Artifact Obligation**
- Pipeline orchestration artifacts for stage sequencing and handoff.
- Flow-control artifacts that enforce retrieval and grounding prerequisites.

**Runtime Responsibility**
- Execute end-to-end query workflow from embedding through grounded answer assembly.
- Enforce that retrieval outputs are routed into resolver and grounding stages before answer generation.

**Validation Obligation**
- End-to-end orchestration test confirms all required stages execute in deterministic order.
- Guard-path test confirms pipeline halts when required retrieval or resolution steps fail.

### COMP-3 - Chat API Adapter

**Component Type**
`integration`

**Source Requirement IDs**
- `REQ-2`
- `REQ-12`

**Purpose**
Integrate the runtime with the local llama.cpp chat service for answer generation while preserving a fixed service boundary without internal model switching logic.

**Dependencies**
- `None`

**Artifact Obligation**
- Chat API client artifacts for local request and response handling.
- Integration boundary artifacts that avoid model arbitration controls.

**Runtime Responsibility**
- Send grounded answer-generation requests to the local chat API endpoint.
- Return chat model outputs to the grounding service for final response emission.

**Validation Obligation**
- Integration test confirms successful request-response exchange with the local chat API.
- Structural test confirms no model switching branch or orchestration control exists in the adapter.

### COMP-4 - Embedding API Adapter

**Component Type**
`integration`

**Source Requirement IDs**
- `REQ-3`

**Purpose**
Integrate the runtime with the local llama.cpp embedding service and produce embeddings used by retrieval operations.

**Dependencies**
- `None`

**Artifact Obligation**
- Embedding API client artifacts for `POST /embedding` execution.
- Embedding payload construction artifacts for query vector generation.

**Runtime Responsibility**
- Send query text to the local embedding endpoint and receive embedding vectors.
- Return embedding outputs to retrieval components for nearest-neighbor lookup.

**Validation Obligation**
- Endpoint test confirms embedding requests use `POST /embedding` at `127.0.0.1:8084`.
- Contract test confirms valid embedding vectors are emitted for retrieval input.

### COMP-5 - Qdrant Retrieval Adapter

**Component Type**
`integration`

**Source Requirement IDs**
- `REQ-4`
- `REQ-5`
- `REQ-16`

**Purpose**
Execute nearest-neighbor retrieval against the required Qdrant collection and return locator metadata required for downstream authority resolution.

**Dependencies**
- `COMP-4`

**Artifact Obligation**
- Retrieval adapter artifacts for local Qdrant query execution.
- Collection-binding artifacts that enforce use of `emb_v2_nomic_embed_text_v1_5_f16_768`.

**Runtime Responsibility**
- Query Qdrant with embedding vectors and retrieve nearest-neighbor hits.
- Emit retrieval results as locator metadata rather than final readable authority text.

**Validation Obligation**
- Retrieval test confirms calls target local Qdrant and the required collection identifier.
- Boundary test confirms emitted results are consumed as pointers, not authoritative response text.

### COMP-6 - Authority Resolver Module

**Component Type**
`module`

**Source Requirement IDs**
- `REQ-6`
- `REQ-7`
- `REQ-13`
- `REQ-15`

**Purpose**
Resolve Qdrant retrieval metadata into boxed authority artifacts with stable source identity mapping and full metadata consumption across tier, source, parent, and chunk dimensions.

**Dependencies**
- `COMP-7`

**Artifact Obligation**
- Resolver logic artifacts that map metadata to boxed authority file paths.
- Identity indirection artifacts that preserve source continuity independent of storage root relocation.

**Runtime Responsibility**
- Consume `tier`, `source_id`, `parent_id`, and `chunk_index` to determine authority lookups.
- Return readable authority content and identity metadata for grounded answer assembly.

**Validation Obligation**
- Resolver contract test confirms all required metadata fields participate in mapping decisions.
- Continuity test confirms resolver correctness persists after storage root changes.

### COMP-7 - Boxed Authority Artifact Access

**Component Type**
`data_store`

**Source Requirement IDs**
- `REQ-7`
- `REQ-13`

**Purpose**
Provide access to boxed authority markdown and associated sidecar artifacts through stable source identity mapping for supported authority tiers.

**Dependencies**
- `None`

**Artifact Obligation**
- File access artifacts for authority markdown under verified TierL_EB and Tier2 path patterns.
- Sidecar access artifacts for `<source_id>.meta.json` and `<source_id>.sha256`.

**Runtime Responsibility**
- Read boxed authority markdown content for resolved source identities.
- Read associated sidecar artifacts needed by resolver and validation logic.

**Validation Obligation**
- Data access test confirms readable authority content is returned for valid source identities.
- Path pattern test confirms both verified authority path structures are supported.

### COMP-8 - Grounded Answer Service

**Component Type**
`service`

**Source Requirement IDs**
- `REQ-8`
- `REQ-9`
- `REQ-14`

**Purpose**
Assemble grounded answer payloads from resolved authority content, classify support states, and produce user-facing responses that preserve retrieval and policy constraints.

**Dependencies**
- `COMP-3`
- `COMP-6`
- `COMP-10`

**Artifact Obligation**
- Grounded prompt assembly artifacts that use resolved authority text as answer basis.
- Support-state classification artifacts for strong, partial, weak, and insufficient evidence outcomes.

**Runtime Responsibility**
- Build answer-generation context from resolved authority and pass it to the chat API adapter.
- Emit answer payloads with explicit support-state classification.

**Validation Obligation**
- Grounding test confirms answers are generated from resolved authority content rather than payload-only retrieval text.
- Behavior test confirms support-state outputs align with available authority evidence quality.

### COMP-9 - Session Persistence Module

**Component Type**
`module`

**Source Requirement IDs**
- `REQ-11`

**Purpose**
Persist chat sessions only when explicitly triggered by the user and maintain deterministic control over session save behavior.

**Dependencies**
- `COMP-1`

**Artifact Obligation**
- Session persistence implementation artifacts for user-initiated save operations.
- Trigger-handling artifacts that gate persistence behind explicit user actions.

**Runtime Responsibility**
- Receive session save requests from the user surface and persist the active session.
- Avoid any automatic persistence outside explicit user-triggered events.

**Validation Obligation**
- Persistence test confirms sessions are saved when a user trigger is provided.
- Guard test confirms no background or automatic save occurs without explicit trigger input.

### COMP-10 - Policy Enforcement Module

**Component Type**
`module`

**Source Requirement IDs**
- `REQ-10`
- `REQ-12`
- `REQ-14`
- `REQ-16`

**Purpose**
Enforce runtime policies that constrain disclosure behavior, model switching prohibition, lexicon advisory usage, and Qdrant locator-only boundaries.

**Dependencies**
- `COMP-2`

**Artifact Obligation**
- Policy rule artifacts for source disclosure, model-switching prohibition, and retrieval boundary enforcement.
- Enforcement logic artifacts that apply policy checks before answer emission.

**Runtime Responsibility**
- Apply policy gating to source disclosure and retrieval behavior during response processing.
- Enforce that model routing, lexicon use, and Qdrant handling remain within declared constraints.

**Validation Obligation**
- Policy test confirms source details are omitted unless explicit user request is detected.
- Constraint test confirms model-switching and locator-boundary violations are blocked.

### COMP-11 - Grounded Validation Harness

**Component Type**
`validation_harness`

**Source Requirement IDs**
- `REQ-17`
- `REQ-2`
- `REQ-3`
- `REQ-4`
- `REQ-6`
- `REQ-8`
- `REQ-9`
- `REQ-10`
- `REQ-11`

**Purpose**
Provide executable validation coverage across integration, retrieval, resolution, grounding, behavior, and policy obligations to verify that unsupported claims are not emitted as grounded answers.

**Dependencies**
- `COMP-1`
- `COMP-2`
- `COMP-3`
- `COMP-4`
- `COMP-5`
- `COMP-6`
- `COMP-8`
- `COMP-9`
- `COMP-10`

**Artifact Obligation**
- Validation suite artifacts for end-to-end grounded-response execution.
- Assertion artifacts that verify support-state communication and policy compliance.

**Runtime Responsibility**
- Execute automated validation scenarios for normal, degraded, and insufficient support conditions.
- Report requirement-level pass or failure outcomes for deterministic continuation.

**Validation Obligation**
- End-to-end suite confirms unsupported claims are not presented as fully grounded answers.
- Regression suite confirms integration and policy constraints remain satisfied across changes.

## Explicit Exclusions

- Internal model switching or model orchestration logic.
- Automatic source dumps in every answer.
- Automatic persistence of every chat session.
- A desktop-native first implementation.
- Finalization of Wikipedia boxed storage handling.
- Long-term storage repacking strategy for very large boxed corpora.
- Build a general-purpose ungrounded chat assistant.
- Build a full analyst or debugging console in the first pass.
- Replace semantic retrieval with Lexicon-only lookup behavior.
- Make Qdrant the readable authority text store.
- Solve long-term storage layout optimization in the first pass.
- Implement internal UI or service controls for switching local models.
