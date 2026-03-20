"use strict";

function resolveDisclosureState(input = {}) {
  return {
    source_disclosure_optional: true,
    disclose_sources: input.source_disclosure_request === true
  };
}

module.exports = {
  resolveDisclosureState
};

