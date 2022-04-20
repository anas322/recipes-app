<template>
  <header>
    <nav>
      <ul>
        <li>
          <base-button link to="/"
            ><img
              src="https://img.icons8.com/external-becris-lineal-color-becris/64/000000/external-kitchen-utensils-kitchen-cooking-becris-lineal-color-becris-1.png"
          /></base-button>
        </li>
        <div>
          <li>
            <base-button link to="/dishes">Dishes</base-button>
          </li>
          <li>
            <base-button link to="/addDish" mode="solid"
              >Create Dish</base-button
            >
          </li>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  box-shadow: 10px 10px 152px var(--grey);
  background: #fcfcfc;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  font-size: 150%;
}

ul div {
  display: flex;
  justify-content: center;
  column-gap: 2rem;
}
</style>
