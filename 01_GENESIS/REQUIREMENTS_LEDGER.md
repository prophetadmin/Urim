# REQUIREMENTS_LEDGER.md

**Derived From**
`01_GENESIS/PROJECT_SEED.md`

**Schema Version**
v1

## Mandatory Requirement Inventory

### REQ-1 - Chat-First Query Surface

**Requirement Type**
`surface`

**Source Anchor**
A chat-first local application for natural-language querying over a local knowledge foundation.

**Requirement Statement**
The system must provide a chat-first local application surface for natural-language querying over the local knowledge foundation, with direct user flows for entering questions, receiving grounded answers, and continuing a session without leaving the primary chat interaction.

**Artifact Obligation**
- User-facing chat surface artifacts for local query entry and answer display.
- Surface integration artifacts that hand user queries into the retrieval and grounding workflow.

**Validation Obligation**
- Runtime verification confirms the local chat surface is reachable and accepts user query input.
- Interaction verification confirms the surface returns rendered grounded answers for submitted queries.

**Mandatory**
`yes`

### REQ-2 - Locally Hosted Web Delivery

**Requirement Type**
`surface`

**Source Anchor**
The first implementation can be delivered as a locally hosted web application.

**Requirement Statement**
The first implementation must be deliverable as a locally hosted web application so the chat-first experience is exposed through a browser-accessible local surface rather than a desktop-native first build.

**Artifact Obligation**
- Locally hosted web application artifacts that expose the primary chat surface.
- Local hosting artifacts that bind the web surface to the application runtime.

**Validation Obligation**
- Delivery verification confirms the first implementation can be launched and accessed as a local web application.
- Surface verification confirms browser-based interaction reaches the same chat workflow used for grounded answering.

**Mandatory**
`yes`

### REQ-3 - Local Chat Generation Integration

**Requirement Type**
`integration`

**Source Anchor**
Integration with the existing local llama.cpp chat API for answer generation.

**Requirement Statement**
The application must integrate with the existing local llama.cpp chat API for answer generation and direct grounded answer requests to the currently exposed local chat service rather than to an alternate model-routing layer.

**Artifact Obligation**
- Chat service integration artifacts that target the local llama.cpp chat API.
- Request and response translation artifacts between grounded answer payloads and the chat API contract.

**Validation Obligation**
- Integration verification confirms grounded answer requests are sent to the local chat service at `127.0.0.1:8081`.
- Failure-path verification confirms chat service unavailability produces a deterministic application error state.

**Mandatory**
`yes`

### REQ-4 - Embedding Service Integration Contract

**Requirement Type**
`integration`

**Source Anchor**
The embedding service exposes `POST /embedding`.

**Requirement Statement**
The application must integrate with the existing local llama.cpp embedding service by issuing query-embedding requests through the exposed `POST /embedding` contract on the local embedding runtime.

**Artifact Obligation**
- Embedding service integration artifacts that invoke the local embedding runtime.
- Embedding request construction artifacts that use the `POST /embedding` contract for query vector generation.

**Validation Obligation**
- Integration verification confirms embedding requests are sent to `127.0.0.1:8084`.
- Contract verification confirms query embedding calls use `POST /embedding`.

**Mandatory**
`yes`

### REQ-5 - Local Qdrant Retrieval Integration

**Requirement Type**
`integration`

**Source Anchor**
Integration with the existing local Qdrant service for nearest-neighbor retrieval.

**Requirement Statement**
The application must integrate with the existing local Qdrant service and execute nearest-neighbor retrieval against the local runtime as the semantic locator stage in the grounded answer workflow.

**Artifact Obligation**
- Qdrant integration artifacts that target the local retrieval service.
- Retrieval execution artifacts that submit nearest-neighbor queries and receive hit metadata.

**Validation Obligation**
- Integration verification confirms retrieval requests are sent to the local Qdrant service at `127.0.0.1:6333`.
- Retrieval verification confirms nearest-neighbor hits are returned for valid embedding inputs.

**Mandatory**
`yes`

### REQ-6 - Required Retrieval Collection Binding

**Requirement Type**
`data`

**Source Anchor**
Retrieval against the Qdrant collection `emb_v2_nomic_embed_text_v1_5_f16_768`.

