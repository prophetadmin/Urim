# FAILURE CODES v1

This file defines canonical failure codes for deterministic command behavior.

- `SCHEMA_VIOLATION`
  - Raised when an artifact fails its declared schema.
- `PHASE_CONFLICT`
  - Raised when phase references are invalid or contradictory.
- `VERSION_CONFLICT`
  - Raised when `Roadmap Version` in state does not match active roadmap
    artifact version.
- `ARCHITECTURE_COVERAGE_FAILURE`
  - Raised when roadmap planning omits required architecture elements inferred
    from the seed.
- `OBJECTIVE_CONFLICT`
  - Raised when selected objective does not advance exactly one unmet active
    phase exit criterion.
- `SCOPE_VIOLATION`
  - Raised when command behavior attempts out-of-scope or cross-phase edits not
    allowed by protocol.
