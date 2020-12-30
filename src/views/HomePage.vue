<template>
  <div class="container">
    <div class="row mt-3">
      <product-card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProductCard from "../components/ProductCard";
export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        this.products = response.data
      })
      .catch((e) => console.log(e));
  },
};
</script>

<style>
</style>