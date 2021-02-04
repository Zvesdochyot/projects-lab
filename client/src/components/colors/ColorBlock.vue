<template>
    <div
        class="color-block mr-1"
        :style="{ 'background-color': color }"
        @click="chooseColor(color)"
    />
</template>

<script>
import EventBus from "@/events/event-bus";
export default {
    name: "ColorBlock",
    props: {
        color: {
            required: true,
            type: String
        }
    },
    methods: {
        chooseColor(colorValue) {
            EventBus.$emit('choose-project-color', colorValue);
        }
    },
    beforeDestroy() {
        EventBus.$off('choose-project-color');
    }
}
</script>

<style scoped>
.color-block {
    cursor: pointer;
    width: 42px;
    height: 42px;
    border-radius: 4px;
    transition: 0.3s
}
.color-block:hover {
    opacity: 0.5;
}
</style>