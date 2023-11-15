import {defineStore} from 'pinia'

export const useStoreBiblioteca = defineStore("biblioteca", {
	state: () => ({
		libroSeleccionado: null,
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
			fetch("https://654add315b38a59f28ee50e5.mockapi.io/Usuarios")
				.then((response) => {
					if (response.status === 200) {
						return response.json(); // Convierte la respuesta a JSON
					} else {
						throw new Error("No se pudo obtener la información");
					}
				})
				.then((data) => {
					this.libros.value = data.results; //Obtengo el results que es donde esta mi vector que quiero trabajar
				})
				.catch((error) => {
					console.error(error);
				});
		},
	},

});

