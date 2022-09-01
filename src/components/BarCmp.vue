<template>
  <article>
    Bar: The Base URL is {{appConfig?.BaseUrl}}
  </article>
</template>

<script lang="ts">
import {defineComponent, inject} from "vue";
import {AppConfigKey} from "../InjectionKeys";

export default defineComponent({
  name: 'BarCmp',
  setup() {
    const appConfig = inject(AppConfigKey);
    console.log('in BarCmp', appConfig)
    
    return {
      appConfig
    }
  }
})
</script>
