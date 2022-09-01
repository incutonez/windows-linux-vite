<template>
  <main>
    App: The Base URL is {{appConfig?.BaseUrl}}
    <FooCmp />
    <BarCmp />
  </main>
</template>

<script lang="ts">
import {defineComponent, inject} from "vue";
import {AppConfigKey} from "../dist/injectionKeys.js";
import {FooCmp, BarCmp} from "../dist/index.js";

export default defineComponent({
  name: 'App',
  components: {BarCmp, FooCmp},
  setup() {
    const appConfig = inject(AppConfigKey);
    console.log('in app', appConfig)
    
    return {
      appConfig
    }
  }
})
</script>
