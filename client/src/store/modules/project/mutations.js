import * as mutations from './types/mutations';
import { projectMapper } from '../../../services/normalizer/Normalizer';

export default {
    [mutations.SET_ALL_PROJECTS]: (state, projects) => {
        state.projects = projects.map(project => projectMapper(project));
    }
}