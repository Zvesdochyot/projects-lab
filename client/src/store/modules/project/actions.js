import * as actions from './types/actions';
import * as mutations from './types/mutations';
import projectService from "../../../services/project/projectService";

export default {
    [actions.FETCH_ALL_PROJECTS]: async ({ commit }) => {
        const response = await projectService.getAllProjects();
        commit(mutations.SET_ALL_PROJECTS, response);
    },
    [actions.CHANGE_PROJECT_POSITION]: async (context , projectData) => {
        await projectService.changeOrder(projectData);
    }
}