<template>
  <div class="col-md-4">
      <div class="card">
          <img class="card-img-top" :src="product.url" :alt="product.title">
          <div class="card-body">
              <h5 class="card-title"> {{product.title}} </h5>
              <p class="card-text"> {{product.description}} </p>
              <p class="card-text"> {{product.price}} TL</p>
              <button class="btn btn-primary">Add to Cart</button>
              <button class="btn btn-danger">Discard</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props : ["product"]
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