import {defineStore} from 'pinia'
import { ref } from "vue";

export const useStoreBiblioteca = defineStore("biblioteca", {
	state: () => ({
		libroSeleccionado: null,
		libros: ref([])
	}),
	getters: {
		getLibros(state) {
			return state.libros;
		},
	},
	actions: {
		seleccionar(index) {
			this.libroSeleccionado = this.libros[index];
		},
		ObtenerLibros() {
			//Arma el link con la pagina
			fetch("http://localhost:8080/api/libro", {
				method: "GET",
				headers: { "content-type": "application/json" },
			})
				.then((res) => {
					if (res.ok) {
						return res.json();
					}
					// handle error
				})
				.then((data) => {
					this.libros = data.data;
				})
				.then((tasks) => {
					// Do something with the list of tasks
				})
				.catch((error) => {
					// handle error
				});
		},
	},

});

