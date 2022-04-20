<template>
  <section>
    <div class="container">
      <div class="img-container">
        <img src="../assets/details/pic.jpg" alt="food image" />
      </div>
      <article>
        <h1>Food Title</h1>
        <span>American</span>
        <ul>
          <li>step 1</li>
          <li>step 1</li>
          <li>step 1</li>
        </ul>
        <time>30 min</time>
      </article>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  max-width: 80%;
  margin: auto auto;
  display: flex;
  align-items: center;
  height: calc(100vh - 90px);
  margin-top: 90px;
}
.container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  max-height: 100%;
}

.img-container {
  flex: 40%;
}
.img-container img {
  width: 100%;
  object-fit: cover;
  min-height: 564px;
}

article {
  flex: 60%;
  align-self: flex-start;

  padding-left: 3rem;
}

h1 {
  font-family: var(--bold-font);
  letter-spacing: 7px;
  font-size: 3em;
  color: var(--dark-purple);
  margin-bottom: 10px;
}

span {
  background: var(--light-purple);
  color: #fff;
  padding: 2px 13px;
  border-radius: 15px;
}
ul {
  margin-top: 2rem;
  list-style: inside;
  margin-bottom: 2rem;
  max-height: 20rem;
  overflow: auto;
}
ul li {
  font-size: 1.3em;
  text-align: left;
}
time {
  color: var(--dark-yellow);
  font-family: var(--bold-font);
  font-size: 1.5em;
}

@media only screen and (min-width: 1417px) {
  section {
    height: calc(100vh - 90px);
  }
  .container {
    max-height: 80%;
    overflow: hidden;
  }
  .img-container img {
    border: 10px;
  }
}

@media only screen and (max-width: 1140px) {
  /* section {
    justify-content: center;
  }
  .container {
    flex-flow: column;
  }

  .img-container img {
    max-height: 564px;
  } */
  .img-container {
    flex: 55%;
  }
  article {
    flex: 45%;
  }
}
@media only screen and (max-width: 838px) {
  section {
    justify-content: center;
  }
  .container {
    flex-flow: column;
    min-width: 80%;
    margin-top: 5rem;
  }
  .img-container {
    width: 100%;
  }
  .img-container img {
    max-height: 300px;
  }
  article {
    width: 100%;
    padding-left: 0;
  }
}
</style>
