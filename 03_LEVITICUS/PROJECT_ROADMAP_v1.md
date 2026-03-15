**Requirements Coverage Matrix**
- `REQ-1` -> 3 -> `02_EXODUS/runtime/surface/chat_app.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase3_surface_session_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-2` -> 1 -> `02_EXODUS/runtime/integrations/chat_api_client.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-3` -> 1 -> `02_EXODUS/runtime/integrations/embedding_client.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-4` -> 1 -> `02_EXODUS/runtime/integrations/qdrant_client.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-5` -> 1 -> `02_EXODUS/runtime/integrations/qdrant_client.js` -> `02_EXODUS/runtime/integrations/qdrant_client.js contains the exact anchor string: "emb_v2_nomic_embed_text_v1_5_f16_768".`
- `REQ-6` -> 1 -> `02_EXODUS/runtime/resolver/boxed_authority_resolver.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-7` -> 1 -> `02_EXODUS/runtime/data/boxed_authority_reader.js` -> `02_EXODUS/runtime/data/boxed_authority_reader.js contains the exact anchor string: "D:\\boxed\\TierL_EB\\<source_id>\\<source_id>.md".`
- `REQ-8` -> 2 -> `02_EXODUS/runtime/services/grounded_answer_service.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase2_workflow_policy_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-9` -> 3,4 -> `02_EXODUS/runtime/surface/chat_app.js`, `02_EXODUS/tests/support_state_validation.ps1` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/support_state_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-10` -> 2,4 -> `02_EXODUS/runtime/policy/policy_enforcer.js`, `02_EXODUS/tests/source_disclosure_and_session_validation.ps1` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-11` -> 3,4 -> `02_EXODUS/runtime/session/session_store.js`, `02_EXODUS/tests/source_disclosure_and_session_validation.ps1` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-12` -> 2 -> `02_EXODUS/runtime/policy/policy_enforcer.js` -> `02_EXODUS/runtime/policy/policy_enforcer.js contains the exact anchor string: "no_model_switching".`
- `REQ-13` -> 1 -> `02_EXODUS/runtime/resolver/boxed_authority_resolver.js` -> `02_EXODUS/runtime/resolver/boxed_authority_resolver.js contains the exact anchor string: "stable_source_identity".`
- `REQ-14` -> 2 -> `02_EXODUS/runtime/policy/policy_enforcer.js` -> `02_EXODUS/runtime/policy/policy_enforcer.js contains the exact anchor string: "lexicon_advisory".`
- `REQ-15` -> 1,4 -> `02_EXODUS/runtime/resolver/boxed_authority_resolver.js`, `02_EXODUS/tests/resolver_metadata_validation.ps1` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/resolver_metadata_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- `REQ-16` -> 2 -> `02_EXODUS/runtime/workflow/query_orchestrator.js` -> `02_EXODUS/runtime/workflow/query_orchestrator.js contains the exact anchor string: "vector_locator_only".`
- `REQ-17` -> 4 -> `02_EXODUS/tests/validation_harness.ps1` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/support_state_validation.ps1" exits with code 0 and emits "PASS" in stdout.`

**Component Coverage Matrix**
- `COMP-1` -> 3 -> `02_EXODUS/runtime/surface/chat_app.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase3_surface_session_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-2` -> 2 -> `02_EXODUS/runtime/workflow/query_orchestrator.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase2_workflow_policy_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-3` -> 1 -> `02_EXODUS/runtime/integrations/chat_api_client.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-4` -> 1 -> `02_EXODUS/runtime/integrations/embedding_client.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-5` -> 1 -> `02_EXODUS/runtime/integrations/qdrant_client.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-6` -> 1,4 -> `02_EXODUS/runtime/resolver/boxed_authority_resolver.js`, `02_EXODUS/tests/resolver_metadata_validation.ps1` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/resolver_metadata_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-7` -> 1 -> `02_EXODUS/runtime/data/boxed_authority_reader.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-8` -> 2 -> `02_EXODUS/runtime/services/grounded_answer_service.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase2_workflow_policy_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-9` -> 3 -> `02_EXODUS/runtime/session/session_store.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase3_surface_session_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-10` -> 2 -> `02_EXODUS/runtime/policy/policy_enforcer.js` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase2_workflow_policy_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- `COMP-11` -> 4 -> `02_EXODUS/tests/validation_harness.ps1` -> `Command "powershell -NoProfile -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 0 and emits "PASS" in stdout.`

