<template>
  <button :class="mode" v-if="!link">
    <slot></slot>
  </button>

  <router-link :to="to" v-if="link" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
    },
    mode: {
      type: String,
      required: false,
    },
  },
};
</script>

<style>
button,
a {
  padding: 13px 32px;
  border-radius: 6px;
  font-size: 100%;
  cursor: pointer;
}
button {
  background: none;
}

a {
  text-decoration: none;
}
.solid {
  border: none;
  background-color: var(--dark-purple);
  color: #fff;
  transition: all 0.8s;
}
.solid:hover {
  border: 1px solid var(--dark-purple);
  background: none;
  color: var(--dark-purple);
}
.flat {
  border: 1px solid var(--dark-purple);
  color: var(--dark-purple);
  transition: all 0.8s;
}
.flat:hover {
  border: none;
  background-color: var(--dark-purple);
  color: #fff;
}
</style>
