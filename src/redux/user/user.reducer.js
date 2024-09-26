import userActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

/**
 * Reducer function for managing user state in a Redux store.
 * @param {Object} state - The current state of the user slice. Defaults to INITIAL_STATE if not provided.
 * @param {Object} action - The action object containing type and payload.
 * @returns {Object} The new state after applying the action.
 */
const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case userActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        case userActionTypes.EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case userActionTypes.GOOGLE_SIGN_IN_FAILURE:
        case userActionTypes.EMAIL_SIGN_IN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;