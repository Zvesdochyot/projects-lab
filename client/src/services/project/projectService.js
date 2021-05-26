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
    },
    async getProjectById(id) {
        const response = await requestService.get('/projects/' + id);
        return response?.data;
    },
    async updateProject(id, payload) {
        return await requestService.put('/projects/' + id, payload);
    },
    async deleteProjectById(id) {
        return await requestService.delete('/projects/' + id);
    }
}
