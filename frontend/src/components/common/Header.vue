<template>
    <VAppBar
        color="#DB2763"
        dense
        dark
    >
        <VSpacer />

        <VToolbarTitle>ProjectsLab</VToolbarTitle>

        <VSpacer />

        <VMenu>
            <template v-slot:activator="{ on, attrs }">
                <VBtn
                        :ripple="false"
                        :hover="false"
                        class="user-menu__button"
                        text
                        v-bind="attrs"
                        v-on="on"
                >
                    <VIcon>mdi-menu-down</VIcon>
                </VBtn>
            </template>
            <VList>
                <VListItem>
                    <VListItemTitle>Profile</VListItemTitle>
                </VListItem>
                <VDivider />
                <VListItem @click="onLogOut">
                    <VListItemTitle>
                        Logout<VIcon right>mdi-logout</VIcon>
                    </VListItemTitle>
                </VListItem>
            </VList>
        </VMenu>
    </VAppBar>
</template>

<script>
import { mapActions } from 'vuex';
import * as actions from "../../store/modules/auth/types/actions";
export default {
    name: "Header",
    methods: {
        ...mapActions('auth', {
            signOut: actions.SIGN_OUT
        }),
        async onLogOut() {
            await this.signOut();
            this.$router.push({ name: 'main' });
        }
    }
}
</script>

<style scoped>

</style>