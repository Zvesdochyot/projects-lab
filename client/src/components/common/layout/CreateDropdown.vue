<template>
    <VMenu offset-y transition="slide-y-transition" max-width="300">
        <template v-slot:activator="{ on, attrs }">
            <VBtn icon dark
                  v-bind="attrs"
                  v-on="on"
                  class="mr-2"
            >
                <VIcon>
                    mdi-plus
                </VIcon>
            </VBtn>
        </template>
        <VCard>
            <VList>
                <VListItem>
                    <VListItemContent>
                        <VListItemTitle class="text-center">Create</VListItemTitle>
                    </VListItemContent>
                </VListItem>
                <VDivider />
                <VListItem two-line @click="onCreateBoard">
                    <VListItemContent>
                        <VListItemTitle>
                            <VIcon left>mdi-view-module</VIcon>Board
                        </VListItemTitle>
                        <VListItemSubtitle>A board is a bunch of cards and columns</VListItemSubtitle>
                    </VListItemContent>
                </VListItem>
                <VDivider />
                <VListItem three-line @click="onCreateTeam">
                    <VListItemContent>
                        <VListItemTitle>
                            <VIcon left>mdi-account-multiple</VIcon>Team
                        </VListItemTitle>
                        <VListItemSubtitle>You can create the team to connect the best people</VListItemSubtitle>
                    </VListItemContent>
                </VListItem>
            </VList>
        </VCard>
    </VMenu>
</template>

<script>
export default {
    name: "CreateDropdown",
    methods: {
        onCreateBoard() {
            console.log('create board');
        },
        onCreateTeam(){
            console.log('create team');
        }
    }
}
</script>

<style scoped>

</style>