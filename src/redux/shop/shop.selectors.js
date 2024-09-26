import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   women: 4,
//   men: 5,
// };

/**
 * Selects the shop state from the Redux store
 * @param {Object} state - The entire Redux state object
 * @returns {Object} The shop state slice
 */
const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  /**
   * Converts an object of collections into an array of collection values.
   * @param {Object|null} collections - An object where keys are collection identifiers and values are the collections themselves.
   * @returns {Array} An array containing all the collection values from the input object, or an empty array if the input is falsy.
   */
  /**
   /**
    * Maps collection objects to an array or returns an empty array if collections is falsy
    * @param {Object|null|undefined} collections - An object containing collection items as values
    * @returns {Array} An array of collection items or an empty array if collections is falsy
    */
   * Retrieves the collections of a shop
   * @param {Object} shop - The shop object containing collections
   * @returns {Array} An array of collections associated with the shop
   */
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  /**
   * Selects a specific collection from the state based on the provided URL parameter
   * @param {string} collectionUrlParam - The URL parameter representing the desired collection
   * @returns {function} A selector function that retrieves the specified collection from the state
   */
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  /**
   * Creates a selector function to retrieve a specific collection based on the provided URL parameter.
   * @param {function} selectCollections - A selector function that returns the collections object from the state.
   * @param {string} collectionUrlParam - The URL parameter used to identify the desired collection.
   * @returns {function} A memoized selector function that returns the specific collection or null if not found.
   */
  /**
   * Selector function that returns the fetching status of a shop
   * @param {Object} shop - The shop object to check
   * @returns {boolean} True if the shop is currently fetching data, false otherwise
   */
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

// !! gives true if data is loaded else false
export const selectisCollectionLoaded = createSelector(
  [selectShop],
  /**
   * Checks if a shop has collections.
   * @param {Object} shop - The shop object to check.
   * @returns {boolean} True if the shop has collections, false otherwise.
   */
  (shop) => !!shop.collections
);
