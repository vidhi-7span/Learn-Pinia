import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);
// Create Pinia Instance

// Use Pinia Instance
app.use(pinia);
app.mount("#app");
