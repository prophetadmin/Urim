URIM App is a repository-owned application layer whose purpose is to make an
existing grounded-query runtime launchable, operable, and verifiable as a real
local system.

The project does not define, rebuild, or own the existing runtime. That runtime
remains an external, pre-existing implementation whose internal modules,
structure, and artifacts are not part of this project’s build scope.

This project defines only the application layer that:
- launches the system
- orchestrates execution
- connects browser-facing surfaces to the runtime
- routes queries into the runtime
- exposes readable authority inspection
- enforces session and policy control
- proves end-to-end behavior through executable validation

The application must explicitly wire into the existing runtime and local
services while preserving a strict boundary in which:
- the existing runtime is used but not decomposed
- no requirements assign ownership to its internal artifacts
- no components represent its internal structure
- no roadmap phase claims its files as produced outputs

The system executes grounded queries by:
- receiving input through the chat surface
- routing execution through a repository-owned execution routing and control layer
- invoking the existing runtime and local services without redefining their internal logic
- treating Qdrant strictly as a locator
- resolving readable authority exclusively from boxed artifacts

The application must provide:
- a deterministic, repository-owned launch path
- separate browser-accessible chat, evidence, and system/configuration surfaces
- explicit session persistence and disclosure control
- truthful failure states when any part of the runtime path breaks
- executable validation that proves the runtime path and fails when it is broken

All produced artifacts must exist under repository ownership and must be
sufficient to:
- remain subject to validation when present at project start
- be extended when present but insufficient for required behavior
- not be treated as complete solely by prior existence
- launch the system
- wire into the existing runtime
- execute grounded queries end-to-end
- expose readable authority inspection
- validate runtime behavior through executable commands

The outcome is a complete application layer that proves an existing grounded
runtime can be turned into a real, inspectable, operator-usable local system
without redefining or absorbing its internal implementation.