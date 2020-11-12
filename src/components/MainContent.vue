<template>
  <v-container>
    <div class="d-flex">
      <v-text-field
        type="number"
        @input="expand = false"
        autofocus
        placeholder="Enter POS number"
        v-model="inputNumber"
      >
      </v-text-field>
    </div>

    <v-expand-transition>
      <v-card
        dark
        style="line-height: 200px"
        max-width="400"
        height="200"
        v-for="product in filterProduct"
        :key="product.id"
        class="mx-auto mt-16 text-center"
        :class="product.color"
      >
        {{ product.name }}
      </v-card>
    </v-expand-transition>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MainContent",
  data: () => ({
    inputNumber: "",
  }),
  computed: {
    ...mapState(["products"]),
    filterProduct() {
      return this.products.filter(
        (posNumber) => this.inputNumber == posNumber.id
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>