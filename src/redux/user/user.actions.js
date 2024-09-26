import userActionTypes from './user.types';

/**
 * Action creator for setting the current user
 * @param {Object} user - The user object to be set as the current user
 * @returns {Object} An action object with type SET_CURRENT_USER and the user as payload
 */
export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
})

/**
 * Action creator that initiates the Google sign-in process.
 * @returns {Object} An action object with the type GOOGLE_SIGN_IN_START.
 */
export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START
})

/**
 * Action creator for successful Google sign-in
 * @param {Object} user - The user object returned from Google sign-in
 * @returns {Object} An action object with type GOOGLE_SIGN_IN_SUCCESS and user payload
 */
export const googleSignInSuccess = (user) => ({
    ```
    /**
     * Creates an action object to initiate email sign-in process
     * @param {Object} emailAndPassword - An object containing email and password for sign-in
     * @returns {Object} An action object with type EMAIL_SIGN_IN_START and payload containing email and password
     */
    ```
    type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
})

/**
 * Action creator for Google sign-in failure
 * @param {Error} error - The error object representing the Google sign-in failure
 * @returns {Object} An action object with type GOOGLE_SIGN_IN_FAILURE and the error as payload
 */
export const googleSignInFailure = error => ({
    type: userActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: error
})

export const emailSignInStart = (emailAndPassword) => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

/**
 * Creates an action object for successful email sign-in
 * @param {Object} user - The user object containing sign-in information
 * @returns {Object} An action object with type EMAIL_SIGN_IN_SUCCESS and user payload
 */
/**
 * Action creator for email sign-in failure
 * @param {Error} error - The error object received during email sign-in failure
 * @returns {Object} An action object with type EMAIL_SIGN_IN_FAILURE and the error as payload
 */
export const emailSignInSuccess = (user) => ({
    type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user
})

export const emailSignInFailure = error => ({
    type: userActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error
})