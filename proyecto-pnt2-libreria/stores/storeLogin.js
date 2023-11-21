import { defineStore } from "pinia";
import { ref } from "vue";


export const useStoreLogin = defineStore("login", {
	state: () => ({
		usuarioLogueado: {},

		usuarioRegistrado: {
			mail: "",
			password: "",
		},
		usuarios: [],
	}),
	getters: {
		getUsuarios(state) {
			return state.usuarios;
		},
	},
	actions: {
		ObtenerUsuarios() {
			//Arma el link con la pagina
			fetch("http://localhost:8080/api/usuario", {
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
					usuarios.value = data.data; //foreach y poner solo las del usuario logueado
				})
				.then((tasks) => {
					// Do something with the list of tasks
				})
				.catch((error) => {
					// handle error
				});
		},
	
	LoguearUsuario() {
		fetch("http://localhost:8080/api/usuario/login", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(this.usuarioRegistrado),
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				// handle error
			})
			.then((data) => {
				alert("Logueo exitoso!")
				this.usuarioLogueado = data.data
			})
			.then((task) => {
				// Do something with updated task
			})
			.catch((error) => {
				// handle error
			});
      
		
    }},

});
