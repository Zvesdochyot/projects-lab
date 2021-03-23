import requestService from "../requestService";

export default {
    async getAllProjects() {
        const response = await requestService.get('/projects');
        return response?.data;
    },
    async changeOrder(projectData) {
        const response = await requestService.put('/projects/change-order', projectData);
        return response?.data;
    },
    async createProject(payload) {
        return await requestService.post('/projects', payload);
    }
}