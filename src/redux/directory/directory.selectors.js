import { createSelector } from "reselect";

/**
 * Selects the directory from the state object.
 * @param {Object} state - The state object containing the directory information.
 * @returns {*} The directory value from the state object.
 */
const selectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  /**
   * Extracts sections from a directory object.
   * @param {Object} directory - The directory object containing sections.
   * @returns {Array} An array of sections from the directory.
   */
  (directory) => directory.sections
);
