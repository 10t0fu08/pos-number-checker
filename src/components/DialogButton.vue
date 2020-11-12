<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="1200">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          dark
          v-bind="attrs"
          v-on="on"
          width="60"
          class="ml-3 font-weight-bold light-green darken-1"
          ><v-icon>fas fa-list</v-icon></v-btn
        >
      </template>
      <v-row class="ma-0">
        <v-expand-transition>
          <v-btn
            v-show="closeBtnFlg"
            fixed
            bottom
            right
            width="80"
            height="80"
            style="z-index: 1; box-shadow: 0 0 10px rgba(0, 0, 0, 0.4)"
            class="rounded-circle"
            @click="dialog = false"
            ><v-icon>fas fa-times</v-icon></v-btn
          >
        </v-expand-transition>

        <v-col
          class="pa-0"
          cols="12"
          md="4"
          lg="3"
          v-for="product in ascProducts"
          :key="product.id"
        >
          <v-card dark :class="product.color">
            <v-card-text>
              <div>{{ product.id }}</div>
              <p style="font-size: 14px" class="font-weight-bold">
                {{ product.name }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    dialog: false,
    closeBtnFlg: false,
  }),
  computed: {
    ...mapState(["products"]),
    ascProducts() {
      const products = this.products;
      products.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        } else {
          return -1;
        }
      });
      return products;
    },
  },
  methods: {},
  watch: {
    dialog() {
      this.closeBtnFlg = false;

      if (this.dialog == true) {
        const self = this;
        setTimeout(function () {
          self.closeBtnFlg = true;
        }, 500);
      }
    },
  },
};
</script>

<style>
</style>