**Seed Coverage Matrix**
- A chat-first local application for natural-language querying over a local knowledge foundation. -> 3 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase3_surface_session_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- Integration with the existing local llama.cpp chat API for answer generation. -> 1 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- Integration with the existing local llama.cpp embedding service for query embeddings. -> 1 -> `02_EXODUS/runtime/integrations/embedding_client.js contains the exact anchor string: "POST /embedding".`
- Integration with the existing local Qdrant service for nearest-neighbor retrieval. -> 1 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- Retrieval against the Qdrant collection `emb_v2_nomic_embed_text_v1_5_f16_768`. -> 1 -> `02_EXODUS/runtime/integrations/qdrant_client.js contains the exact anchor string: "emb_v2_nomic_embed_text_v1_5_f16_768".`
- Resolution of Qdrant hit metadata into boxed markdown authority content on disk by `tier` and `source_id`. -> 1 -> `02_EXODUS/runtime/resolver/boxed_authority_resolver.js contains the exact anchor string: "tier, source_id, parent_id, chunk_index".`
- Resolver support for the verified boxed authority patterns `D:\boxed\TierL_EB\<source_id>\<source_id>.md` and `D:\boxed\Tier2\<source_id>\<source_id>.md`. -> 1 -> `02_EXODUS/runtime/data/boxed_authority_reader.js contains the exact anchor string: "D:\\boxed\\Tier2\\<source_id>\\<source_id>.md".`
- Use of resolved authority content, rather than Qdrant payload text alone, as the readable basis for answer generation. -> 2 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/phase2_workflow_policy_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`
- Explicit handling of strong, partial, weak, and insufficient support states in user-facing answers. -> 4 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/support_state_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- Source disclosure in chat only when the user requests sources. -> 4 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- User-triggered session saving. -> 4 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- The application must use the currently exposed local llama.cpp chat API. -> 1 -> `02_EXODUS/runtime/integrations/chat_api_client.js contains the exact anchor string: "127.0.0.1:8081".`
- The application must use the currently exposed local llama.cpp embedding service. -> 1 -> `02_EXODUS/runtime/integrations/embedding_client.js contains the exact anchor string: "127.0.0.1:8084".`
- The application must not implement internal model switching. -> 2 -> `02_EXODUS/runtime/policy/policy_enforcer.js contains the exact anchor string: "no_model_switching".`
- Retrieval must treat Qdrant results as pointer metadata rather than final readable answer text. -> 2 -> `02_EXODUS/runtime/workflow/query_orchestrator.js contains the exact anchor string: "vector_locator_only".`
- Resolver behavior must consume retrieval metadata including `tier`, `source_id`, `parent_id`, and `chunk_index` when mapping retrieval hits to readable authority material. -> 1 -> `02_EXODUS/runtime/resolver/boxed_authority_resolver.js contains the exact anchor string: "tier, source_id, parent_id, chunk_index".`
- Answer generation must use resolved boxed authority content as the readable source basis. -> 2 -> `02_EXODUS/runtime/services/grounded_answer_service.js contains the exact anchor string: "resolved authority content".`
- Qdrant must remain a vector locator rather than the authority text store. -> 2 -> `02_EXODUS/runtime/workflow/query_orchestrator.js contains the exact anchor string: "vector_locator_only".`
- Stable identity continuity through `source_id` and tier mapping must remain valid even if physical storage roots move. -> 1 -> `02_EXODUS/runtime/resolver/boxed_authority_resolver.js contains the exact anchor string: "stable_source_identity".`
- Lexicon behavior, if present, must remain advisory and must not replace semantic retrieval or hard-block retrieval when it contributes no useful narrowing. -> 2 -> `02_EXODUS/runtime/policy/policy_enforcer.js contains the exact anchor string: "lexicon_advisory".`
- The application must state when support is partial, weak, or insufficient instead of presenting unsupported claims as grounded answers. -> 4 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/support_state_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- Source disclosure must be optional and user-triggered in chat. -> 4 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- Session persistence must be user-triggered. -> 4 -> `Command "powershell -NoProfile -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0 and emits "PASS" in stdout.`

