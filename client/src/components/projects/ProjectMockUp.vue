<template>
    <VCol
        cols="12"
        class="project-block pa-0 pl-2 pt-2"
        :style="{ 'background-color': computedColor }"
    >
        <h4 class="pa-0 ma-0">{{ name }}</h4>
    </VCol>
</template>

<script>
export default {
    name: "ProjectMockUp",
    props: {
        name: {
            type: String,
            required: false
        },
        color: {
            type: String,
            required: false
        }
    },
    data: () => ({
        defaultBgColor: 'rgb(0, 121, 191)'
    }),
    computed: {
        computedColor() {
            if (!this.color) return this.defaultBgColor;

            const styleColor = new Option().style;
            styleColor.color = this.color;
            return styleColor.color === this.color
                ? this.color
                : this.defaultBgColor;
        }
    }
}
</script>

<style lang="scss" scoped>
.project-block {
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
</style>