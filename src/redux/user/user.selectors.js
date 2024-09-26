import { createSelector } from "reselect";

/**
 * Selects the user object from the Redux state
 * @param {Object} state - The current Redux state
 * @returns {Object} The user object from the state
 /**
  * Retrieves the current user from a given user object.
  * @param {Object} user - The user object containing information about the current user.
  * @returns {Object} The current user object.
  */
 */
const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
