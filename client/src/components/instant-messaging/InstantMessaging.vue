<template>
    <div>
        <h3 class="mb-3">
            <VIcon color="black">mdi-message-processing</VIcon>
            <span class="d-inline-block ml-3">Inbox</span>
        </h3>
        <VCard min-height="400">
            <VCardText>
                <h3 class="text--primary">
                    Instant Messaging
                </h3>
                <VDivider />
                <div class="d-flex align-center justify-center">
                    <h4>No messages...</h4>
                </div>
            </VCardText>
        </VCard>
    </div>
</template>

<script>
export default {
    name: "InstantMessaging"
}
</script>

<style scoped>

</style>