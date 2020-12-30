<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="product-wrapper">
      <div class="card" @click="$router.push(`/details/${product.id}`)">
        <div class="image-container">
          <img class="card-img-top img-style" :src="product.imageUrl" :alt="product.title" />
        </div>
        <div class="card-body card-wrapper">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text desc">{{ product.description }}</p>
          <div class="price-addtocard">
            <p class="card-text price-text">{{ product.price }} TL</p>
            <button @click.stop="addToCart" v-if="!isCard" class="btn btn-primary">Add to Cart</button>
            <button @click.stop="removeFromCart" v-else class="btn btn-danger">Discard</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["product"],
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
};
</script>

<style scoped>
button {
  width: 60%;
}
.card {
  margin-top: 10px;
  cursor: pointer;
  padding: 10px;
  height: auto;
}
.card:hover {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  opacity: 0.9;
}
img {
  height: 200px;
}
.product-wrapper {
  position: relative;
  width: 300px;
  overflow: hidden;
  box-sizing: border-box;
}
.image-container {
  overflow: hidden;
}
.img-style {
  width: 300px;
  height: 250px;
  transition: transform 0.5s ease;
}
.img-style:hover {
  transform: scale(1.03);
}
.card-title {
  font-size: 1.05rem;
}
.card-text {
  margin-bottom: 10px;
}
.desc{
    font-size: 15px;
}
.price-addtocard {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.price-text {
    font-size: 1.1rem;
    font-weight: bold;
}
</style>