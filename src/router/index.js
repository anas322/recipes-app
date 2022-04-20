import { createRouter, createWebHistory } from "vue-router";

// Pages
import LandView from "../pages/LandView.vue";
import DishDetails from "../pages/DishDetails.vue";
import DishForm from "../pages/DishForm.vue";

const routes = [
  { path: "/", redirect: "/dishes" },

  { path: "/dishes", component: LandView },

  { path: "/dishes/:id", component: DishDetails },

  { path: "/addDish", component: DishForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
