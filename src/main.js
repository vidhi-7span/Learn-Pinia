import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);
// Create Pinia Instance
const pinia = createPinia();

app.mount("#app");
// Use Pinia Instance
app.use(pinia);
