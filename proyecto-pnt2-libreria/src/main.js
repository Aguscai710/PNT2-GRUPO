import { createPinia } from "pinia";
import "./assets/main.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Biblioteca from "./components/Biblioteca.vue";
import Login from "./components/Login.vue";
import Confirmacion from "./components/Confirmacion.vue";
import Peticiones from "./components/Peticiones.vue";
import MisLibros from "./components/MisLibros.vue";
import Registrarse from "./components/Registrarse.vue";
import RegistroLibro from "./components/RegistroLibro.vue";
import Libro from "./components/Libro.vue";
import Estadistica from "./components/Estadistica.vue";


const routes = [
	{ path: "/Biblioteca", component: Biblioteca },
	{ path: "/Login", component: Login },
	{ path: "/Peticiones", component: Peticiones },
	{ path: "/MisLibros", component: MisLibros },
	{ path: "/Confirmacion", component: Confirmacion },
	{ path: "/Registrarse", component: Registrarse },
	{ path: "/RegistroLibro", component: RegistroLibro },
	{ path: "/Libro", component: Libro },
	{ path: "/Estadistica", component: Estadistica },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);

app.mount("#app");
