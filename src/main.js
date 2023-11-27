/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
  // import axios from "axios";
// const axiosInstance = axios.create({
//   baseURL: "http://localhost:8000/",
//   timeout: 10000,
// });
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)
// app.use(axiosInstance);

registerPlugins(app)

app.mount('#app')
