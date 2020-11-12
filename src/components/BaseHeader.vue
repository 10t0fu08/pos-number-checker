<template>
  <div>
    <v-app-bar color="grey darken-3" dense dark>
      <v-icon class="mr-3">fas fa-calculator</v-icon>
      <v-toolbar-title>POS number checker</v-toolbar-title>
      <v-spacer></v-spacer>
      <DialogButton />
    </v-app-bar>
  </div>
</template>

<script>
import DialogButton from "./DialogButton";
export default {
  components: {
    DialogButton,
  },
};
</script>

<style>
</style>