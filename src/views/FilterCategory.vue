<template>
  <div class="container">
    <div class="row">
      <product-card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";
export default {
  components: { ProductCard },
  data() {
    return {
      products: [],
    };
  },
  created() {
    axios
      .get(`http://localhost:3000/products?categoryId=${this.categoryId}`)
      .then((response) => {
        this.products = response.data;
      })
      .catch((e) => console.log(e));
  },
  computed: {
    categoryId() {
      return this.$route.params.categoryId;
    },
  },
  watch: {
    categoryId() {
      axios
        .get(`http://localhost:3000/products?categoryId=${this.categoryId}`)
        .then((response) => {
          this.products = response.data;
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style>
</style>