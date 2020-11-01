import {combineReducers, createStore} from "redux";
import {UsersReducer} from "./users-reducer";

const rootReducer = combineReducers({
    users: UsersReducer
});

// @ts-ignore
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store

//Types

export type RootStateType = ReturnType<typeof rootReducer>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never