**Requirement Statement**
All semantic retrieval operations must target the Qdrant collection `emb_v2_nomic_embed_text_v1_5_f16_768` as the required collection boundary for query lookup and hit acquisition.

**Artifact Obligation**
- Collection-binding artifacts that fix retrieval to `emb_v2_nomic_embed_text_v1_5_f16_768`.
- Retrieval configuration artifacts that expose the required collection identifier to the retrieval layer.

**Validation Obligation**
- Retrieval verification confirms search requests target `emb_v2_nomic_embed_text_v1_5_f16_768`.
- Negative-path verification confirms a missing required collection produces a deterministic failure.

**Mandatory**
`yes`

### REQ-7 - Metadata-Driven Authority Resolution

**Requirement Type**
`module`

**Source Anchor**
Resolution of Qdrant hit metadata into boxed markdown authority content on disk by `tier` and `source_id`.

**Requirement Statement**
The system must resolve Qdrant hit metadata into readable boxed markdown authority content on disk by using `tier` and `source_id` as the primary authority resolution inputs for grounded answer support.

**Artifact Obligation**
- Authority resolver artifacts that transform retrieval hit metadata into readable authority targets.
- Resolution output artifacts that return boxed markdown content for downstream grounding.

**Validation Obligation**
- Resolver verification confirms retrieval hit metadata is converted into readable boxed authority content.
- Input verification confirms authority resolution requires `tier` and `source_id` for successful lookup.

**Mandatory**
`yes`

### REQ-8 - Verified Boxed Authority Paths

**Requirement Type**
`data`

**Source Anchor**
Resolver support for the verified boxed authority patterns `D:\boxed\TierL_EB\<source_id>\<source_id>.md` and `D:\boxed\Tier2\<source_id>\<source_id>.md`.

**Requirement Statement**
Authority resolution must support the verified boxed authority path patterns for TierL_EB and Tier2 sources and must use those patterns as canonical lookup shapes for supported boxed authority markdown content.

**Artifact Obligation**
- Path resolution artifacts for `D:\boxed\TierL_EB\<source_id>\<source_id>.md`.
- Path resolution artifacts for `D:\boxed\Tier2\<source_id>\<source_id>.md`.

**Validation Obligation**
- Path verification confirms resolver success across both verified boxed authority patterns.
- Coverage verification confirms supported tier routing selects the correct path pattern for each resolved source.

**Mandatory**
`yes`

### REQ-9 - Boxed Sidecar Artifact Access

**Requirement Type**
`data`

**Source Anchor**
Associated boxed sidecar artifacts include `<source_id>.meta.json` and `<source_id>.sha256`.

**Requirement Statement**
The authority access layer must read and preserve access to the associated boxed sidecar artifacts `<source_id>.meta.json` and `<source_id>.sha256` alongside the resolved authority markdown for supported sources.

**Artifact Obligation**
- Sidecar access artifacts for `<source_id>.meta.json`.
- Sidecar access artifacts for `<source_id>.sha256`.

**Validation Obligation**
- Data access verification confirms both declared sidecar artifact types are readable for resolved sources.
- Resolver verification confirms sidecar lookup remains aligned with the same `source_id` used for authority markdown resolution.

**Mandatory**
`yes`

### REQ-10 - Full Retrieval Metadata Consumption

**Requirement Type**
`module`

**Source Anchor**
Resolver behavior must consume retrieval metadata including `tier`, `source_id`, `parent_id`, and `chunk_index` when mapping retrieval hits to readable authority material.

**Requirement Statement**
Resolver mapping logic must consume retrieval metadata including `tier`, `source_id`, `parent_id`, and `chunk_index` when mapping retrieval hits to readable authority material so grounded answers remain traceable to the exact located authority segment.

**Artifact Obligation**
- Metadata parsing artifacts that extract `tier`, `source_id`, `parent_id`, and `chunk_index` from retrieval hits.
- Resolver mapping artifacts that use the full metadata set to locate readable authority material.

**Validation Obligation**
- Contract verification confirms all required metadata fields are consumed during authority mapping.
- Negative-path verification confirms incomplete retrieval metadata produces a deterministic resolver failure.

