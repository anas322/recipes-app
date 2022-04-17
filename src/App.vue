<template>
  <the-header></the-header>

  <router-view />
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap");

:root {
  /* colors */
  --light-purple: #a772f2;
  --dark-purple: #7141d9;
  --grey: #c9b6f2;
  --light-yellow: #f2e205;
  --dark-yellow: #f2e205;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Noto Serif", serif;
}
</style>
