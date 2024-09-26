import cartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

/**
 * Reduces the cart state based on dispatched actions.
 * @param {Object} state - The current state of the cart (default: INITIAL_STATE).
 * @param {Object} action - The action object containing type and payload.
 * @returns {Object} The new state of the cart after applying the action.
 */
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload), //[...state.cartItems, action.payload]
      };
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          /**
           * Filters out a cart item based on its ID
           * @param {Object} cartItem - The cart item to be evaluated
           * @returns {boolean} True if the cart item's ID does not match the payload ID, false otherwise
           */
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
