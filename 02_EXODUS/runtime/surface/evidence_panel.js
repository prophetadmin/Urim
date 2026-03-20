"use strict";

function mapSourcesToEvidenceRows(sources = []) {
  const input = Array.isArray(sources) ? sources : [];
  return input.map((source) => ({
    stable_source_identity: source?.stable_source_identity || "unknown",
    tier: source?.tier || "unknown",
    source_id: source?.source_id || "unknown"
  }));
}

function renderEvidencePanel(targetElement, sources = []) {
  if (!targetElement) {
    return 0;
  }

  const rows = mapSourcesToEvidenceRows(sources);
  targetElement.innerHTML = rows
    .map(
      (row) =>
        `<tr><td>${row.stable_source_identity}</td><td>${row.tier}</td><td>${row.source_id}</td></tr>`
    )
    .join("");
  return rows.length;
}

function attachEvidencePanel(options = {}) {
  if (typeof document === "undefined") {
    return { attached: false };
  }

  const body = document.getElementById("evidence-rows");
  if (!body) {
    return { attached: false };
  }

  const initialSources = Array.isArray(options.sources) ? options.sources : [];
  renderEvidencePanel(body, initialSources);
  return { attached: true };
}

if (typeof window !== "undefined") {
  window.attachEvidencePanel = attachEvidencePanel;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => attachEvidencePanel());
  } else {
    attachEvidencePanel();
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    mapSourcesToEvidenceRows,
    renderEvidencePanel,
    attachEvidencePanel
  };
}
