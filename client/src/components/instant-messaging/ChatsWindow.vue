<template>
    <div>
        <ChatBlock v-for="user in chats" :user-data="user" :key="user.id" @go-to-chat="goToChat"/>
    </div>
</template>

<script>
import ChatBlock from "./ChatBlock";
export default {
    name: "Chats",
    components: {
        ChatBlock
    },
    data: () => ({
        chats: [
            {
                id: 1,
                name: 'John Doe',
                message: 'Hello! How are u?',
                viewed: false
            },
            {
                id: 2,
                name: 'Carl Jhonson',
                message: 'What\'s up?',
                viewed: true
            },
            {
                id: 3,
                name: 'Sweet',
                message: 'Welcome to us!',
                viewed: false
            },
            {
                id: 4,
                name: 'Man',
                message: 'How are y?',
                viewed: true
            },
            {
                id: 5,
                name: 'Matt Damn',
                message: 'I need your help',
                viewed: true
            },
            {
                id: 6,
                name: 'Jessica Bum',
                message: 'Hi, honey:)',
                viewed: false
            }
        ]
    }),
    methods: {
        goToChat(value) {
            this.$emit('go-to-chat', value);
        }
    }
}
</script>

<style scoped>

</style>