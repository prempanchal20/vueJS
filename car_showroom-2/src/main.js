import { createApp } from "vue";
import App from "./App.vue";

// Call Navbar Globally
import Navbar from "./components/Navbar.vue";
const app = createApp(App)
app.component("Navbar", Navbar)

app.mount("#app");