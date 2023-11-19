import { defineStore } from "pinia";
import { ref } from "vue";

export const useStoreLogin = defineStore("login", {
	state: () => ({
		usuarioLogueado: ref({}),

		usuarioRegistrado: {
			mail: "",
			password: "",
		},
		usuarios: ref([]),
		estaEsunavariableaborrar:12,
	}),
	getters: {
		getUsuarios(state) {
			return state.usuarios;
		},
	},
	actions: {
		ObtenerUsuarios() {
			//Arma el link con la pagina
			fetch("http://localhost:8080/api/usuario")
				.then((response) => {
					if (response.status === 200) {
						return response.json(); // Convierte la respuesta a JSON
					} else {
						throw new Error("No se pudo obtener la información");
					}
				})
				.then((data) => {
					this.usuarios = data.data; //Obtengo el results que es donde esta mi vector que quiero trabajar
				})
				.catch((error) => {
					console.error(error);
				});
		},
	},
	LoguearUsuario() {
		const us = ObtenerUsuarios()
		fetch("http://localhost:8080/api/usuario/login", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(usuarioRegistrado),
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				// handle error
			})
			.then((data) => {
				usuarioLogueado.value=data.message
			})
			.then((task) => {
				// Do something with updated task
			})
			.catch((error) => {
				// handle error
			});
        alert("Logueo exitoso!")
    }
    
});
