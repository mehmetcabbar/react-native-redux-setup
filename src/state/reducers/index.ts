import { combineReducers } from "redux";
import counterReducer from "./counter";

const reducers = combineReducers({
    counter: counterReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>