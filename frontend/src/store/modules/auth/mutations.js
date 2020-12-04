import * as mutations from './types/mutations';

export default {
    [mutations.SIGN_OUT]: state => {
        state.user = null;
    },
    [mutations.SET_LOGGED_USER]: (state, user) => {
        state.user = user;
    }
}