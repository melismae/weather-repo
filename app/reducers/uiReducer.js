import {
    FETCH_FAIL
} from '../constants/index';

const initialState = {
    error: false
};

export default function uiReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_FAIL:
            return Object.assign({}, state, {
                error: true
            });
        default:
            return state;
    }
}
