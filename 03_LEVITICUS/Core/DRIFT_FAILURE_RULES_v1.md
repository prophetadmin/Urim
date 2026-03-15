# DRIFT_FAILURE_RULES_v1.md  
Deterministic Workflow Framework  

All rules in this document apply to execution governed by:

- `03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`
- `03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`  
- `03_LEVITICUS/Core/RESUME_PROTOCOL_v1.md` 
- `03_LEVITICUS/Core/SLASH_COMMAND_SPECS_v1.md`  

All rule blocks must follow the locked structure below. No deviations permitted.

---

## Rule Structure (Locked)

Failure Mode Name  
Detection Signal  
Blocking Condition (if applicable)  
Corrective Action  
Verification Check  

---

## Failure Mode 1

Failure Mode Name  
Phase Skipping / Cross-Phase Blending  

Detection Signal  
An attempted modification targets an artifact not belonging to the Active Phase defined in the `03_LEVITICUS/STATE_SUMMARY.md`.  

Blocking Condition (if applicable)  
If modification affects governance artifacts or Exit Criteria outside the Active Phase -> HALT.  

Corrective Action  
Restrict execution scope to artifacts belonging to the Active Phase only.  
If cross-phase work is required, record it in the Deferred Registry defined by `03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md` with:  
ID, Origin Phase, Description, Reason, Re-entry Phase, Status.  

Verification Check  
All modified artifacts belong to the Active Phase.  
Next Deterministic Objective advances an unmet Exit Criterion of the Active Phase only.  

---

## Failure Mode 2

Failure Mode Name  
Completion Claim Without Proof  

Detection Signal  
A declaration of phase completion occurs without `/validate_phase` producing proof for every Exit Criterion defined in `03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`.  

Blocking Condition (if applicable)  
If completion is claimed without proof -> phase advancement prohibited.  

Corrective Action  
Execute `/validate_phase` using required inputs defined in `03_LEVITICUS/Core/SLASH_COMMAND_SPECS_v1.md`.  
If FAIL, set Next Deterministic Objective to the first unmet Exit Criterion returned by validation.  

Verification Check  
A VALIDATION REPORT exists for the Active Phase.  
All Exit Criteria show PASS with required proof elements present.  

---

## Failure Mode 3

Failure Mode Name  
`03_LEVITICUS/STATE_SUMMARY.md` Schema Drift / Structural Expansion  

Detection Signal  
`03_LEVITICUS/STATE_SUMMARY.md` contains narrative content, duplicated history, more than one Current Work Artifact pointer, more than one Next Deterministic Objective, or deviates from `03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`.  

Blocking Condition (if applicable)  
If `03_LEVITICUS/STATE_SUMMARY.md` fails schema validation -> `/resume` must HALT.  

Corrective Action  
Regenerate `03_LEVITICUS/STATE_SUMMARY.md` using `/status_sync` per `03_LEVITICUS/Core/SLASH_COMMAND_SPECS_v1.md`.  
Deferred Registry entries must be preserved exactly (no pruning).  

Verification Check  
`03_LEVITICUS/STATE_SUMMARY.md` structurally validates against `03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md` with zero deviations.  

---

## Failure Mode 4

Failure Mode Name  
Planner Ambiguity / Roadmap Schema Violation  

Detection Signal  
A roadmap contains missing required headings, ambiguous deliverables, qualitative Exit Criteria, or deviates from `03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`.  

Blocking Condition (if applicable)  
If roadmap fails structural validation -> `/create_map_v2` invalid; do not proceed to subsequent phases.  

Corrective Action  
Re-run transformation using `03_LEVITICUS/Core/PLANNER_TO_ROADMAP_TRANSFORMATION_PROMPT_v2.md` and enforce strict compliance with `03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`.  

Verification Check  
Roadmap structurally validates against `03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md` with zero deviations.  

---

## Failure Mode 5

Failure Mode Name  
Context Overflow / Token Budget Breach  

Detection Signal  
Output includes unnecessary full artifact reproduction, historical narrative, duplicated roadmap content, or exceeds the minimalism constraints defined by the framework.  

Blocking Condition (if applicable)  
If output reproduces entire artifacts or unnecessary history -> HALT and re-emit minimal output only.  

Corrective Action  
Restrict working set strictly to:  
- `03_LEVITICUS/Core/ROADMAP_SCHEMA_v2.md`  
- `03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`  
- `03_LEVITICUS/Core/RESUME_PROTOCOL_v1.md`  
- `03_LEVITICUS/Core/SLASH_COMMAND_SPECS_v1.md`  
- Latest `03_LEVITICUS/STATE_SUMMARY.md`  
- Current Work Artifact  

Emit only what is required to advance exactly one Next Deterministic Objective.  

Verification Check  
No duplicated full artifacts appear in output.  
`03_LEVITICUS/STATE_SUMMARY.md` remains minimal and schema-compliant.  
Exactly one Next Deterministic Objective is present when emitting `03_LEVITICUS/STATE_SUMMARY.md`.  

