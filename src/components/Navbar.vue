<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">BELKI BURADA!</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active" style="cursor:pointer;" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link" active-class="active" style="cursor:pointer;">Products</router-link>
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

<style>
</style>