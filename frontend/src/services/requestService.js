import axios from 'axios';
import authService from "./auth/authService";

const API_ENDPOINT = process.env.VUE_APP_API_URL;

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