<template>
    <VContainer>
        <div class="text-center mt-7">
            <h2>Створити проект</h2>
        </div>
        <VDivider />
        <VRow>
            <VCol md="3">
                <ProjectMockUp :name="name" :color="color" />
            </VCol>
            <VCol md="9">
                <h3 class="mb-3">Оберіть колір...</h3>
                <Colors />
            </VCol>
        </VRow>
        <VRow>
            <VCol md="4">
                <VTextField
                    outlined
                    label="Назва проекту"
                    v-model="name"
                />
            </VCol>
            <VCol md="2">
                <VMenu
                    ref="menuStart"
                    v-model="menuStart"
                    :close-on-content-click="false"
                    :return-value.sync="startDate"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <VTextField
                            v-model="startDate"
                            label="Початок проекту"
                            prepend-inner-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            outlined
                        ></VTextField>
                    </template>
                    <VDatePicker
                        v-model="startDate"
                        no-title
                        scrollable
                    >
                        <VSpacer />
                        <VBtn
                            text
                            color="primary"
                            @click="menuStart = false"
                        >
                            Скасувати
                        </VBtn>
                        <VBtn
                            text
                            color="primary"
                            @click="$refs.menuStart.save(startDate)"
                        >
                            Так
                        </VBtn>
                    </VDatePicker>
                </VMenu>
            </VCol>
            <VCol md="2">
                <VMenu
                    ref="menuEnd"
                    v-model="menuEnd"
                    :close-on-content-click="false"
                    :return-value.sync="endDate"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <VTextField
                            v-model="endDate"
                            label="Кінець проекту"
                            prepend-inner-icon="mdi-calendar"
                            readonly
                            outlined
                            v-bind="attrs"
                            v-on="on"
                        ></VTextField>
                    </template>
                    <VDatePicker
                        v-model="endDate"
                        no-title
                        scrollable
                    >
                        <VSpacer />
                        <VBtn
                            text
                            color="primary"
                            @click="menuEnd = false"
                        >
                            Скасувати
                        </VBtn>
                        <VBtn
                            text
                            color="primary"
                            @click="$refs.menuEnd.save(endDate)"
                        >
                            Так
                        </VBtn>
                    </VDatePicker>
                </VMenu>
            </VCol>
        </VRow>
        <VRow>
            <VCol cols="8">
                <VTextarea
                    rows="5"
                    outlined
                    label="Опис проекту"
                    no-resize
                    v-model="description"
                ></VTextarea>
            </VCol>
        </VRow>
        <VRow class="align-center justify-center">
            <VCol cols="2">
                <VBtn
                    color="green"
                    block
                    depressed
                    dark
                    @click="onCreateProject"
                >
                    Створити</VBtn>
            </VCol>
        </VRow>
    </VContainer>
</template>

<script>
import ProjectMockUp from "@/components/projects/ProjectMockUp";
import Colors from "@/components/colors/Colors";
import EventBus from "@/events/event-bus";
import projectService from "@/services/project/projectService";

export default {
    name: "CreateProjectComponent",
    components: {
        ProjectMockUp,
        Colors
    },
    data: () => ({
        name: '',
        description: '',
        color: '',
        startDate: '',
        endDate: '',
        menuStart: false,
        menuEnd: false
    }),
    methods: {
        updateProjectColor(newColor) {
            this.color = newColor;
        },
        async onCreateProject() {
            try {
                await projectService.createProject({
                    name: this.name,
                    description: this.description
                });
                this.name = this.description = '';
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        EventBus.$on('choose-project-color', this.updateProjectColor);
    },
    beforeDestroy() {
        EventBus.$on('choose-project-color', this.updateProjectColor);
    }
}
</script>

<style scoped>

</style>