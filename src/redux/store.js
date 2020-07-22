import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

// the middleware that the store is expecting from redux is going to be an array
const middlewares = [logger];

//createStore gets the reducer and the return value of apply middleware
// applyMiddleware(...middlewares): what this will do is it will copy all the values in the array as individual arguments to the function applyMiddleware
const store = createStore(rootReducer, applyMiddleware(...middlewares));

// const persistor = persistStore(store);

// export default { store, persistor };
export default store;
