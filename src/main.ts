import { createApp } from 'vue'
import App from './App.vue'
import {AppConfigKey} from "../dist/injectionKeys.js";
import {AppConfig} from "../dist/classes.js";

const app = createApp(App);
app.provide(AppConfigKey, new AppConfig({
    BaseUrl: 'Test.com'
}))
app.mount('#app');
