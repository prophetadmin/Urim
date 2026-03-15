# STATE_SUMMARY.md

This scaffold placeholder does not count as a generated continuity block until
it is replaced with schema-conforming state content.

This file records the current execution state of the project.

Purpose
Allow deterministic project continuation across sessions or agents.

Schema
This file must conform to:

`03_LEVITICUS/Core/STATE_SUMMARY_SCHEMA_v1.md`

Lifecycle

roadmap execution
-> state update
-> resume execution

Notes

* The state summary is updated after phase completion.
* This file determines the current project position.
* Agents must consult this file before executing work.

If this file is empty, execution has not yet begun.
