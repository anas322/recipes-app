import { createStore } from "vuex";

import DishMoudule from "./dish";

export default createStore({
  modules: {
    dish: DishMoudule,
  },
  state: {},
});
