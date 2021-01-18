<template>
    <div class="d-flex justify-center align-center">
        <VCol cols="12" md="3">
            <h1 class="text-center my-10">Projects Lab</h1>
            <VCol cols="12">
                <VCard class="px-4 pt-8 py-2 rounded-0">
                    <VCol cols="12" v-if="errorMsg || successMsg">
                        <p class="error-block" v-if="errorMsg">{{ errorMsg }}</p>
                        <p class="success-block" v-if="successMsg">
                            {{ successMsg }}
                            <RouterLink :to="{ name: 'sign-in' }">
                                <span class="white--text text-decoration-underline">Sign In!</span>
                            </RouterLink>
                        </p>
                    </VCol>

                    <p class="card-title text-center">Sign Up</p>
                    <VCol cols="12" class="py-0 my-0">
                        <VTextField
                                dense
                                outlined
                                label="Name"
                                aria-autocomplete="none"
                                :error-messages="nameErrors"
                                v-model="userData.name"
                        />
                    </VCol>
                    <VCol cols="12" class="py-0 my-0">
                        <VTextField
                                dense
                                outlined
                                label="Nickname"
                                append-icon="mdi-account"
                                aria-autocomplete="none"
                                :error-messages="nicknameErrors"
                                v-model="userData.nickname"
                        />
                    </VCol>
                    <VCol cols="12" class="py-0 my-0">
                        <VTextField
                                dense
                                outlined
                                label="Email"
                                append-icon="mdi-at"
                                aria-autocomplete="none"
                                :error-messages="emailErrors"
                                v-model="userData.email"
                        />
                    </VCol>
                    <VCol cols="12" class="py-0 my-0">
                        <VTextField
                                dense
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
                    <VCol cols="12" class="py-0 my-0">
                        <VTextField
                                dense
                                outlined
                                label="Repeat Password"
                                :type="showConfirmPassword ? 'text' : 'password'"
                                :append-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                @click:append="showConfirmPassword = !showConfirmPassword"
                                v-model="userData.passwordConfirmation"
                                :error-messages="passwordConfirmationErrors"
                                aria-autocomplete="none"
                        />
                    </VCol>
                    <VCol cols="12">
                        <VBtn
                                block
                                depressed
                                color="#DB2763"
                                dark
                                @click="onRegister"
                        >
                            Sign Up
                        </VBtn>
                        <SocialAccountsLogin />
                        <VDivider class="my-6" />
                        <div class="justify-md-space-between d-flex">
                            <RouterLink :to="{ name: 'sign-in' }">Already have an account?</RouterLink>
                            <RouterLink :to="{ name: 'sign-up' }">Can't log?</RouterLink>
                        </div>
                    </VCol>

                </VCard>
            </VCol>
        </VCol>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import * as actions from '../../store/modules/auth/types/actions';
import { validationMixin } from 'vuelidate';
import {
    required,
    minLength,
    email,
    sameAs
} from 'vuelidate/lib/validators';
import SocialAccountsLogin from './SocialAuth';

export default {
    name: "SignUp",
    mixins: [validationMixin],
    components: {
        SocialAccountsLogin
    },
    validations: {
        userData: {
            name: { required, minLength: minLength(2) },
            nickname: { required, minLength: minLength(2) },
            email: { required, email },
            password: { required, minLength: minLength(8) },
            passwordConfirmation: { sameAs: sameAs('password') }
        }
    },
    data: () => ({
        showPassword: false,
        showConfirmPassword: false,
        errorMsg: '',
        successMsg: '',
        userData: {
            name: '',
            nickname: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    }),
    methods: {
        ...mapActions('auth', {
            signUp: actions.SIGN_UP
        }),
        async onRegister() {
            this.errorMsg = this.successMsg = '';
            this.$v.$touch();
            if (!this.$v.$invalid) {
                try {
                    await this.signUp({
                        name: this.userData.name,
                        nickname: this.userData.nickname,
                        email: this.userData.email,
                        password: this.userData.password,
                        password_confirmation: this.userData.passwordConfirmation,
                    });
                    this.$v.$reset();
                    Object.keys(this.userData).forEach(key => {
                        this.userData[key] = '';
                    });
                    this.errorMsg = '';
                    this.successMsg = 'You was successfully registered!';
                } catch (error) {
                    this.errorMsg = error;
                }
            }
        }
    },
    computed: {
        nameErrors() {
            const errors = [];
            if (!this.$v.userData.name.$dirty) {
                return errors;
            }
            !this.$v.userData.name.required &&
                errors.push('Name is required!');
            !this.$v.userData.name.minLength &&
                errors.push('Name must be more than 2 characters!');
            return errors;
        },
        nicknameErrors() {
            const errors = [];
            if (!this.$v.userData.nickname.$dirty) {
                return errors;
            }
            !this.$v.userData.nickname.required &&
            errors.push('Nickname is required!');
            !this.$v.userData.nickname.minLength &&
            errors.push('Nickname must be more than 2 characters!');
            return errors;
        },
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
            !this.$v.userData.passwordConfirmation.sameAs &&
            errors.push("Password don't match!");
            return errors;
        },
        passwordConfirmationErrors() {
            const errors = [];
            if (!this.$v.userData.passwordConfirmation.$dirty) {
                return errors;
            }
            !this.$v.userData.passwordConfirmation.sameAs &&
            errors.push("Password don't match!");
            return errors;
        }
    }
}
</script>

<style scoped>

</style>