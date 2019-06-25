import * as Status from './status';
import { FEACH_FAILURE, FEACH_STARTED, FEACH_SUCCESS } from "./actionTypes";
export default (state = {status: Status.LOADING}, action) => {
    switch (action.type) {
        case FEACH_STARTED: {
            return { status: Status.LOADING };
        }
        case FEACH_SUCCESS: {
            return { ...state, status: Status.SUCCESS, ...action.result };
        }
        case FEACH_FAILURE: {
            return { status: Status.FAILURE };
        }
        default: {
            return state;
        }
    }
}
