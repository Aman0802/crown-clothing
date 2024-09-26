import { takeLatest, put, all, call } from 'redux-saga/effects';

import userActionTypes from './user.types';

import { googleSignInSuccess, googleSignInFailure } from './user.actions';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';

/**
 * Initiates Google sign-in process and creates/retrieves user profile
 * @param {void} - This function doesn't take any parameters
 * @returns {Generator} Yields effects for Redux Saga and doesn't return a direct value
 */export function* signInWithGoogle() {
    try {
        // const userRef = yield auth.signInWithPopUp(googleProvider);
        // console.log(userRef);
        const {user} = yield auth.signInWithPopup(googleProvider)
        const userRef =  yield call(createUserProfileDocument,user);
        const userSnapshot = yield userRef.get();
        yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))

    } catch(error) {
        /**
         * Generator function that listens for the Google Sign-In start action
         * @yields {Object} Takes the latest GOOGLE_SIGN_IN_START action and calls signInWithGoogle
         * @returns {Iterator} An iterator object for the generator function
         */
        yield put(googleSignInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

/**
 * Generator function that combines and yields all user-related sagas
 * @yields {EffectDescriptor} An array of effects to be run by the Redux Saga middleware
 */
export function* userSagas() {
    yield all([call(onGoogleSignInStart)])
}