### PHASE 1 - Core Integrations And Authority Resolver

**Phase Type**
`implementation`

**Purpose**
Implement the integration and resolver foundations required to call local chat, embedding, and retrieval services, bind the required collection, and resolve retrieval pointers into boxed authority content with stable identity handling.

**Inputs (Required)**
- `01_GENESIS/PROJECT_SEED.md`
- `01_GENESIS/REQUIREMENTS_LEDGER.md`

**Entry Criteria (All Required)**
- `File exists at 01_GENESIS/PROJECT_SEED.md.`
- `File exists at 01_GENESIS/REQUIREMENTS_LEDGER.md.`

**Work Definition (Scope-Bound)**
- Implement local service adapters for chat, embedding, and Qdrant retrieval.
- Implement boxed authority reading and metadata-driven resolver logic with required metadata fields and identity continuity support.
- Implement phase-level smoke validation script for integration and resolver flow.

**Exit Criteria (All Required)**
- `File exists at 02_EXODUS/runtime/integrations/chat_api_client.js.`
- `File exists at 02_EXODUS/runtime/integrations/embedding_client.js.`
- `File exists at 02_EXODUS/runtime/integrations/qdrant_client.js.`
- `File exists at 02_EXODUS/runtime/data/boxed_authority_reader.js.`
- `File exists at 02_EXODUS/runtime/resolver/boxed_authority_resolver.js.`
- `02_EXODUS/runtime/integrations/chat_api_client.js contains the exact anchor string: "127.0.0.1:8081".`
- `02_EXODUS/runtime/integrations/embedding_client.js contains the exact anchor string: "127.0.0.1:8084".`
- `02_EXODUS/runtime/integrations/embedding_client.js contains the exact anchor string: "POST /embedding".`
- `02_EXODUS/runtime/integrations/qdrant_client.js contains the exact anchor string: "emb_v2_nomic_embed_text_v1_5_f16_768".`
- `02_EXODUS/runtime/data/boxed_authority_reader.js contains the exact anchor string: "D:\\boxed\\TierL_EB\\<source_id>\\<source_id>.md".`
- `02_EXODUS/runtime/data/boxed_authority_reader.js contains the exact anchor string: "D:\\boxed\\Tier2\\<source_id>\\<source_id>.md".`
- `02_EXODUS/runtime/resolver/boxed_authority_resolver.js contains the exact anchor string: "tier, source_id, parent_id, chunk_index".`
- `02_EXODUS/runtime/resolver/boxed_authority_resolver.js contains the exact anchor string: "stable_source_identity".`
- `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`

**Produced Artifacts**
- `02_EXODUS/runtime/integrations/chat_api_client.js`
- `02_EXODUS/runtime/integrations/embedding_client.js`
- `02_EXODUS/runtime/integrations/qdrant_client.js`
- `02_EXODUS/runtime/data/boxed_authority_reader.js`
- `02_EXODUS/runtime/resolver/boxed_authority_resolver.js`
- `02_EXODUS/tests/phase1_integration_smoke.ps1`

**Failure Signals**
- `Command "powershell -NoProfile -File 02_EXODUS/tests/phase1_integration_smoke.ps1" exits with code 1.`
- `02_EXODUS/runtime/resolver/boxed_authority_resolver.js does not contain heading: "tier, source_id, parent_id, chunk_index".`

### PHASE 2 - Workflow, Grounding, And Policy Enforcement

**Phase Type**
`implementation`

