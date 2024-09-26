import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

//all thunks are is an action creator that returns a FUNCTION that gets the dispatch

/**
 * Creates an action object to indicate the start of fetching collections.
 * @returns {Object} An action object with the type FETCH_COLLECTIONS_START.
 */
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

```
/**
 * Action creator for successful collection fetch
 * @param {Object} collectionsMap - Map of fetched collections
 * @returns {Object} Action object with type and payload
 /**
  * Creates an action object for when fetching collections fails.
  * @param {string} errorMessage - The error message describing the failure.
  * @returns {Object} An action object with type FETCH_COLLECTIONS_FAILURE and the error message as payload.
  */
 /**
  * Asynchronously fetches collections from Firestore and dispatches appropriate actions
  * @param {Function} dispatch - The Redux dispatch function
  * @returns {Function} A function that initiates the fetch process
  */
 */

```export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  /**
   * Fetches collections from Firestore and dispatches actions based on the result
   * @param {Function} dispatch - The Redux dispatch function
   * @returns {Function} A thunk function that performs the asynchronous operation
   */
  return (dispatch) => {
    /**
     * Processes the snapshot data and dispatches a success action
     * @param {Object} snapshot - The snapshot containing collections data
     * @returns {void} Dispatches a fetchCollectionsSuccess action with the processed data
     */
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      /**
       * Catches any errors that occur during the fetch collections process and dispatches a failure action
       * @param {Error} error - The error object caught during the fetch operation
       * @returns {void} Dispatches a fetchCollectionsFailure action with the error message
       */
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
