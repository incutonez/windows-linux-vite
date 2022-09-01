import {InjectionKey} from "vue";
import {AppConfig} from "./classes/AppConfig";

export const AppConfigKey: InjectionKey<AppConfig> = Symbol('AppConfig')
