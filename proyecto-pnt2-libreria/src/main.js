import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'
import Biblioteca from './components/Biblioteca.vue'
import Persona from "./components/Persona.vue";
import Login from './components/Login.vue'
import Confirmaciones from  './components/Confirmacion.vue'
import Peticiones from './components/Peticiones.vue'
import MisLibros from './components/MisLibros.vue'
import Registrarse from './components/Registrarse.vue'
import RegistroLibro from './components/RegistroLibro.vue'
import Libro from "./components/Libro.vue";





const routes = [
	{ path: "/Biblioteca", component: Biblioteca },
	{ path: "/Persona", component: Persona },
	{ path: "/Login", component: Login },
	{ path: "/Peticiones", component: Peticiones },
	{ path: "/MisLibros", component: MisLibros },
	{ path: "/Confirmaciones", component: Confirmaciones },
	{ path: "/Registrarse", component: Registrarse },
	{ path: "/RegistroLibro", component: RegistroLibro },
	{ path: "/Libro", component: Libro }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});


const app = createApp(App);
app.use(router);
app.mount("#app");


