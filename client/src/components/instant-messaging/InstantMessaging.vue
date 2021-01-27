<template>
    <div>
        <h3 class="mb-3">
            <VIcon color="black">mdi-message-processing</VIcon>
            <span class="d-inline-block ml-3">Inbox</span>
        </h3>
        <VCard min-height="400">
            <VCardText>
                <h3 class="text--primary">
                    Messages
                </h3>
                <VDivider />
                <div class="chats px-2">
                    <Chats />
                </div>
            </VCardText>
        </VCard>
    </div>
</template>

<script>
import Chats from "./Chats";
export default {
    name: "InstantMessaging",
    components: {
        Chats
    }
}
</script>

<style scoped>

</style>