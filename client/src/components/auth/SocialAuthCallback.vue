<template>
    <div>
        <p><b>Please, wait while we are logging you!</b></p>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import * as actions from '../../store/modules/auth/types/actions';
    import authService from "../../services/auth/authService";
    export default {
        name: "SocialAuthCallback",
        async mounted() {
            try {
                await authService.setToken(this.$route.query.token);
                await this.fetchLoggedUser();
                this.$router.push({ name: 'dashboard' });
            } catch (error) {
                console.log(error);
            }
        },
        methods: {
            ...mapActions('auth', {
                fetchLoggedUser: actions.FETCH_LOGGED_USER
            })
        }
    }
</script>

<style scoped>

</style>