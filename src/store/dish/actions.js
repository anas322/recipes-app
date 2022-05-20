export default {
  async setDish(context, payload) {
    const response = await fetch(
      "https://recipe-32c9b-default-rtdb.firebaseio.com/dishes.json",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error("something went wrong!");
      throw error;
    }

    const newPayload = {
      ...payload,
      id: responseData.name,
    };

    context.commit("setDish", newPayload);
  },

  //load all dishes

  async loadDishes(context) {
    const response = await fetch(
      "https://recipe-32c9b-default-rtdb.firebaseio.com/dishes.json"
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error("somthing went wrong!");
      throw error;
    }

    const allDishes = [];

    for (const key in responseData) {
      allDishes.push({
        name: responseData[key].name,
        cuisine: responseData[key].cuisine,
        steps: responseData[key].steps,
        desc: responseData[key].desc,
        time: responseData[key].time,
        id: key,
      });
    }

    context.commit("setAllDishes", allDishes);
  },
};
