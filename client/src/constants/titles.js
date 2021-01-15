const appName = process.env.VUE_APP_NAME;
const prefix = ' | ' + appName;

export default {
    "SignInPage": "Sign In" + prefix,
    "SignUpPage": "Sign Up" + prefix,
    "MainPage": appName,
    "DashboardPage": "Dashboard" + prefix
}