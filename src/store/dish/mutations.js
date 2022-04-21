export default {
  setDish(state, payload) {
    state.dishes.push(payload);
  },

  setAllDishes(state, payload) {
    state.dishes = payload;
  },
};
