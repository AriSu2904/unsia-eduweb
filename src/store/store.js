import {combineReducers, createStore} from "redux";
import authReducer from "../reducers/authReducer.js";
import postReducer from "../reducers/postReducer.js";

const rootReducers = combineReducers({
    auth: authReducer,
    posts: postReducer,
});

const store = createStore(rootReducers);

export default store;