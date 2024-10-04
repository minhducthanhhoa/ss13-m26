import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify';
import "vuetify/styles"; // style cho các component
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Khởi tạo ứng dụng 
const app = createApp(App);

const vuetify = createVuetify({
    components,
    directives,
})
// sử dụng các thư viện bên ngoài
app.use(vuetify);

// Gắn component app vào trong ứng dụng 

app.mount('#app')
