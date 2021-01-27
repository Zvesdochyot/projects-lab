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
                message: 'Hello! How are u?',
                viewed: false
            },
            {
                id: 2,
                name: 'User Surname',
                message: 'Здравствуйте! ddddddddddddddddddddddddddddddddКак вы?',
                viewed: true
            },
            {
                id: 3,
                name: 'User Surname',
                message: 'Здравствуйте! Как вы?',
                viewed: true
            },
            {
                id: 4,
                name: 'User Surname',
                message: 'Здравствуйте! Как вы?',
                viewed: true
            },
            {
                id: 5,
                name: 'User Surname',
                message: 'Здравствуйте! Как вы?',
                viewed: true
            },
            {
                id: 6,
                name: 'User Surname',
                message: 'Здравствуйте! Как вы?',
                viewed: true
            }
        ]
    })
}
</script>

<style scoped>

</style>