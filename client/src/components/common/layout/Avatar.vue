<template>
    <div class="avatar-circle d-flex align-center justify-center"
         :style="{ width: avatarSize + 'px', height: avatarSize + 'px' }">
        {{ firstLetters }}
    </div>
</template>

<script>
export default {
    name: "Avatar",
    props: {
        size: {
            required: false
        },
        user: {
            required: false
        }
    },
    computed: {
        firstLetters() {
            const nameParts = this?.user?.name?.split(' ');
            let letters = '';
            nameParts?.forEach(word => {
                letters += word.charAt(0)
            });
            return letters;
        },
        avatarSize() {
            return this.size ? this.size : 32;
        }
    }
}
</script>

<style scoped>
.avatar-circle {
    font-weight: bold;
    background: orange;
    color: #fff;
    border-radius: 50%;
    user-select: none;
    text-transform: uppercase;
}
</style>