# URIM

# URIM

URIM is a grounded retrieval system for answering questions against authoritative boxed knowledge artifacts.

URIM was developed using the [MetaDictum](https://github.com/prophetadmin/MetaDictum) framework.

It is designed to retrieve relevant material, resolve that material back to readable authority sources, and present answers that remain tied to inspectable evidence rather than treating model output as authority by itself.

This repository is the canonical product repository for the current URIM runtime and implementation surface.

## What URIM Does

URIM is intended to:

- retrieve relevant material from the local knowledge layer
- resolve retrieval results back to readable authority artifacts
- support grounded question-answering against governed local data
- expose a runnable local application surface for exercising that flow

## Runtime Entry Path

Launch the local app with:

`powershell -ExecutionPolicy Bypass -File 02_EXODUS/runtime/start_local_app.ps1`

The local host serves the application at:

`http://127.0.0.1:8787/app_shell.html`

Primary runtime entry files:

- `02_EXODUS/runtime/start_local_app.ps1`
- `02_EXODUS/runtime/host/local_app_host.js`
- `02_EXODUS/runtime/surface/app_shell.html`
- `02_EXODUS/runtime/surface/chat_app.html`

## Repository Structure

- `01_GENESIS/` holds bootstrap-source and derived planning inputs
- `02_EXODUS/` holds runtime code, tests, and mutable implementation artifacts
- `03_LEVITICUS/` holds governance, execution state, roadmap, and canonical receipts
- `04_DEUTERONOMY/` holds approved canon and durable summaries when promoted
- `05_NUMBERS/` holds forensic logs and decision-trail artifacts

## Active Authority At HEAD

The single canonical active roadmap at HEAD is:

`03_LEVITICUS/PROJECT_ROADMAP_v1.md`

`03_LEVITICUS/STATE_SUMMARY.md` remains aligned to that roadmap.

Canonical phase receipts under `03_LEVITICUS/Execution/` remain the active execution evidence for completed phases.

Project governance is defined by:

- `AGENTS.md`
- `03_LEVITICUS/Contracts/project_charter.md`

## Historical Context

Repository lineage and historical provenance are documented separately in:

`REPOSITORY_HISTORY.md`
