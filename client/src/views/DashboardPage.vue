<template>
    <MainLayout>
        <Dashboard />
    </MainLayout>
</template>

<script>
import Dashboard from "../components/dashboard/Dashboard";
import MainLayout from "../components/common/layout/MainLayout";
import titleMixin from "../mixins/titleMixin";

export default {
    name: "DashboardPage",
    mixins: [titleMixin],
    components: {
        Dashboard,
        MainLayout
    }
}
</script>

<style scoped>

</style>