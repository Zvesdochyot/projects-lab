<template>
    <VContainer>
        <VRow>
            <VCol cols="2">
                <LeftMenu />
            </VCol>
            <VCol cols="7">
                <h3>
                    <VIcon color="black">mdi-apps</VIcon>
                    <span class="d-inline-block ml-3">My projects</span>
                </h3>
                <VRow>
                    <VCol cols="12" md="3">
                        <VCol cols="12" class="project-block pa-0 pl-2 pt-2">
                            <h4 class="pa-0 ma-0">Project Name 0</h4>
                        </VCol>
                    </VCol>
                    <VCol cols="12" md="3">
                        <VCol cols="12" class="project-block pa-0 pl-2 pt-2">
                            <h4 class="pa-0 ma-0">Project Name 1</h4>
                        </VCol>
                    </VCol>
                    <VCol cols="12" md="3">
                        <VCol cols="12" class="project-block pa-0 pl-2 pt-2">
                            <h4 class="pa-0 ma-0">Project Name 2</h4>
                        </VCol>
                    </VCol>
                    <VCol cols="12" md="3">
                        <VCol cols="12" class="project-block pa-0 pl-2 pt-2">
                            <h4 class="pa-0 ma-0">Project Name 3</h4>
                        </VCol>
                    </VCol>
                    <VCol cols="12" md="3">
                        <VCol cols="12" class="project-block pa-0 pl-2 pt-2">
                            <h4 class="pa-0 ma-0">Project Name 4</h4>
                        </VCol>
                    </VCol>
                    <VCol cols="12" md="3">
                        <VCol cols="12" class="project-block project-block-add pa-0">
                            <VIcon x-large>mdi-plus</VIcon>
                        </VCol>
                    </VCol>
                </VRow>
            </VCol>
            <VCol cols="3">
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
            </VCol>
        </VRow>
    </VContainer>
</template>

<script>
import LeftMenu from "./LeftMenu";
export default {
    name: "Dashboard",
    components: {
        LeftMenu
    }
}
</script>

<style lang="scss" scoped>
.project-block {
    background-color: rgb(0, 121, 191);
    height: 100px;
    max-height: 100px;
    cursor: pointer;
    border-radius: 3px;
    h4 {
        color: #fff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}

.project-block-add {
    display: flex;
    align-content: center;
    justify-content: center;
}

</style>