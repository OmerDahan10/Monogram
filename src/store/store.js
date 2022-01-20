import { createStore } from "redux";
import { applyMiddleware, combineReducers, compose } from "redux";
import {default as thunk } from "redux-thunk";

import { postReducer } from "./post.reducer.js";

const rootReducer = combineReducers({
    postModule: postReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

