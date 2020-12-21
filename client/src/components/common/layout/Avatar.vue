<template>
    <div class="avatar-circle d-flex align-center justify-center">
        {{ firstLetters }}
    </div>
</template>

<script>
import userMixin from "../../../mixins/userMixin";
export default {
    name: "Avatar",
    mixins: [userMixin],
    computed: {
        firstLetters() {
            const nameParts = this?.user?.name?.split(' ');
            let letters = '';
            nameParts?.forEach(word => {
                letters += word.charAt(0)
            });
            return letters;
        }
    }
}
</script>

<style scoped>
.avatar-circle {
    width: 32px;
    height: 32px;
    font-weight: bold;
    background: orange;
    color: #fff;
    border-radius: 50%;
    user-select: none;
    text-transform: uppercase;
}
</style>