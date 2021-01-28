<template>
    <div class="im-block">
        <h3 class="mb-3">
            <VIcon color="black">mdi-message-processing</VIcon>
            <span class="d-inline-block ml-3">Inbox</span>
        </h3>
        <VCard min-height="400" class="messages-block">
            <div class="chats px-2">
                <VWindow v-model="window" touchless>
                    <VWindowItem :value="0">
                        <ChatsWindow @go-to-chat="goToChat"/>
                    </VWindowItem>
                    <VWindowItem :value="1">
                        <Chat @back-to-chats="backToChats"/>
                    </VWindowItem>
                </VWindow>
            </div>
        </VCard>
    </div>
</template>

<script>
import ChatsWindow from "./ChatsWindow";
import Chat from "./Chat";
export default {
    name: "InstantMessaging",
    components: {
        ChatsWindow,
        Chat
    },
    data: () => ({
        window: 0
    }),
    methods: {
        goToChat(value) {
            this.window = 1;
            console.log(value);
        },
        backToChats() {
            this.window = 0;
        }
    }
}
</script>

<style scoped>
.messages-block {
    overflow-y: auto;
    height: 420px;
    overflow-x: hidden;
}
</style>