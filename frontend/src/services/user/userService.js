import requestService from "../requestService";

const API_PREFIX = '/users';

export default {
    async fetchLoggedUser() {
        const response = await requestService.get(API_PREFIX + '/me');
        return response?.data?.user;
    }
}