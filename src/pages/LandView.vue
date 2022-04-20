<template>
  <section id="landPage">
    <div class="row">
      <img class="dish" src="../assets/dish1.png" alt="food dish" />
      <div class="col col-1">
        <h1>Make your today's <span>meal !</span></h1>
        <base-button link to="#" mode="flat"> Create Dish </base-button>
      </div>
      <div class="col col-2"></div>
    </div>
    <div class="arrow"></div>
  </section>
  <dishes-list></dishes-list>
</template>

<script>
import DishesList from "../components/dishes/DishesList.vue";
export default {
  components: {
    DishesList,
  },
};
</script>

<style>
#landPage {
  position: relative;
}
.row {
  min-height: 100vh;
  display: flex;
}
.row .dish {
  position: absolute;
  top: 21%;
  left: 46%;
  z-index: 10;
}
.col {
  flex: 50%;
}
.col-1 {
  align-self: center;
}
.col-1 h1 {
  font-family: var(--bold-font);
  letter-spacing: 3px;
  color: var(--dark-purple);
  padding: 0 0 50px 130px;
  font-size: 800%;
}
.col-1 h1 span {
  font-family: var(--bold-font);
  letter-spacing: 3px;
  color: var(--dark-yellow);
  display: block;
}
.col-1 a {
  position: relative;
  left: 14%;
  padding: 21px 66px;
  font-size: 155%;
  font-weight: bolder;
}
.arrow {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: rotate(136deg);
  width: 39px;
  height: 39px;
  border-top: 2px solid #333;
  border-right: 2px solid #333;
  animation: shake 1s ease-in-out infinite;
}
@keyframes shake {
  0% {
    bottom: 60px;
  }
  50% {
    bottom: 45px;
  }
  100% {
    bottom: 60px;
  }
}
.col-2 {
  background: var(--light-purple);
  clip-path: ellipse(80% 90% at 100% 52%);
}
@media only screen and (max-width: 1407px) {
  .col-1 h1 {
    padding: 0 0 50px 70px;
    font-size: 700%;
  }
  .col-1 a {
    left: 16%;
  }
}

@media only screen and (max-width: 1121px) {
  .col-1 h1 {
    padding: 0 0 50px 50px;
    font-size: 500%;
  }
  .col-1 a {
    left: 9%;
  }
}
@media only screen and (max-width: 807px) {
  .row img {
    display: none;
  }
  .col-2 {
    display: none;
  }
  .col-1 a {
    left: 6%;
  }
  .row {
    background: linear-gradient(129deg, #fff 63%, #a772f3 63%);
  }
}
</style>
