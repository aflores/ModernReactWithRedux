import { CHECK_FRN } from '../actions'

export default function (state = {}, action) {
    switch (action.type) {

        case CHECK_FRN:
        console.log('in reducer action is:',action);
            return action.payload.data;

        default:
            return state;
    }
}