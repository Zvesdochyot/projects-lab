<template>
    <div class="main d-flex">
        <ColorBlock :color="color" v-for="(color, index) in colors" :key="index"/>
    </div>
</template>

<script>
import ColorBlock from "@/components/colors/ColorBlock";
export default {
    name: "Colors",
    components: {
        ColorBlock
    },
    data: () => ({
        colors: [
            'red',
            'orange',
            'green',
            'violet',
            'blue'
        ]
    })
}
</script>

<style scoped>

</style>