**Mandatory**
`yes`

### REQ-11 - Authority-First Grounded Answer Assembly

**Requirement Type**
`module`

**Source Anchor**
Use of resolved authority content, rather than Qdrant payload text alone, as the readable basis for answer generation.

**Requirement Statement**
Answer generation must use resolved boxed authority content as the readable basis for grounded answers and must not rely on Qdrant payload text alone as sufficient authority for final response composition.

**Artifact Obligation**
- Grounding assembly artifacts that inject resolved boxed authority content into answer-generation inputs.
- Guard artifacts that block payload-only retrieval text from becoming the final readable answer basis.

**Validation Obligation**
- Grounding verification confirms answer-generation inputs include resolved boxed authority content.
- Control verification confirms payload-only retrieval text is rejected as sufficient authority for grounded answer production.

**Mandatory**
`yes`

### REQ-12 - Retrieval Pointer Boundary

**Requirement Type**
`constraint`

**Source Anchor**
Retrieval must treat Qdrant results as pointer metadata rather than final readable answer text.

**Requirement Statement**
The retrieval layer must treat Qdrant results as pointer metadata only and must hand those results into authority resolution rather than treating returned payload text as final readable answer material.

**Artifact Obligation**
- Retrieval boundary artifacts that classify Qdrant output as locator metadata.
- Workflow guard artifacts that require authority resolution before grounded answer generation.

**Validation Obligation**
- Boundary verification confirms retrieval hits are handled as pointers rather than final readable answers.
- Flow verification confirms grounded answer execution halts if authority resolution is skipped.

**Mandatory**
`yes`

### REQ-13 - Qdrant Locator-Only Role

**Requirement Type**
`constraint`

**Source Anchor**
Qdrant must remain a vector locator rather than the authority text store.

**Requirement Statement**
Qdrant must remain a vector locator in the architecture and must not be promoted into the authoritative readable text store used to ground final user answers.

**Artifact Obligation**
- Architectural boundary artifacts that keep readable authority text outside Qdrant.
- Policy artifacts that prevent grounded answer generation from sourcing authority text directly from Qdrant storage.

**Validation Obligation**
- Boundary verification confirms grounded answers do not use Qdrant as the readable authority text store.
- Regression verification confirms the locator-only role remains intact across retrieval and grounding flows.

**Mandatory**
`yes`

### REQ-14 - Stable Source Identity Continuity

**Requirement Type**
`constraint`

**Source Anchor**
Stable identity continuity through `source_id` and tier mapping must remain valid even if physical storage roots move.

**Requirement Statement**
Authority resolution must preserve stable identity continuity through `source_id` and tier mapping so the same logical source remains addressable even when physical boxed storage roots move.

**Artifact Obligation**
- Source identity mapping artifacts that separate logical identity from physical storage roots.
- Resolver indirection artifacts that preserve `source_id` and tier continuity across storage-root changes.

**Validation Obligation**
- Continuity verification confirms the same logical source resolves after storage-root relocation.
- Regression verification confirms repeated retrieval and resolution cycles preserve the same source identity mapping.

**Mandatory**
`yes`

### REQ-15 - Support State Communication

**Requirement Type**
`behavior`

**Source Anchor**
Explicit handling of strong, partial, weak, and insufficient support states in user-facing answers.

**Requirement Statement**
User-facing answers must explicitly communicate whether support is strong, partial, weak, or insufficient so grounded answer quality is made visible to the user at response time.

**Artifact Obligation**
- Answer presentation artifacts that expose strong, partial, weak, and insufficient support states.
- Support classification artifacts that assign the correct support state before answer display.

**Validation Obligation**
- Behavior verification confirms all four support states can be produced through controlled evidence scenarios.
- Output verification confirms the rendered support state matches the evidence quality supplied to answer generation.

**Mandatory**
`yes`

### REQ-16 - Optional Source Disclosure

**Requirement Type**
`behavior`

**Source Anchor**
Source disclosure in chat only when the user requests sources.

**Requirement Statement**
Source disclosure in chat must remain optional and user-triggered, with normal answer output omitting source detail unless the user explicitly requests sources.

