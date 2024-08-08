import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StockMe from "../views/StockMe.vue";
import faq from "../views/faq.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Stock",
    name: "stock",
    component: StockMe,
  },
  {
    path: "/faq",
    name: "faq",
    component: faq,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
