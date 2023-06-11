<template>
    <VueDatePicker></VueDatePicker>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    
  export default defineComponent({
    data() {
      return {}
    },
    components: { VueDatePicker }
  });
  </script>

<style scoped>
@import url("../styles/GeneratorPage.scss");
</style>