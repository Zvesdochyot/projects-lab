<template>
    <div>
        <VListItem>
            <VListItemContent :class="{ 'active' : $route.name === 'dashboard' }">
                <VListItemTitle @click="onDashboard">
                    <VIcon left color="black">mdi-view-dashboard</VIcon>My Dashboard
                </VListItemTitle>
            </VListItemContent>
        </VListItem>

        <VListItem>
            <VListItemContent :class="{ 'active' : $route.name === 'test' }">
                <VListItemTitle>
                    <VIcon left color="black">mdi-home</VIcon>Home
                </VListItemTitle>
            </VListItemContent>
        </VListItem>

        <VListItem>
            <VListItemContent :class="{ 'active' : $route.name === 'test' }">
                <VListItemTitle>
                    <VIcon left color="black">mdi-star</VIcon>Starred tasks
                </VListItemTitle>
            </VListItemContent>
        </VListItem>
    </div>
</template>

<script>
    export default {
        name: "LeftMenu",
        methods: {
            onDashboard() {
                this.$router.push({ name: 'dashboard' });
            }
        }
    }
</script>

<style lang="scss" scoped>
.v-list-item {
    cursor: pointer;
    padding: 0;
    font-weight: bold;
    &__content {
        font-weight: bold;
        padding: 5px;
        transition: 0.2s;
        border-radius: 4px;
        &.active {
            background-color: rgba(219, 39, 99, 0.15);
            color: #DB2763;
            .v-icon {
                color: #DB2763 !important;
            }
        }
    }
    &:hover &__content{
        background-color: rgba(219, 39, 99, 0.15);
        color: #DB2763;
    }
    &:hover .v-icon{
        color: #DB2763 !important;
    }
}
</style>