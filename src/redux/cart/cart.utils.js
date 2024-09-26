/**
 * Adds an item to the shopping cart or increments its quantity if it already exists.
 * @param {Array} cartItems - The current array of items in the cart.
 * @param {Object} cartItemToAdd - The item to be added to the cart.
 * @returns {Array} A new array of cart items with the added or updated item.
 */
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    /**
     * Checks if a cart item's ID matches the ID of the item to be added
     * @param {Object} cartItem - The existing cart item to compare
     * @returns {boolean} True if the IDs match, false otherwise
     /**
      * Updates the quantity of an existing item in the cart or returns the original cart if the item is not found
      * @param {Array} cartItems - The current array of cart items
      * @param {Object} cartItemToAdd - The cart item to be added or updated
      * @returns {Array} A new array of cart items with the updated quantity for the matching item
      */
     */
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === cartItemToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

/**
 * Removes an item from the cart or decreases its quantity
 * @param {Array} cartItems - The current array of cart items
 * @param {Object} cartItemToRemove - The cart item to be removed or have its quantity decreased
 * @returns {Array} A new array of cart items with the specified item removed or its quantity decreased
 */
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    ```
    /**
     * Decrements the quantity of a specific cart item by 1 or removes it if quantity becomes 0.
     * @param {Array} cartItems - The current array of cart items.
     * @param {Object} cartItemToRemove - The cart item object to be decremented.
     * @returns {Array} A new array of cart items with the specified item's quantity decremented.
     */
    ```
    /**
     * Checks if a cart item's ID matches the ID of the item to be removed
     * @param {Object} cartItem - The cart item to compare
     * @returns {boolean} True if the IDs match, false otherwise
     /**
      * Removes a specific item from the cart
      * @param {Array} cartItems - The current array of items in the cart
      * @param {Object} cartItemToRemove - The item object to be removed from the cart
      * @returns {Array} A new array of cart items with the specified item removed
      */
     */    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
