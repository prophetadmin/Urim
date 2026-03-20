"use strict";

const SUPPORT_STATES = Object.freeze({
  INSUFFICIENT: "insufficient",
  WEAK: "weak",
  PARTIAL: "partial",
  STRONG: "strong"
});

function classifySupportStateByAuthorityCount(authorityCount) {
  const count = Number(authorityCount) || 0;
  if (count >= 4) {
    return SUPPORT_STATES.STRONG;
  }
  if (count >= 2) {
    return SUPPORT_STATES.PARTIAL;
  }
  if (count === 1) {
    return SUPPORT_STATES.WEAK;
  }
  return SUPPORT_STATES.INSUFFICIENT;
}

module.exports = {
  SUPPORT_STATES,
  classifySupportStateByAuthorityCount
};

