import requestService from "../requestService";

const API_PREFIX = '/auth';

export default {
    setToken(token) {
        localStorage.setItem('auth_access_token', token);
    },
    removeToken() {
        localStorage.removeItem('auth_access_token');
    },
    hasToken() {
        return !!localStorage.getItem('auth_access_token');
    },
    getToken() {
        return localStorage.getItem('auth_access_token');
    },
    async signIn(signInData) {
        const response = await requestService.post(API_PREFIX + '/login', signInData);
        this.setToken(response?.data?.accessToken);
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