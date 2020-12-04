import requestService from "./requestService";

const API_PREFIX = '/auth';

export default {
    setToken() {},
    removeToken() {},
    hasToken() {},
    async signIn(signInData) {
        const response = await requestService.post(API_PREFIX + '/login', signInData);
        console.log(response);
        return response;
    },
    async signUp(signUpData) {
        const response = await requestService.post(API_PREFIX + '/register', signUpData);
        return response?.data;
    },
    async signOut() {
        return await requestService.post(API_PREFIX + '/logout');
    },
}