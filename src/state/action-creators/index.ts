import { ActionType } from "../actions-types";
import { Dispatch } from "redux";
import { Action } from "../actions";


export const incrementNumber = (number: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.INCREMENT,
            payload: number
        })
    }
}

export const decrementNumber = (number: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DECREMENT,
            payload: number
        })
    }
}

export const setupState = (number: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SETUP,
        })
    }
}