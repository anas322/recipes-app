<template>
  <the-header></the-header>
  <land-view></land-view>
  <dishes-list></dishes-list>
  <router-view />
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import LandView from "./pages/LandView.vue";
import DishesList from "./pages/DishesList.vue";

export default {
  components: {
    TheHeader,
    LandView,
    DishesList,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:wght@400;500;700;900&display=swap");

:root {
  /* colors */
  --light-purple: #a772f2;
  --dark-purple: #7141d9;
  --grey: #c9b6f2;
  --light-yellow: #f2e205;
  --dark-yellow: #f2b705;
  --bold-font: "Anton", sans-serif;
  --roboto-font: "Roboto", sans-serif;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Noto Serif", serif;
}
section {
  margin-bottom: 1rem;
}
</style>
