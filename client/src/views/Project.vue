<template>
    <MainLayout>
        <VContainer>
            <VRow>
                <VCol :cols="clicked ? 9 : 12">
                    <VBtn @click="clicked = !clicked">Редагувати</VBtn>
                </VCol>
                <VCol cols="3" v-if="clicked">
                    <VRow>
                        <VCol cols="12">
                            <VTextField
                                label="Назва проекту"
                                v-model="name"
                                outlined
                            />
                        </VCol>
                        <VCol cols="12">
                            <VTextarea label="Опис проекту" v-model="description" outlined no-resize>
                            </VTextarea>
                        </VCol>
                    </VRow>
                    <VRow class="align-center justify-center">
                        <VCol cols="2">
                            <VBtn color="orange" dark d-block @click="onUpdateProject" class="mb-5">Оновити</VBtn>
                            <v-dialog
                                v-model="dialog"
                                persistent
                                max-width="290"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <VBtn v-bind="attrs"
                                          v-on="on"
                                          color="red"
                                          dark d-block
                                    >Видалити
                                    </VBtn>
                                </template>
                                <v-card>
                                    <v-card-title class="headline">
                                        Use Google's location service?
                                    </v-card-title>
                                    <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <VBtn
                                            color="green darken-1"
                                            text
                                            @click="dialog = false; confirmed = false;"
                                        >
                                            Disagree
                                        </VBtn>
                                        <VBtn
                                            color="green darken-1"
                                            text
                                            @click="onDeleteProject"
                                        >
                                            Agree
                                        </VBtn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </VCol>
                    </VRow>
                </VCol>
            </VRow>
        </VContainer>

    </MainLayout>
</template>

<script>
import projectService from "@/services/project/projectService";
import MainLayout from "@/components/common/layout/MainLayout";

export default {
    name: "Project",
    components: {
        MainLayout
    },
    data: () => ({
        name: '',
        description: '',
        clicked: false,
        confirmed: false,
        dialog: false
    }),
    methods: {
        async onUpdateProject() {
            try {
                await projectService.updateProject(this.$route.params.id, {
                    name: this.name,
                    description: this.description
                });
            } catch (e) {
                console.log(e);
            }
        },
        async onDeleteProject() {
            try {
                await projectService.deleteProjectById(this.$route.params.id);
                this.$router.push('/');
                this.dialog = false;
            } catch (e) {
                console.log(e);
            }
        }
    },
    async mounted() {
        try {
            const response = await projectService.getProjectById(this.$route.params.id);
            this.name = response.name;
            this.description = response.description;
        } catch (e) {
            console.log(e);
        }
    }
}
</script>

<style scoped>
</style>
