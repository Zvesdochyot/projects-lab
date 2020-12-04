<template>
    <div>
        <Header />
        <VMain>
            <div class="content">
                <slot></slot>
            </div>
        </VMain>
    </div>
</template>

<script>
import Header from "./Header";
export default {
    name: "MainLayout",
    components: {
        Header
    }
}
</script>

<style scoped>

</style>