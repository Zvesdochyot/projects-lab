import axios from 'axios';
import authService from './auth/authService';
import router from '../router';

// const API_ENDPOINT = process.env.VUE_APP_API_URb;
const API_ENDPOINT = 'http://localhost:3333/api/v1';

axios.interceptors.request.use(
    config => {
        if (authService.hasToken()) {
            config.headers[
                'Authorization'
                ] = `Bearer ${authService.getToken()}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

axios.interceptors.response.use(
    success => Promise.resolve(success),
    error => {
        if (error?.response?.data?.code === 'unauthorized') {
            authService.removeToken();
            router.push({ name: 'sign-in' });
        }
        return Promise.reject(error?.response?.data?.message);
    }
);

export default {
    get(url, params = {}, headers = {}) {
        return axios.get(
            API_ENDPOINT + url,
            {
                params,
                headers
            }
        )
    },
    post(url, body = {}, config = {}) {
        return axios.post(
            API_ENDPOINT + url,
            body,
            config
        );
    },
    delete(url, config = {}) {
        return axios.delete(API_ENDPOINT + url, config);
    },
    put(url, body = {}, config = {}) {
        return axios.put(
            API_ENDPOINT + url,
            body,
            config
        );
    }
}