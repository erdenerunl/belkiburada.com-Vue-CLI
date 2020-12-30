<template>
  <div class="col-md-4">
    <div class="card">
      <img class="card-img-top" :src="product.imageUrl" :alt="product.title" />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <p class="card-text">{{ product.price }} TL</p>
        <button @click.stop="addToCart" class="btn btn-primary">Add to Cart</button>
        <button @click.stop="removeFromCart" class="btn btn-danger">Discard</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    props : ["product"],
    data() {
    return {
      carts: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3000/shopping-cart")
      .then((response) => {
        this.carts = response.data;
      })
      .catch((err) => console.log(err));
  },
  computed: {
    isCart() {
      return Boolean(this.carts.find((item) => item.id === this.product.id));
    },
  },
  methods: {
    addToCart() {
      axios
        .post("http://localhost:3000/shopping-cart", {
          ...this.product,
          count: 1,
        })
        .then((response) => {
          this.carts.push(response.data);
        })
        .catch((err) => console.log(err));
    },
    removeFromCart() {
      axios
        .delete(`http://localhost:3000/shopping-cart/${this.product.id}`)
        .then((response) => {
          console.log(response);
          this.carts = this.carts.filter((item) => item.id !== this.product.id);
        })
        .catch((err) => console.log(err));
    },
  },
}
</script>

<style scoped>
.card {
  margin-top: 10px;
  cursor: pointer;
  padding: 10px;
  height: auto;
}
.card:hover {
  border: 2px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  opacity: 0.9;
}
img {
  height: 180px;
}
</style>