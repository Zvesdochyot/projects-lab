<template>
    <div>
        <ChatBlock v-for="user in chats" :user-data="user" :key="user.id"/>
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
                name: 'Barak Obama',
                message: 'Hello! How are u?'
            },
            {
                id: 2,
                name: 'Владимир Путин',
                message: 'Здравствуйте! Как вы?'
            }
        ]
    })
}
</script>

<style scoped>

</style>