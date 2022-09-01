<template>
  <article>
    Foo: The Base URL is {{appConfig?.BaseUrl}}
  </article>
</template>

<script lang="ts">
import {defineComponent, inject} from "vue";
import {AppConfigKey} from "../InjectionKeys";

export default defineComponent({
  name: 'FooCmp',
  setup() {
    const appConfig = inject(AppConfigKey);
    console.log('in FooCmp', appConfig)
    
    return {
      appConfig
    }
  }
})
</script>
