<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"><img src="../assets/logo.png" alt="logo">  </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active" style="cursor:pointer;" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link" active-class="active" style="cursor:pointer;">Add Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/my-products" class="nav-link" active-class="active" style="cursor:pointer;">My Products</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
</style>