**Artifact Obligation**
- Source disclosure control artifacts exposed through the chat experience.
- Answer rendering artifacts that suppress source detail unless disclosure is requested by the user.

**Validation Obligation**
- Behavior verification confirms normal answers omit source disclosure when no request is made.
- Trigger verification confirms source details are shown when the user explicitly requests them.

**Mandatory**
`yes`

### REQ-17 - User-Triggered Session Persistence

**Requirement Type**
`behavior`

**Source Anchor**
User-triggered session saving.

**Requirement Statement**
Session persistence must occur only through explicit user-triggered save actions and must not automatically persist the active chat session by default.

**Artifact Obligation**
- Session save trigger artifacts available from the user-facing application surface.
- Session persistence artifacts that execute writes only when the user triggers a save action.

**Validation Obligation**
- Behavior verification confirms no automatic session persistence occurs without explicit user action.
- Trigger verification confirms an explicit user save action persists the active session.

**Mandatory**
`yes`

### REQ-18 - Fixed Local Service Routing

**Requirement Type**
`constraint`

**Source Anchor**
The application must use the currently exposed local llama.cpp chat API.

**Requirement Statement**
The application must route grounded answer generation through the currently exposed local llama.cpp chat API and must preserve that local service as the active answer-generation integration target.

**Artifact Obligation**
- Service routing artifacts that bind answer generation to the current local chat API.
- Configuration artifacts that preserve the declared local chat integration boundary.

**Validation Obligation**
- Routing verification confirms answer-generation calls are directed to the active local chat API.
- Structural verification confirms the application does not route grounded answer generation to an undeclared alternate service.

**Mandatory**
`yes`

### REQ-19 - Fixed Local Embedding Routing

**Requirement Type**
`constraint`

**Source Anchor**
The application must use the currently exposed local llama.cpp embedding service.

**Requirement Statement**
The application must route query embedding generation through the currently exposed local llama.cpp embedding service and preserve that local embedding runtime as the active vectorization target.

**Artifact Obligation**
- Service routing artifacts that bind embedding generation to the current local embedding service.
- Configuration artifacts that preserve the declared local embedding integration boundary.

**Validation Obligation**
- Routing verification confirms embedding calls are directed to the active local embedding service.
- Structural verification confirms the application does not route embeddings to an undeclared alternate service.

**Mandatory**
`yes`

### REQ-20 - No Internal Model Switching

**Requirement Type**
`constraint`

**Source Anchor**
The application must not implement internal model switching.

**Requirement Statement**
The implementation must not include internal model switching or model orchestration controls and must preserve a fixed service-routing boundary for local answer-generation and embedding services.

**Artifact Obligation**
- Runtime policy artifacts that omit model switching controls from the application.
- Service invocation artifacts that use fixed integration targets without internal model arbitration.

**Validation Obligation**
- Structural verification confirms no internal model switching controls are present in runtime artifacts.
- Behavior verification confirms service calls follow fixed routes without model arbitration logic.

**Mandatory**
`yes`

### REQ-21 - Advisory Lexicon Constraint

**Requirement Type**
`constraint`

**Source Anchor**
Lexicon behavior, if present, must remain advisory and must not replace semantic retrieval or hard-block retrieval when it contributes no useful narrowing.

**Requirement Statement**
Any lexicon behavior present in the application must remain advisory, must not replace semantic retrieval, and must not hard-block retrieval when lexicon narrowing contributes no useful restriction.

**Artifact Obligation**
- Lexicon interaction artifacts that operate only as advisory behavior around retrieval.
- Retrieval guard artifacts that preserve semantic retrieval execution when lexicon narrowing is unhelpful.

**Validation Obligation**
- Behavior verification confirms semantic retrieval continues when lexicon narrowing contributes no useful restriction.
- Policy verification confirms lexicon behavior cannot replace or hard-block the required semantic retrieval path.

**Mandatory**
`yes`

### REQ-22 - Grounded Support Safeguard Validation

**Requirement Type**
`validation`

**Source Anchor**
The application must state when support is partial, weak, or insufficient instead of presenting unsupported claims as grounded answers.

