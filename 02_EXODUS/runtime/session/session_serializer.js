"use strict";

function serializeSessionSnapshot(snapshot = {}) {
  return JSON.stringify(snapshot, null, 2);
}

function deserializeSessionSnapshot(serialized) {
  if (typeof serialized !== "string" || !serialized.trim()) {
    return {};
  }
  return JSON.parse(serialized);
}

module.exports = {
  serializeSessionSnapshot,
  deserializeSessionSnapshot
};
