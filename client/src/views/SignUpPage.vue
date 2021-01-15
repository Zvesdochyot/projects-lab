<template>
    <SignUp />
</template>

<script>
import SignUp from "../components/auth/SignUp";
import titleMixin from "../mixins/titleMixin";

export default {
    name: "SignUpPage",
    mixins: [titleMixin],
    components: {
        SignUp
    }
}
</script>

<style scoped>

</style>