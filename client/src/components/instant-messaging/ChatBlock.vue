<template>
    <div class="chat-block row px-2" :class="{ 'viewed': userData.viewed }"  @click="goToChat">
        <div class="col-sm-2 ma-0 d-flex justify-center flex-column">
            <Avatar :user="userData" />
        </div>
        <div class="col-sm-10 ma-0">
            <span class="d-block">
                <b>{{ userData.name }}</b>
            </span>
            <span class="chat-message">{{ userData.message }}</span>
        </div>
    </div>
</template>

<script>
import Avatar from "../common/layout/Avatar";
export default {
    name: "ChatBlock",
    components: {
        Avatar
    },
    props: {
        userData: {
            required: true
        }
    },
    methods: {
        goToChat() {
            this.$emit('go-to-chat', this.userData.name);
        }
    }
}
</script>

<style scoped>
.chat-block {
    cursor: pointer;
    transition: 0.5s;
}
.chat-block:hover {
    background: #f8f8f8;
}
.chat-message {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
}
.viewed {
    background: #ededed;
}
</style>