**Requirement Statement**
The system must include executable validation coverage that proves unsupported claims are not presented as grounded answers and that partial, weak, or insufficient support is explicitly surfaced in user-facing output.

**Artifact Obligation**
- Validation harness artifacts that execute grounded-answer support-state checks.
- Assertion artifacts that fail when unsupported claims are presented as fully grounded.

**Validation Obligation**
- End-to-end verification confirms unsupported claims are blocked or labeled with non-strong support states.
- Output verification confirms partial, weak, and insufficient support labels appear when evidence quality requires them.

**Mandatory**
`yes`

## Component Inventory

### COMP-1 - Local Web Chat Surface

**Component Type**
`surface`

**Source Requirement IDs**
- `REQ-1`
- `REQ-2`
- `REQ-15`
- `REQ-16`
- `REQ-17`

**Purpose**
Provide the locally hosted web chat surface where users submit natural-language questions, read grounded answers, inspect support states, request source disclosure, and trigger session saves.

**Dependencies**
- `COMP-2`
- `COMP-9`
- `COMP-10`
- `COMP-11`

**Artifact Obligation**
- Web surface implementation artifacts for chat input and grounded answer rendering.
- User interaction artifacts for source requests and session save actions.

**Runtime Responsibility**
- Accept user questions and hand them into the grounded query workflow.
- Render answers with support-state visibility and user-triggered controls for sources and session saving.

**Validation Obligation**
- Surface verification confirms chat input and grounded answer rendering work through the local web application.
- Policy verification confirms source disclosure and session saving remain user-triggered from the surface.

### COMP-2 - Grounded Query Workflow

**Component Type**
`workflow`

**Source Requirement IDs**
- `REQ-1`
- `REQ-3`
- `REQ-4`
- `REQ-5`
- `REQ-6`
- `REQ-11`
- `REQ-12`
- `REQ-13`
- `REQ-18`
- `REQ-19`
- `REQ-21`

**Purpose**
Coordinate the end-to-end grounded query workflow across embedding, retrieval, metadata normalization, authority resolution, policy enforcement, and grounded answer assembly without collapsing the required service and authority boundaries.

**Dependencies**
- `COMP-3`
- `COMP-4`
- `COMP-5`
- `COMP-6`
- `COMP-7`
- `COMP-9`
- `COMP-10`

**Artifact Obligation**
- Workflow orchestration artifacts for deterministic query-stage sequencing.
- Handoff artifacts that preserve pointer-only retrieval boundaries until authority resolution completes.

**Runtime Responsibility**
- Execute the grounded query path from user input through answer generation in deterministic stage order.
- Enforce that retrieval outputs flow through normalization, resolution, and policy checks before answer generation.

**Validation Obligation**
- Workflow verification confirms all required stages execute in the expected order.
- Guard verification confirms the workflow halts when authority resolution or policy prerequisites are not satisfied.

### COMP-3 - Chat Service Adapter

**Component Type**
`integration`

**Source Requirement IDs**
- `REQ-3`
- `REQ-18`
- `REQ-20`

**Purpose**
Integrate the application with the local llama.cpp chat API for grounded answer generation while preserving fixed local service routing and excluding internal model switching behavior.

**Dependencies**
- `None`

**Artifact Obligation**
- Chat API client artifacts for request and response exchange with the local chat service.
- Fixed routing artifacts that bind grounded answer generation to the declared local chat runtime.

**Runtime Responsibility**
- Send grounded answer-generation requests to the local chat API.
- Return chat model output to the grounded answer service without introducing alternate model routing behavior.

**Validation Obligation**
- Integration verification confirms successful request and response exchange with the local chat runtime.
- Structural verification confirms no model switching or alternate chat routing logic exists in the adapter.

### COMP-4 - Embedding Service Adapter

**Component Type**
`integration`

**Source Requirement IDs**
- `REQ-4`
- `REQ-19`

**Purpose**
Integrate the application with the local llama.cpp embedding service through the declared `POST /embedding` contract and preserve fixed local embedding routing.

**Dependencies**
- `None`

**Artifact Obligation**
- Embedding API client artifacts for `POST /embedding`.
- Fixed routing artifacts that bind embedding generation to the declared local embedding runtime.

