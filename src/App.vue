<template>
  <div>
    <navbar />
    <div class="row">
      <div class="col-2">
        <sidebar />
      </div>
      <div class="col-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
export default {
  components : {
    Navbar,
    Sidebar
  }
}
</script>

<style>

</style>
