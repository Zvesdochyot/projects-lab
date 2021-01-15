<template>
    <Main />
</template>

<script>
import Main from "../components/main/Main";
import titleMixin from "../mixins/titleMixin";

export default {
    name: "MainPage",
    mixins: [titleMixin],
    components: {
        Main
    }
}
</script>

<style scoped>

</style>