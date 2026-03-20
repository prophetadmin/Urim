"use strict";

const {
  FOUNDATION_ADAPTER_ID,
  createFoundationAdapter
} = require("./urim_foundation_adapter");

function createFoundationRegistry(options = {}) {
  const registry = new Map();
  const adapter = createFoundationAdapter(options);
  registry.set(FOUNDATION_ADAPTER_ID, adapter);
  return registry;
}

function getFoundationAdapter(registry) {
  if (!(registry instanceof Map)) {
    throw new Error("Foundation registry must be a Map.");
  }

  const adapter = registry.get(FOUNDATION_ADAPTER_ID);
  if (!adapter) {
    throw new Error(`Missing required adapter: ${FOUNDATION_ADAPTER_ID}`);
  }

  return adapter;
}

module.exports = {
  createFoundationRegistry,
  getFoundationAdapter
};

