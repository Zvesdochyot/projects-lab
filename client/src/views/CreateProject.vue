<template>
    <MainLayout>
        <CreateProjectComponent />
    </MainLayout>
</template>

<script>
import MainLayout from "../components/common/layout/MainLayout";
import titleMixin from "../mixins/titleMixin";
import CreateProjectComponent from "@/components/projects/CreateProjectComponent";
export default {
    name: "CreateProject",
    components: {
        CreateProjectComponent,
        MainLayout
    },
    mixins: [titleMixin],
}
</script>

<style scoped>

</style>