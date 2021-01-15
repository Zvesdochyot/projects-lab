import titles from "../constants/titles";

export default {
    created () {
        if (titles[this.$options.name]) {
            document.title = titles[this.$options.name];
        } else {
            document.title = process.env.VUE_APP_NAME;
        }
    }
}