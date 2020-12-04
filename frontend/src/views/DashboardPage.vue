<template>
    <MainLayout>
        <Dashboard />
    </MainLayout>
</template>

<script>
import Dashboard from "../components/dashboard/Dashboard";
import MainLayout from "../components/common/MainLayout";
export default {
    name: "DashboardPage",
    components: {
        Dashboard,
        MainLayout
    }
}
</script>

<style scoped>

</style>