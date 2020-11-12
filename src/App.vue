<template>
  <v-app>
    <BaseHeader />
    <MainContent />
  </v-app>
</template>

<script>
import BaseHeader from "./components/BaseHeader";
import MainContent from "./components/MainContent";

export default {
  name: "App",

  components: {
    BaseHeader,
    MainContent,
  },

  data: () => ({}),
  computed: {},
};
</script>
<style lang="scss">
html,
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 0;
  margin: 0;
  font-weight: bold;
}
*::-webkit-scrollbar {
  display: none;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
