Project Intent

Create a local-first chat application that retrieves authoritative support from a personal knowledge foundation and generates grounded natural-language answers using local retrieval and local reasoning services.

Problem Statement

Existing local knowledge assets are not directly consultable through a conversational interface that preserves grounding in authoritative source material. The available vector retrieval layer returns nearest-neighbor hits with pointer metadata such as `tier`, `source_id`, `parent_id`, and `chunk_index`, but it does not return the readable authority text needed for grounded answers. The readable source material exists separately in boxed markdown artifacts on disk, so users cannot reliably query the local knowledge foundation through natural language unless the system resolves retrieved pointers into authoritative text and uses that resolved material as the basis for answers while clearly distinguishing strong support from weak or insufficient support.

Scope Boundaries

Included:
- A chat-first local application for natural-language querying over a local knowledge foundation.
- Integration with the existing local llama.cpp chat API for answer generation.
- Integration with the existing local llama.cpp embedding service for query embeddings.
- Integration with the existing local Qdrant service for nearest-neighbor retrieval.
- Retrieval against the Qdrant collection `emb_v2_nomic_embed_text_v1_5_f16_768`.
- Resolution of Qdrant hit metadata into boxed markdown authority content on disk by `tier` and `source_id`.
- Resolver support for the verified boxed authority patterns `D:\boxed\TierL_EB\<source_id>\<source_id>.md` and `D:\boxed\Tier2\<source_id>\<source_id>.md`.
- Use of resolved authority content, rather than Qdrant payload text alone, as the readable basis for answer generation.
- Explicit handling of strong, partial, weak, and insufficient support states in user-facing answers.
- Source disclosure in chat only when the user requests sources.
- User-triggered session saving.

Excluded:
- Internal model switching or model orchestration logic.
- Automatic source dumps in every answer.
- Automatic persistence of every chat session.
- A desktop-native first implementation.
- Finalization of Wikipedia boxed storage handling.
- Long-term storage repacking strategy for very large boxed corpora.

Non-Goals

- Build a general-purpose ungrounded chat assistant.
- Build a full analyst or debugging console in the first pass.
- Replace semantic retrieval with Lexicon-only lookup behavior.
- Make Qdrant the readable authority text store.
- Solve long-term storage layout optimization in the first pass.
- Implement internal UI or service controls for switching local models.

Environment Assumptions

- A local llama.cpp chat service is available on `127.0.0.1:8081`.
- A local llama.cpp embedding service is available on `127.0.0.1:8084`.
- The embedding service exposes `POST /embedding`.
- A local Qdrant service is available on `127.0.0.1:6333`.
- The Qdrant collection `emb_v2_nomic_embed_text_v1_5_f16_768` is available.
- Readable authority content for tested non-Wikipedia tiers exists as boxed markdown artifacts on local disk.
- Verified boxed authority paths include `D:\boxed\TierL_EB\<source_id>\<source_id>.md` and `D:\boxed\Tier2\<source_id>\<source_id>.md`.
- Associated boxed sidecar artifacts include `<source_id>.meta.json` and `<source_id>.sha256`.
- Boxed authority artifacts are addressable by `tier` and `source_id`.
- The first implementation can be delivered as a locally hosted web application.

Constraints

- The application must use the currently exposed local llama.cpp chat API.
- The application must use the currently exposed local llama.cpp embedding service.
- The application must not implement internal model switching.
- Retrieval must treat Qdrant results as pointer metadata rather than final readable answer text.
- Resolver behavior must consume retrieval metadata including `tier`, `source_id`, `parent_id`, and `chunk_index` when mapping retrieval hits to readable authority material.
- Answer generation must use resolved boxed authority content as the readable source basis.
- Qdrant must remain a vector locator rather than the authority text store.
- Stable identity continuity through `source_id` and tier mapping must remain valid even if physical storage roots move.
- Lexicon behavior, if present, must remain advisory and must not replace semantic retrieval or hard-block retrieval when it contributes no useful narrowing.
- The application must state when support is partial, weak, or insufficient instead of presenting unsupported claims as grounded answers.
- Source disclosure must be optional and user-triggered in chat.
- Session persistence must be user-triggered.

Success Definition

- File exists at 01_GENESIS/PROJECT_SEED.md.
- 01_GENESIS/PROJECT_SEED.md contains the exact string: "Create a local-first chat application that retrieves authoritative support from a personal knowledge foundation and generates grounded natural-language answers using local retrieval and local reasoning services."
- 01_GENESIS/PROJECT_SEED.md contains the exact string: "A local llama.cpp chat service is available on `127.0.0.1:8081`."
- 01_GENESIS/PROJECT_SEED.md contains the exact string: "A local llama.cpp embedding service is available on `127.0.0.1:8084`."
- 01_GENESIS/PROJECT_SEED.md contains the exact string: "The embedding service exposes `POST /embedding`."
- 01_GENESIS/PROJECT_SEED.md contains the exact string: "A local Qdrant service is available on `127.0.0.1:6333`."
- 01_GENESIS/PROJECT_SEED.md contains the exact string: "The Qdrant collection `emb_v2_nomic_embed_text_v1_5_f16_768` is available."
- 01_GENESIS/PROJECT_SEED.md contains the exact string: "Verified boxed authority paths include `D:\boxed\TierL_EB\<source_id>\<source_id>.md` and `D:\boxed\Tier2\<source_id>\<source_id>.md`."
- 01_GENESIS/PROJECT_SEED.md contains the exact string: "Associated boxed sidecar artifacts include `<source_id>.meta.json` and `<source_id>.sha256`."
- 01_GENESIS/PROJECT_SEED.md contains the exact string: "Resolver behavior must consume retrieval metadata including `tier`, `source_id`, `parent_id`, and `chunk_index` when mapping retrieval hits to readable authority material."
- 01_GENESIS/PROJECT_SEED.md contains the exact string: "Qdrant must remain a vector locator rather than the authority text store."
- 01_GENESIS/PROJECT_SEED.md contains the exact string: "Source disclosure must be optional and user-triggered in chat."
- 01_GENESIS/PROJECT_SEED.md contains the exact string: "Session persistence must be user-triggered."
