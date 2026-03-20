"use strict";

const DEFAULT_SYSTEM_CONFIG = Object.freeze({
  boxed_storage_root: "D:\\boxed"
});

function createSystemConfigState(initial = {}) {
  return {
    boxed_storage_root:
      initial.boxed_storage_root || DEFAULT_SYSTEM_CONFIG.boxed_storage_root
  };
}

function applySystemConfigUpdate(state, patch = {}) {
  const next = {
    ...state,
    ...patch
  };
  return createSystemConfigState(next);
}

module.exports = {
  DEFAULT_SYSTEM_CONFIG,
  createSystemConfigState,
  applySystemConfigUpdate
};
