import { mapGetters } from "vuex";
import * as getters from '../store/modules/auth/types/getters';

export default {
    computed: {
        ...mapGetters('auth', {
            user: getters.GET_LOGGED_USER
        }),
        name() {
            return this.user?.name;
        },
        nickname() {
            return this.user?.nickname;
        }
    }
}