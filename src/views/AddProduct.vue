<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-10 column-wrapper">
        <h3 class="mt-3" style="color: #fdfdfd;"> Add your product </h3>
        <input v-model="formData.title" type="text" class="form-control" placeholder="Title..." />
        <input v-model="formData.description" type="text" class="form-control" placeholder="Description..." />
        <input v-model="formData.imageUrl" type="text" class="form-control" placeholder="Image url..." />
        <input v-model="formData.price" type="number" class="form-control" placeholder="Price..." />
        <select v-model="formData.categoryId" class="form-select">
          <option value="choose">Choose..</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.name }}
          </option>
        </select>
        <button @click="addProduct" class="btn btn-success">ADD PRODUCT</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        title: "",
        description: "",
        price: null,
        url: "",
        categoryID: "choose",
      },
      categories: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        this.categories = response.data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    addProduct() {
      axios.post("http://localhost:3000/products", this.formData).then((response) => {
        this.formData = {
          title: "",
          description: "",
          imageUrl: "",
          price: null,
          categoryId: "sec",
        };
      });
    },
  },
};
</script>

<style  scoped>
input,
select {
  margin-top: 10px;
  width: 85%;
}
input:first-child {
  margin-top: 30px;
}
button {
  width: 85%;
  margin: 20px 0;
}
.column-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #143450;
  border-radius: 1rem;
  
}
</style>
