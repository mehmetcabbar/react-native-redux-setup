import { Action } from "../actions";
import { ActionType } from "../actions-types";


const initialState = 0

const counterReducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.INCREMENT:
            return state + action.payload;
        case ActionType.DECREMENT:
            return state - action.payload;
        case ActionType.SETUP:
            return 0;
        default:
            return state;
    }
}

export default counterReducer; 