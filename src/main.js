import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// UI
import BaseButton from "./components/UI/BaseButton.vue";

const app = createApp(App);

// UI
app.component("base-button", BaseButton);

app.use(store);
app.use(router);
app.mount("#app");
