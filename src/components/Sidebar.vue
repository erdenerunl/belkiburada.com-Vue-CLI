<template>
  <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link :to="`/categories/${categoryID}`" class="nav-link">
              Computer
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="`/categories/${categoryID}`" class="nav-link">
              Automobile
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="`/categories/${categoryID}`" class="nav-link">
              Smartphone
            </router-link>
          </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>