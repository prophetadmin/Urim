"use strict";

let createSystemConfigState = null;
let applySystemConfigUpdate = null;

if (typeof require === "function") {
  ({
    createSystemConfigState,
    applySystemConfigUpdate
  } = require("./system_config_state"));
}

function attachSystemConfigPanel(options = {}) {
  if (typeof document === "undefined") {
    return { attached: false };
  }

  const input = document.getElementById("boxed-root");
  const applyButton = document.getElementById("apply-config");
  const status = document.getElementById("config-status");
  if (!input || !applyButton || !status) {
    return { attached: false };
  }

  const makeState =
    options.createSystemConfigState || createSystemConfigState || ((x) => x);
  const applyPatch =
    options.applySystemConfigUpdate || applySystemConfigUpdate || ((s, p) => ({ ...s, ...p }));

  let state = makeState(options.initialState || {});
  input.value = state.boxed_storage_root || "D:\\boxed";

  applyButton.addEventListener("click", () => {
    state = applyPatch(state, { boxed_storage_root: input.value.trim() });
    status.textContent = `Applied boxed root: ${state.boxed_storage_root}`;
  });

  return { attached: true };
}

if (typeof window !== "undefined") {
  window.attachSystemConfigPanel = attachSystemConfigPanel;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => attachSystemConfigPanel());
  } else {
    attachSystemConfigPanel();
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    attachSystemConfigPanel
  };
}