**Runtime Responsibility**
- Send query text to the local embedding service and receive embedding vectors.
- Return embedding vectors to the retrieval layer for nearest-neighbor lookup.

**Validation Obligation**
- Contract verification confirms embedding requests use `POST /embedding` against the local embedding runtime.
- Routing verification confirms embeddings are not generated through undeclared alternate services.

### COMP-5 - Qdrant Retrieval Adapter

**Component Type**
`integration`

**Source Requirement IDs**
- `REQ-5`
- `REQ-6`
- `REQ-12`
- `REQ-13`

**Purpose**
Execute nearest-neighbor retrieval against the required local Qdrant collection and emit locator metadata without promoting Qdrant into a readable authority store.

**Dependencies**
- `COMP-4`

**Artifact Obligation**
- Retrieval adapter artifacts for local Qdrant query execution.
- Collection-binding artifacts that enforce use of `emb_v2_nomic_embed_text_v1_5_f16_768`.

**Runtime Responsibility**
- Query the local Qdrant runtime with embedding vectors and retrieve hit metadata.
- Emit retrieval results as locator metadata for downstream authority resolution.

**Validation Obligation**
- Retrieval verification confirms calls target the declared local Qdrant service and required collection.
- Boundary verification confirms retrieval output remains pointer-oriented rather than readable authority text.

### COMP-6 - Retrieval Metadata Normalizer

**Component Type**
`module`

**Source Requirement IDs**
- `REQ-10`
- `REQ-12`

**Purpose**
Normalize retrieval hit metadata into a deterministic structure that preserves `tier`, `source_id`, `parent_id`, and `chunk_index` for authority resolution and downstream proof checks.

**Dependencies**
- `COMP-5`

**Artifact Obligation**
- Metadata normalization artifacts that preserve all required retrieval fields.
- Validation-ready metadata artifacts that expose normalized resolver inputs.

**Runtime Responsibility**
- Parse and normalize retrieval hit metadata before authority resolution begins.
- Reject incomplete retrieval hits that cannot satisfy downstream authority mapping requirements.

**Validation Obligation**
- Contract verification confirms all required metadata fields are preserved after normalization.
- Negative-path verification confirms incomplete retrieval metadata is rejected deterministically.

### COMP-7 - Authority Resolver

**Component Type**
`module`

**Source Requirement IDs**
- `REQ-7`
- `REQ-8`
- `REQ-10`
- `REQ-14`

**Purpose**
Resolve normalized retrieval metadata into stable authority identities and boxed authority locations so grounded answers can be built from readable source material instead of locator output alone.

**Dependencies**
- `COMP-6`
- `COMP-8`

**Artifact Obligation**
- Resolver mapping artifacts that convert normalized metadata into stable authority lookups.
- Identity continuity artifacts that preserve logical source mapping across physical storage-root changes.

**Runtime Responsibility**
- Map normalized retrieval metadata to the correct authority identity and boxed authority target.
- Return resolved authority references that remain stable even when physical storage roots move.

**Validation Obligation**
- Resolver verification confirms supported metadata resolves to the expected authority target.
- Continuity verification confirms source identity remains stable across storage-root changes.

### COMP-8 - Boxed Authority Artifact Store

**Component Type**
`data_store`

**Source Requirement IDs**
- `REQ-8`
- `REQ-9`
- `REQ-14`

**Purpose**
Provide access to boxed authority markdown and associated sidecar artifacts for supported sources while preserving stable identity mapping across supported authority tiers.

**Dependencies**
- `None`

**Artifact Obligation**
- File access artifacts for authority markdown under the supported TierL_EB and Tier2 patterns.
- Sidecar access artifacts for `<source_id>.meta.json` and `<source_id>.sha256`.

**Runtime Responsibility**
- Read authority markdown content for resolved supported sources.
- Read associated sidecar artifacts aligned to the same `source_id`.

**Validation Obligation**
- Data access verification confirms readable authority markdown is returned for valid supported sources.
- Sidecar verification confirms both required sidecar artifact types are accessible for the same resolved source identity.

### COMP-9 - Grounded Answer Service

**Component Type**
`service`

