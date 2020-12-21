<template>
    <RouterView />
</template>

<script>
import authService from '../../services/auth/authService';
import store from '../../store';
import * as actions from '../../store/modules/auth/types/actions';
export default {
    name: "UserDataProvider",
    async beforeRouteEnter(to, from, next) {
        if (authService.hasToken() && !store.state.auth.user) {
            await store.dispatch('auth/' + actions.FETCH_LOGGED_USER);
        }
        next();
    }
}
</script>

<style scoped>

</style>