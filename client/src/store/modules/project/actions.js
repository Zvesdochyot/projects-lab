import * as actions from './types/actions';
import * as mutations from './types/mutations';
import projectService from "../../../services/project/projectService";


export default {
    [actions.FETCH_ALL_PROJECTS]: async ({ commit }) => {
        const response = await projectService.getAllProjects();
        console.log(response);
        commit(mutations.SET_ALL_PROJECTS, response);
    },
    [actions.CHANGE_PROJECT_POSITION]: async ({ commit }, projectData) => {
        commit(mutations.CHANGE_PROJECT_POSITION, projectData);
    }
}