<template>
    <div class="d-flex justify-center align-center">
        <VCol cols="12" md="4">
            <h1 class="text-center my-10">Projects Lab</h1>
            <VCol cols="12">
                <VCard class="px-4 pt-8 py-2 rounded-0">
                    <p class="card-title text-center">Sign In to ProjectsLab</p>
                    <VCol cols="12">
                        <VTextField
                                outlined
                                label="Email"
                                append-icon="mdi-at"
                                aria-autocomplete="none"
                                :error-messages="emailErrors"
                                v-model="userData.email"
                        />
                    </VCol>
                    <VCol cols="12">
                        <VTextField
                                outlined
                                label="Password"
                                :type="showPassword ? 'text' : 'password'"
                                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                @click:append="showPassword = !showPassword"
                                v-model="userData.password"
                                :error-messages="passwordErrors"
                                aria-autocomplete="none"
                        />
                    </VCol>
                    <VCol cols="12">
                        <VBtn
                                block
                                depressed
                                color="#DB2763"
                                dark
                                @click="onLogin"
                        >
                            Sign In
                        </VBtn>
                        <VDivider class="my-6" />
                        <div class="justify-md-space-between d-flex">
                            <RouterLink :to="{ name: 'sign-up' }">Don't have an account?</RouterLink>
                            <RouterLink :to="{ name: 'sign-up' }">Can't log?</RouterLink>
                        </div>
                    </VCol>

                </VCard>
            </VCol>
        </VCol>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import {
    required,
    minLength,
    email
} from 'vuelidate/lib/validators';

export default {
    name: "SignIn",
    mixins: [validationMixin],
    validations: {
        userData: {
            email: { required, email },
            password: { required, minLength: minLength(8) }
        }
    },
    data: () => ({
        showPassword: false,
        userData: {
            email: '',
            password: ''
        }
    }),
    methods: {
        async onLogin() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                try {
                    console.log(this.userData);
                    this.userData.email = this.userData.password = '';
                } catch (error) {
                    console.log(error);
                }
            }
        }
    },
    computed: {
        emailErrors() {
            const errors = [];
            if (!this.$v.userData.email.$dirty) {
                return errors;
            }
            !this.$v.userData.email.required &&
                errors.push('Email is required!');
            !this.$v.userData.email.email &&
                errors.push('Email must be valid!');
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.userData.password.$dirty) {
                return errors;
            }
            !this.$v.userData.password.required &&
                errors.push('Password is required!');
            !this.$v.userData.password.minLength &&
                errors.push('Password must be longer than 8 characters!');
            return errors;
        }
    }
}
</script>

<style scoped>

</style>