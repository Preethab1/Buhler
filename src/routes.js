
import Home from './views/Home.vue';
import Checkout from './views/Checkout.vue';
import ProductDetail from './views/ProductDetail.vue';
/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/products/:id', 
    name: 'ProductDetail',
    component: ProductDetail
  }
];

;