<template>
    <VContainer>
        <VRow>
            <VCol cols="2">
                <LeftMenu />
            </VCol>
            <VCol cols="7">
                <h3>
                    <VIcon color="black">mdi-apps</VIcon>
                    <span class="d-inline-block ml-3">My projects</span>
                </h3>
                <draggable
                        v-model="projects"
                        class="row"
                        :sort="true"
                        @change="onDragProject"
                        @start="drag=true"
                        @end="drag=false"
                >
                    <VCol cols="12" md="3" v-for="project in projects" :key="project.id">
                        <ProjectCard :project="project" />
                    </VCol>
                    <VCol cols="12" md="3">
                        <VCol
                            cols="12"
                            class="project-block project-block-add pa-0"
                            @click="createProject"
                        >
                            <VIcon x-large>mdi-plus</VIcon>
                        </VCol>
                    </VCol>
                </draggable>
            </VCol>
            <VCol cols="3">
                <InstantMessaging />
            </VCol>
        </VRow>
    </VContainer>
</template>

<script>
import LeftMenu from "./LeftMenu";
import draggable from 'vuedraggable';
import InstantMessaging from "../instant-messaging/InstantMessaging";
import { mapActions, mapGetters } from 'vuex';
import * as actions from '../../store/modules/project/types/actions';
import * as getters from '../../store/modules/project/types/getters';
import ProjectCard from "../projects/ProjectCard";
export default {
    name: "Dashboard",
    components: {
        LeftMenu,
        draggable,
        InstantMessaging,
        ProjectCard
    },
    data: () => ({

    }),
    methods: {
        ...mapActions('project', {
            fetchAllProjects: actions.FETCH_ALL_PROJECTS,
            changeProjectsOrder: actions.CHANGE_PROJECT_POSITION
        }),
        createProject() {
            this.$router.push({ name: 'create-project' });
        },
        async onDragProject(value) {
            if (value.moved.oldIndex !== value.moved.newIndex) {
                try {
                    await this.changeProjectsOrder({
                        projectId: value.moved.element.id,
                        newIndex: value.moved.newIndex,
                        oldIndex: value.moved.oldIndex
                    });
                    await this.fetchAllProjects();
                } catch (error) {
                    console.log(error);
                }
            }
        }
    },
    computed: {
        ...mapGetters('project', {
            allProjects: getters.GET_ALL_PROJECTS,
        }),
        projects: {
            get() {
                return this.allProjects;
            },
            set() {}
        }
    },
    async mounted() {
        await this.fetchAllProjects();
    }
}
</script>

<style scoped>
.project-block-add {
    display: flex;
    align-content: center;
    justify-content: center;
    height: 100px;
    max-height: 100px;
    cursor: pointer;
    border-radius: 3px;
    background: blue;
}

</style>