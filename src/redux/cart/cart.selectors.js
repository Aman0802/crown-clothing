import { createSelector } from "reselect";

/**
 * Selects the cart state from the Redux store
 * @param {Object} state - The entire Redux state object
 * @returns {Object} The cart state
 /**
  * Extracts the cartItems from a cart object.
  * @param {Object} cart - The cart object containing cartItems.
  * @returns {Array} An array of cart items from the given cart object.
  */
 */
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  /**
   * Checks if the cart is hidden
   * @param {Object} cart - The cart object to evaluate
   * @returns {boolean} True if the cart is hidden, false otherwise
   */
  /**
   * Calculates the total quantity of items in the cart
   /**
    * Calculates the total quantity by summing up the quantities of individual items.
    * @param {number} accumulatedQuantity - The running total of quantities.
    * @param {Object} item - An object representing an item with a quantity property.
    * @returns {number} The updated total quantity after adding the current item's quantity.
    /**
     * Selects the total cost of items in the cart
     * @param {Array} cartItems - An array of cart items
     * @returns {number} The total cost of all items in the cart
     */
    */
   * @param {Array} cartItems - An array of cart item objects
   /**
    * Calculates the total cost of items in a shopping cart
    * @param {number} accumulatedCost - The running total cost of items in the cart
    * @param {Object} cartItem - An object representing an item in the cart
    * @param {number} cartItem.quantity - The quantity of the item
    * @param {number} cartItem.price - The price of the item
    * @returns {number} The updated total cost after adding the current cart item
    */
   * @returns {number} The total quantity of all items in the cart
   */
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, item) => accumulatedQuantity + item.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedCost, cartItem) =>
      accumulatedCost + cartItem.quantity * cartItem.price,
    0
  )
);
