import { ActionType } from "../actions-types"

interface INCREMENT {
    type: ActionType.INCREMENT,
    payload: number
}

interface DECREMENT {
    type: ActionType.DECREMENT,
    payload: number
}

interface SETUP {
    type: ActionType.SETUP
}

export type Action = INCREMENT | DECREMENT | SETUP