import { createRouter, createWebHistory } from "vue-router";

// Pages
import LandView from "../pages/LandView.vue";
import DishDetails from "../pages/DishDetails.vue";

const routes = [
  { path: "/", redirect: "/dishes" },

  { path: "/dishes", component: LandView },

  { path: "/dishes/:id", component: DishDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
