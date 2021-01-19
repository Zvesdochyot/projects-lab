<template>
    <VCol
         cols="12"
         class="project-block pa-0 pl-2 pt-2"
         :style="{ 'background-color': color }"
    >
        <h4 class="pa-0 ma-0">{{ project.name }}</h4>
    </VCol>
</template>

<script>
export default {
    name: "ProjectCard",
    props: {
        project: {
            required: true
        }
    },
    data: () => ({
        defaultBgColor: 'rgb(0, 121, 191)'
    }),
    computed: {
        color() {
            const styleColor = new Option().style;
            styleColor.color = this.project.backgroundColor;
            return styleColor.color === this.project.backgroundColor
                ? this.project.backgroundColor
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