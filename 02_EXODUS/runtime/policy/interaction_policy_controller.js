"use strict";

function buildInteractionPolicy(input = {}) {
  const model = input.model || {};
  const configuredModel = model.configured_model || null;
  const requestedModel = model.requested_model || null;
  const lexiconTerms = Array.isArray(input?.lexicon?.narrowing_terms)
    ? input.lexicon.narrowing_terms
    : [];

  return {
    no_model_switching: {
      enforced: true,
      configured_model: configuredModel,
      requested_model: requestedModel
    },
    lexicon_advisory: {
      mode: "advisory",
      narrowing_terms: lexiconTerms
    }
  };
}

module.exports = {
  buildInteractionPolicy
};

