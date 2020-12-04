<template>
    <div>
        <h1>Main page</h1>
        <RouterLink :to="{ name: 'sign-in' }">Sign In</RouterLink><br />
        <RouterLink :to="{ name: 'sign-up' }">Sign Up</RouterLink><br />
    </div>
</template>

<script>
export default {
    name: "Main"
}
</script>

<style scoped>

</style>