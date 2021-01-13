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
                    <VCol cols="12" md="3" v-for="project in sortedProjects" :key="project.id">
                        <VCol cols="12" class="project-block pa-0 pl-2 pt-2">
                            <h4 class="pa-0 ma-0">{{ project.name }}</h4>
                        </VCol>
                    </VCol>
                    <VCol cols="12" md="3">
                        <VCol cols="12" class="project-block project-block-add pa-0">
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
export default {
    name: "Dashboard",
    components: {
        LeftMenu,
        draggable,
        InstantMessaging
    },
    data: () => ({

    }),
    methods: {
        ...mapActions('project', {
            fetchAllProjects: actions.FETCH_ALL_PROJECTS
        }),
        onDragProject(value) {
            console.log('DRAG');
            console.log('old index: ' + value.moved.oldIndex);
            console.log('new index: ' + value.moved.newIndex);
            console.log(value.moved.element);
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
            set(value) {
                console.log(value);
            }
        },
        sortedProjects() {
            const projects = this.projects;
            return projects.sort(function (prev, next) {
               if (prev.dashboardOrder > next.dashboardOrder) return 1;
               if (prev.dashboardOrder < next.dashboardOrder) return -1;
               return 0;
            });
        }
    },
    async mounted() {
        await this.fetchAllProjects();
    }
}
</script>

<style lang="scss" scoped>
.project-block {
    background-color: rgb(0, 121, 191);
    height: 100px;
    max-height: 100px;
    cursor: pointer;
    border-radius: 3px;
    h4 {
        color: #fff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}

.project-block-add {
    display: flex;
    align-content: center;
    justify-content: center;
}

</style>