<template>
    <div class="pa-2">
        <div>
            <h2><VIcon @click="backToChats">mdi-chevron-left</VIcon> Chat</h2>
            <div class="messages px-2">
                <div class="messages-win" >

                </div>
                <div class="row footer">
                    <div class="col-sm-10">
                        <VTextField
                                dense
                                outlined
                                placeholder="Your message..."
                                :hide-details="true"
                        />
                    </div>
                    <div class="col-sm-2 d-flex align-center justify-center">
                        <VIcon @click="sendMessage">mdi-send</VIcon>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Chat",
    methods: {
        backToChats() {
            this.$emit('back-to-chats');
        },
        sendMessage() {
            console.log('message sent!');
        }
    }
}
</script>

<style scoped>
.messages-win {
    height: 300px;
    border: 1px solid gray
}
</style>