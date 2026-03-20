"use strict";

const DEFAULT_ROUTE = "chat";

function createNavigationState(initialRoute = DEFAULT_ROUTE) {
  return {
    active_route: String(initialRoute || DEFAULT_ROUTE)
  };
}

function setActiveRoute(state, route) {
  return {
    ...state,
    active_route: String(route || DEFAULT_ROUTE)
  };
}

function getActiveRoute(state) {
  return String(state?.active_route || DEFAULT_ROUTE);
}

module.exports = {
  DEFAULT_ROUTE,
  createNavigationState,
  setActiveRoute,
  getActiveRoute
};
