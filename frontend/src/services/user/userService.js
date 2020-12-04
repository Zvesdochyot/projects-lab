import requestService from "./requestService";

const API_PREFIX = '/users';

export default {
    async fetchLoggedUser() {
        return await requestService.get(API_PREFIX + '/me');
    }
}