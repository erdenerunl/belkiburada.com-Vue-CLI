import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AddProduct from '../views/AddProduct.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import FilterCategory from '../views/FilterCategory.vue'
import Details from '../views/Details.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/products',
    name: 'Products',
    component: AddProduct
  },
  {
    path: '/my-products',
    component: ShoppingCart
  },
  {
    path: '/categories/:categoryId',
    component: FilterCategory
  },
  {
    path: '/details/:id',
    component: Details
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
