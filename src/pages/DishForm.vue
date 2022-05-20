<template>
  <section id="dish-form">
    <div class="container">
      <span class="error" v-if="!isFormValid">{{ errorMssg }}</span>
      <form @submit.prevent="handlSubmit">
        <div class="form-group">
          <label for="dishName">Name of the dish</label>
          <input type="text" id="dishName" v-model.trim="name" />
        </div>
        <div class="form-group">
          <label for="cuisine">Cuisine type</label>
          <input type="text" id="cuisine" v-model.trim="cuisine" />
        </div>
        <div class="form-group">
          <label for="steps-and-ingredient">Steps & ingredients</label>
          <input
            v-for="n in formCount"
            :key="n"
            type="text"
            id="steps-and-ingredient"
            ref="steps"
          />
          <button type="button" @click="addStep">+ Add Ingredient</button>
        </div>
        <div class="form-group">
          <label for="time">Time preperation</label>
          <input type="number" min="1" v-model.number="timeTaken" />
        </div>
        <div class="form-group">
          <label for="desc">Add Description</label>
          <textarea id="desc" cols="30" rows="4" v-model.trim="desc"></textarea>
        </div>
        <input type="submit" value="Add recipe" />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formCount: 1,
      name: "",
      cuisine: "",
      timeTaken: null,
      desc: "",
      steps: [],
      isFormValid: true,
      errorMssg: "Please fill all the fields!",
    };
  },

  methods: {
    //add one more step or ingredient
    addStep() {
      this.formCount += 1;
    },

    //validation of the form
    formValidation() {
      this.isFormValid = true;
      this.errorMssg = "";

      if (!this.name || !this.cuisine || !this.timeTaken || !this.desc) {
        this.isFormValid = false;
        this.errorMssg = "Please fill all the fields!";
        //hide the error message
        setTimeout(() => {
          this.isFormValid = true;
        }, 4000);
      }
    },

    handlSubmit() {
      this.formValidation();

      if (this.isFormValid) {
        // get the setps values
        for (let i = 0; i < this.$refs.steps.length; i++) {
          this.steps.push(this.$refs.steps[i].value);
        }

        let payload = {
          name: this.name,
          cuisine: this.cuisine,
          time: this.timeTaken,
          desc: this.desc,
          steps: this.steps,
        };

        this.$store.dispatch("dish/setDish", payload);
        this.$router.replace("/dishes");
      }
    },
  },
};
</script>

<style scoped>
#dish-form {
  margin: 0 auto;
  margin-top: 10rem;
  max-width: 40rem;
}
.container {
  padding: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
}
.form-group label {
  font-size: 1.3em;
  font-family: var(--roboto-font);
  font-weight: 500;
  margin-bottom: 0.4rem;
}
.form-group input,
textarea {
  padding: 5px 0;
  font-size: 1.2em;
  border-radius: 5px;
  border: 1px solid var(--grey);
}
.form-group input:focus {
  outline: 1.3px solid var(--grey);
}
#steps-and-ingredient {
  margin-bottom: 1rem;
}
input[type="submit"] {
  border: none;
  padding: 5px 15px;
  border-radius: 8px;
  font-size: 1.5em;
  float: right;
  color: #fff;
  background: var(--dark-yellow);
  cursor: pointer;
}

/* error message  */
.error {
  border: 1px solid rgb(240, 41, 41);
  background: #f37676;
  color: #fff;
  margin-bottom: 1rem;
  padding: 0.8rem;
  display: block;
  border-radius: 10px;
  font-size: 1.2em;
}
</style>