**Source Requirement IDs**
- `REQ-11`
- `REQ-15`
- `REQ-16`
- `REQ-21`

**Purpose**
Assemble grounded answer inputs from resolved authority content, classify support state, and produce user-facing responses that respect disclosure and retrieval policy constraints.

**Dependencies**
- `COMP-3`
- `COMP-7`
- `COMP-10`

**Artifact Obligation**
- Grounded answer assembly artifacts that use resolved authority content as the readable answer basis.
- Support-state and response rendering artifacts that prepare user-facing answer payloads.

**Runtime Responsibility**
- Build answer-generation inputs from resolved authority content and invoke the chat service adapter.
- Emit user-facing answer payloads with support-state classification and disclosure-aware formatting.

**Validation Obligation**
- Grounding verification confirms answer inputs use resolved authority content rather than payload-only retrieval text.
- Behavior verification confirms support-state output and disclosure handling align with runtime policy.

### COMP-10 - Policy Enforcement Module

**Component Type**
`module`

**Source Requirement IDs**
- `REQ-12`
- `REQ-13`
- `REQ-16`
- `REQ-20`
- `REQ-21`

**Purpose**
Enforce architectural and user-facing policies that keep retrieval pointer-only, keep Qdrant locator-only, preserve user-triggered disclosure behavior, forbid model switching, and constrain any lexicon behavior to advisory use.

**Dependencies**
- `COMP-2`

**Artifact Obligation**
- Policy rule artifacts for retrieval boundaries, disclosure gating, model-switching prohibition, and lexicon advisory behavior.
- Enforcement artifacts that apply policy checks before grounded answer emission.

**Runtime Responsibility**
- Apply disclosure and architectural guardrails during query execution and answer emission.
- Reject runtime behavior that violates locator-only, model-switching, or lexicon advisory constraints.

**Validation Obligation**
- Policy verification confirms disclosure, locator-only, and lexicon constraints are enforced during execution.
- Structural verification confirms model-switching behavior is absent from policy-governed runtime paths.

### COMP-11 - Session Persistence Module

**Component Type**
`module`

**Source Requirement IDs**
- `REQ-17`

**Purpose**
Persist the active chat session only when the user explicitly triggers a save action from the application surface.

**Dependencies**
- `COMP-1`

**Artifact Obligation**
- Session persistence artifacts for explicit save execution.
- Trigger-handling artifacts that gate persistence behind user action.

**Runtime Responsibility**
- Receive explicit save requests from the user-facing surface.
- Persist the active session only when an explicit save request is provided.

**Validation Obligation**
- Trigger verification confirms explicit user save actions persist the active session.
- Guard verification confirms no automatic session persistence occurs without a user trigger.

### COMP-12 - Grounded Validation Harness

**Component Type**
`validation_harness`

**Source Requirement IDs**
- `REQ-3`
- `REQ-4`
- `REQ-5`
- `REQ-6`
- `REQ-7`
- `REQ-8`
- `REQ-9`
- `REQ-10`
- `REQ-11`
- `REQ-12`
- `REQ-13`
- `REQ-14`
- `REQ-15`
- `REQ-16`
- `REQ-17`
- `REQ-18`
- `REQ-19`
- `REQ-20`
- `REQ-21`
- `REQ-22`

**Purpose**
Provide executable verification across service integrations, retrieval boundaries, authority resolution, support-state communication, disclosure policy, session persistence, and unsupported-claim safeguards.

**Dependencies**
- `COMP-1`
- `COMP-2`
- `COMP-3`
- `COMP-4`
- `COMP-5`
- `COMP-6`
- `COMP-7`
- `COMP-8`
- `COMP-9`
- `COMP-10`
- `COMP-11`

**Artifact Obligation**
- Automated validation suite artifacts for grounded answer execution and policy checks.
- Assertion artifacts that fail when architecture, support-state, or disclosure constraints are violated.

**Runtime Responsibility**
- Execute integration, boundary, and grounded-answer verification scenarios.
- Report deterministic pass and failure outcomes tied to the declared requirements.

**Validation Obligation**
- End-to-end verification confirms unsupported claims are not presented as grounded answers.
- Regression verification confirms declared integration and policy constraints remain satisfied across changes.

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
