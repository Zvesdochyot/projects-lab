import * as actions from './types/actions';
import * as mutations from './types/mutations';
import authService from "../../../services/authService";
import userService from "../../../services/userService";

export default {
    [actions.SIGN_IN]: async ({ commit }, signInData) => {
        await authService.signIn(signInData );
        const userResponse = await userService.fetchLoggedUser();
        commit(mutations.SET_LOGGED_USER, userResponse);
    },
    [actions.SIGN_UP]: async (context, signUpData) => {
        await authService.signUp(signUpData);
    },
    [actions.SIGN_OUT]: async ({ commit }) => {
        await authService.signOut();
        commit(mutations.SIGN_OUT);
    }
}