**Purpose**
Implement orchestration, grounding, and policy modules that enforce locator-only retrieval boundaries, authority-first answer construction, no model switching, and advisory lexicon handling.

**Inputs (Required)**
- `02_EXODUS/runtime/integrations/chat_api_client.js`
- `02_EXODUS/runtime/integrations/embedding_client.js`
- `02_EXODUS/runtime/integrations/qdrant_client.js`
- `02_EXODUS/runtime/resolver/boxed_authority_resolver.js`

**Entry Criteria (All Required)**
- `File exists at 02_EXODUS/runtime/integrations/chat_api_client.js.`
- `File exists at 02_EXODUS/runtime/integrations/embedding_client.js.`
- `File exists at 02_EXODUS/runtime/integrations/qdrant_client.js.`
- `File exists at 02_EXODUS/runtime/resolver/boxed_authority_resolver.js.`

**Work Definition (Scope-Bound)**
- Implement query orchestration across embedding, retrieval, resolution, policy checks, and answer assembly.
- Implement grounded answer service that consumes resolved authority content for answer generation.
- Implement policy enforcement module for source disclosure gating, model switching prohibition, lexicon advisory behavior, and locator-only retrieval boundary.

**Exit Criteria (All Required)**
- `File exists at 02_EXODUS/runtime/workflow/query_orchestrator.js.`
- `File exists at 02_EXODUS/runtime/services/grounded_answer_service.js.`
- `File exists at 02_EXODUS/runtime/policy/policy_enforcer.js.`
- `02_EXODUS/runtime/workflow/query_orchestrator.js contains the exact anchor string: "vector_locator_only".`
- `02_EXODUS/runtime/services/grounded_answer_service.js contains the exact anchor string: "resolved authority content".`
- `02_EXODUS/runtime/policy/policy_enforcer.js contains the exact anchor string: "no_model_switching".`
- `02_EXODUS/runtime/policy/policy_enforcer.js contains the exact anchor string: "lexicon_advisory".`
- `Command "powershell -NoProfile -File 02_EXODUS/tests/phase2_workflow_policy_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`

**Produced Artifacts**
- `02_EXODUS/runtime/workflow/query_orchestrator.js`
- `02_EXODUS/runtime/services/grounded_answer_service.js`
- `02_EXODUS/runtime/policy/policy_enforcer.js`
- `02_EXODUS/tests/phase2_workflow_policy_smoke.ps1`

**Failure Signals**
- `Command "powershell -NoProfile -File 02_EXODUS/tests/phase2_workflow_policy_smoke.ps1" exits with code 1.`
- `02_EXODUS/runtime/workflow/query_orchestrator.js does not contain heading: "vector_locator_only".`

### PHASE 3 - Chat Surface And Session Controls

**Phase Type**
`implementation`

**Purpose**
Implement the locally hosted chat-first surface and user-triggered controls for source disclosure and session persistence while exposing support state behavior in user-facing answers.

**Inputs (Required)**
- `02_EXODUS/runtime/workflow/query_orchestrator.js`
- `02_EXODUS/runtime/services/grounded_answer_service.js`
- `02_EXODUS/runtime/policy/policy_enforcer.js`

**Entry Criteria (All Required)**
- `File exists at 02_EXODUS/runtime/workflow/query_orchestrator.js.`
- `File exists at 02_EXODUS/runtime/services/grounded_answer_service.js.`
- `File exists at 02_EXODUS/runtime/policy/policy_enforcer.js.`

**Work Definition (Scope-Bound)**
- Implement local web chat surface artifacts for query submission and answer rendering.
- Implement session persistence module that saves only on explicit user trigger.
- Implement support-state and optional source disclosure interaction behavior at the surface boundary.

