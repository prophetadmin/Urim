"use strict";

const { requestChatCompletion } = require("../integrations/chat_api_client");
const { createEmbedding } = require("../integrations/embedding_client");
const { searchNearestNeighbors } = require("../integrations/qdrant_client");

const FOUNDATION_ADAPTER_ID = "urim_foundation_adapter";

function createFoundationAdapter(overrides = {}) {
  return {
    id: FOUNDATION_ADAPTER_ID,
    chatClient: overrides.chatClient || requestChatCompletion,
    embeddingClient: overrides.embeddingClient || createEmbedding,
    vectorSearchClient: overrides.vectorSearchClient || searchNearestNeighbors
  };
}

module.exports = {
  FOUNDATION_ADAPTER_ID,
  createFoundationAdapter
};

