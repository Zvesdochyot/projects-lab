import * as mutations from './types/mutations';
import { userMapper } from '../../../services/normalizer/Normalizer';

export default {
    [mutations.SIGN_OUT]: state => {
        state.user = null;
    },
    [mutations.SET_LOGGED_USER]: (state, user) => {
        state.user = userMapper(user);
    }
}