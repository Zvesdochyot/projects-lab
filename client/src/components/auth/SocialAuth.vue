<template>
    <div class="text-center">
        <VDivider class="my-6" />
        <VRow class="justify-center">
            <img :src="require('../../assets/images/google-logo.png')"
                class="mr-3 social-button"
                 alt="Google Logo"
                 @click="socialLogin('google')"/>

            <img :src="require('../../assets/images/facebook-logo.png')"
                class="mr-3 social-button"
                 alt="Facebook Logo"
                 @click="socialLogin('facebook')"/>

            <img :src="require('../../assets/images/github-logo.png')"
                 class="mr-3 social-button"
                 alt="GitHub Logo"
                @click="socialLogin('github')"/>
        </VRow>
    </div>
</template>

<script>
export default {
    name: "SocialAccountsLogin",
    methods: {
        socialLogin(provider) {
            window.location.href = process.env.VUE_APP_API_URL + '/social/auth/' + provider;
        }
    }
}
</script>

<style scoped>
.social-button {
    cursor: pointer;
}
</style>