**Exit Criteria (All Required)**
- `File exists at 02_EXODUS/runtime/surface/chat_app.html.`
- `File exists at 02_EXODUS/runtime/surface/chat_app.js.`
- `File exists at 02_EXODUS/runtime/session/session_store.js.`
- `02_EXODUS/runtime/surface/chat_app.js contains the exact anchor string: "support_state".`
- `02_EXODUS/runtime/surface/chat_app.js contains the exact anchor string: "source_disclosure_request".`
- `02_EXODUS/runtime/session/session_store.js contains the exact anchor string: "user_triggered_save".`
- `Command "powershell -NoProfile -File 02_EXODUS/tests/phase3_surface_session_smoke.ps1" exits with code 0 and emits "PASS" in stdout.`

**Produced Artifacts**
- `02_EXODUS/runtime/surface/chat_app.html`
- `02_EXODUS/runtime/surface/chat_app.js`
- `02_EXODUS/runtime/session/session_store.js`
- `02_EXODUS/tests/phase3_surface_session_smoke.ps1`

**Failure Signals**
- `Command "powershell -NoProfile -File 02_EXODUS/tests/phase3_surface_session_smoke.ps1" exits with code 1.`
- `02_EXODUS/runtime/session/session_store.js does not contain heading: "user_triggered_save".`

### PHASE 4 - End-To-End Validation Harness

**Phase Type**
`validation`

**Purpose**
Implement and execute validation harness scripts that exercise end-to-end grounded query flow, support-state behavior, source disclosure policy, session persistence trigger behavior, and metadata-driven resolver behavior.

**Inputs (Required)**
- `02_EXODUS/runtime/surface/chat_app.js`
- `02_EXODUS/runtime/workflow/query_orchestrator.js`
- `02_EXODUS/runtime/services/grounded_answer_service.js`
- `02_EXODUS/runtime/resolver/boxed_authority_resolver.js`
- `02_EXODUS/runtime/session/session_store.js`

**Entry Criteria (All Required)**
- `File exists at 02_EXODUS/runtime/surface/chat_app.js.`
- `File exists at 02_EXODUS/runtime/workflow/query_orchestrator.js.`
- `File exists at 02_EXODUS/runtime/services/grounded_answer_service.js.`
- `File exists at 02_EXODUS/runtime/resolver/boxed_authority_resolver.js.`
- `File exists at 02_EXODUS/runtime/session/session_store.js.`

**Work Definition (Scope-Bound)**
- Implement validation scripts for end-to-end grounded query behavior and integration path exercise.
- Implement validation scripts for support-state correctness and unsupported-claim safeguards.
- Implement validation scripts for source disclosure policy, user-triggered session persistence, and resolver metadata consumption requirements.

**Exit Criteria (All Required)**
- `File exists at 02_EXODUS/tests/validation_harness.ps1.`
- `File exists at 02_EXODUS/tests/e2e_grounded_query_validation.ps1.`
- `File exists at 02_EXODUS/tests/support_state_validation.ps1.`
- `File exists at 02_EXODUS/tests/source_disclosure_and_session_validation.ps1.`
- `File exists at 02_EXODUS/tests/resolver_metadata_validation.ps1.`
- `Command "powershell -NoProfile -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- `Command "powershell -NoProfile -File 02_EXODUS/tests/support_state_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- `Command "powershell -NoProfile -File 02_EXODUS/tests/source_disclosure_and_session_validation.ps1" exits with code 0 and emits "PASS" in stdout.`
- `Command "powershell -NoProfile -File 02_EXODUS/tests/resolver_metadata_validation.ps1" exits with code 0 and emits "PASS" in stdout.`

**Produced Artifacts**
- `02_EXODUS/tests/validation_harness.ps1`
- `02_EXODUS/tests/e2e_grounded_query_validation.ps1`
- `02_EXODUS/tests/support_state_validation.ps1`
- `02_EXODUS/tests/source_disclosure_and_session_validation.ps1`
- `02_EXODUS/tests/resolver_metadata_validation.ps1`

**Failure Signals**
- `Command "powershell -NoProfile -File 02_EXODUS/tests/e2e_grounded_query_validation.ps1" exits with code 1.`
- `Command "powershell -NoProfile -File 02_EXODUS/tests/support_state_validation.ps1" exits with code 1.`
