<template>
  <div>
    <product-details v-for="detail in details" :key="detail.id" :detail="detail" />
  </div>
</template>

<script>
import axios from "axios";
import ProductDetails from "../components/ProductDetails"
export default {
  components: {
    ProductDetails,
  },
  data() {
    return {
      details: [],
    };
  },
  created() {
    axios
      .get(`http://localhost:3000/products?id=${this.productId}`)
      .then((response) => {
        this.details = response.data;
      })
      .catch((e) => console.log(e));
  },
  computed: {
      productId(){
        return this.$route.params.id;
      }
  }
};
</script>

<style>
</style>