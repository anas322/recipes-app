<template>
  <section id="dishes">
    <h1><strong>Dishes List </strong></h1>
    <div class="container">
      <article v-for="d in dishes" :key="d.id">
        <header>
          <router-link :to="`/dishes/${d.id}`">
            <img
              src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-right-arrow-arrows-kmg-design-flat-kmg-design.png"
              class="details-arrow"
            />
          </router-link>
          <img src="../../assets/dish2.png" alt="food" style="width: 100%" />
        </header>
        <div class="body">
          <h2>{{ d.name }}</h2>
          <p class="desc">
            {{ d.desc }}
          </p>
          <ul>
            <li>{{ d.cuisine }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    dishes() {
      return this.$store.getters["dish/getDishes"];
    },
  },
  methods: {
    async loadDishes() {
      try {
        await this.$store.dispatch("dish/loadDishes");
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  created() {
    this.loadDishes();
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 5rem;
  font-size: 3em;
}
strong {
  position: relative;
  font-family: var(--roboto-font);
}

strong::after {
  position: absolute;
  content: "";
  width: 50%;
  height: 5px;
  background: var(--dark-yellow);
  border-radius: 10px;
  bottom: -19px;
  left: 50%;
  transform: translateX(-50%);
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem 4rem;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 auto;
}
article {
  flex: calc(30% - 4rem);
  flex-grow: 0;
  background: var(--light-purple);
  box-shadow: 8px 11px 22px 4px #bebebe;
  border-radius: 14px;
  transition: all 0.5s;
}
article:hover {
  transform: scale(1.06);
}

.details-arrow {
  float: right;
  padding: 10px 15px;
  cursor: pointer;
}
.body {
  padding: 1.5rem;
  color: #222;
}
.body h2 {
  margin-bottom: 2rem;
  font-size: 2.5em;
  font-family: var(--roboto-font);
  color: #fff;
}
.body p {
  padding-bottom: 2rem;
  color: #fafad2;
}
ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0.5rem;
}
ul li {
  padding: 5px 15px;
  border-radius: 20px;
  background: var(--dark-purple);
  font-family: var(--roboto-font);
  font-weight: 500;
  color: #fff;
  letter-spacing: 1px;
}

@media only screen and (max-width: 1200px) {
  article {
    flex: 40%;
  }
}

@media only screen and (max-width: 768px) {
  article {
    flex: 100%;
    max-width: 80%;
  }
}
</style>
