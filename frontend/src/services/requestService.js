import axios from 'axios';

const API_ENDPOINT = process.env.VUE_APP_API_URL;

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