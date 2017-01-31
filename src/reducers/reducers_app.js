import {ACTION} from '../actions/index';

const INITIAL_STATE = {
    test: null
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTION:
            return {...state, test: action.payload}
        default:
            return state;
    }
}
