<template>
    <VMenu offset-y>
        <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs"
                  v-on="on">
                <Avatar />
            </span>
        </template>
        <VCard>
            <VList>
                <VListItem>
                    <VListItemAvatar>
                        <Avatar />
                    </VListItemAvatar>
                    <VListItemContent>
                        <VListItemTitle>Dmitriy Uvin</VListItemTitle>
                        <VListItemSubtitle>@dmitriyuvin</VListItemSubtitle>
                    </VListItemContent>
                </VListItem>

                <VDivider />

                <VListItem>
                    <VListItemTitle>
                        <VIcon left>mdi-account</VIcon>Profile
                    </VListItemTitle>
                </VListItem>

                <VDivider />

                <VListItem @click="onLogOut">
                    <VListItemTitle>
                        <VIcon left>mdi-logout</VIcon>Logout
                    </VListItemTitle>
                </VListItem>
            </VList>
        </VCard>
    </VMenu>
</template>

<script>
import { mapActions } from 'vuex';
import * as actions from "../../../store/modules/auth/types/actions";
import Avatar from "./Avatar";

export default {
    name: "UserDropdown",
    components: {
        Avatar
    },
    methods: {
        ...mapActions('auth', {
            signOut: actions.SIGN_OUT
        }),
        async onLogOut() {
            await this.signOut();
            this.$router.push({ name: 'main' });
        },
    }
}
</script>

<style scoped>

</style>