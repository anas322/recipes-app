<template>
  <section id="dish-form">
    <div class="container">
      <form @submit.prevent="handlSubmit">
        <div class="form-group">
          <label for="dishName">Name of the dish</label>
          <input type="text" id="dishName" />
        </div>
        <div class="form-group">
          <label for="cuisine">Cuisine type</label>
          <input type="text" id="cuisine" />
        </div>
        <div class="form-group">
          <label for="ingredients">Ingredients</label>
          <input type="text" id="Ingredients" />
          <base-button mode="solid">+ Add Ingredient</base-button>
        </div>
        <div class="form-group">
          <label for="time">Time preperation</label>
          <input type="number" min="1" />
        </div>
        <div class="form-group">
          <label for="desc">Add Description</label>
          <textarea id="desc" cols="30" rows="4"></textarea>
        </div>
        <input type="submit" value="Add recipe" />
      </form>
    </div>
  </section>
</template>

<script>
export default {};
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
#Ingredients {
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
}
</style>
