<template>
    <SignIn />
</template>

<script>
import SignIn from "../components/auth/SignIn";
import titleMixin from "../mixins/titleMixin";

export default {
    name: "SignInPage",
    mixins: [titleMixin],
    components: {
        SignIn
    }
}
</script>

<style scoped>

</style>