import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { featureModule1Reducer } from "./featureModule1/reducers";

const rootReducer = combineReducers({
    featureModule1: featureModule1Reducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunkMiddleware]; // adding middle ware
    const middleWareEnhancer = applyMiddleware(...middlewares);
    const store = createStore( // creating store 
        rootReducer,
        composeWithDevTools(middleWareEnhancer) // adding sev tools
    );
    return store;
}