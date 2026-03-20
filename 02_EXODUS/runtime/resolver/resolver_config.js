"use strict";

const DEFAULT_BOXED_STORAGE_ROOT =
  process.env.BOXED_STORAGE_ROOT || "D:\\boxed";

const TIER_DIRECTORY_MAP = Object.freeze({
  TIERL_EB: "TierL_EB",
  TIER2: "Tier2"
});

function getResolverConfig(overrides = {}) {
  return {
    storage_root: overrides.storage_root || DEFAULT_BOXED_STORAGE_ROOT,
    tier_directory_map: {
      ...TIER_DIRECTORY_MAP,
      ...(overrides.tier_directory_map || {})
    }
  };
}

module.exports = {
  DEFAULT_BOXED_STORAGE_ROOT,
  TIER_DIRECTORY_MAP,
  getResolverConfig
};

