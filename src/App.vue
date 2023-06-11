<template>
  <div id="app">
    <router-view></router-view>  <!--http://127.0.0.1:5173/ages/?birthdate=06/10/2006&textcolor=5500ff&fontsize=150&fontfamily=%22Consolas%22-->>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GeneratorPage from "./components/GeneratorPage.vue";
export default defineComponent({
    data() {
        return {};
    },
    components: { GeneratorPage }
});
</script>