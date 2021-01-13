import requestService from "../requestService";

export default {
    async getAllProjects() {
        const response = await requestService.get('/projects');
        return response?.data;
    }
}