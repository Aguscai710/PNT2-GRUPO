import {defineStore} from 'pinia'

export const useStoreBiblioteca = defineStore("biblioteca", {
	state: () => ({
        libros: [
				 {
					img: "https://i.blogs.es/c68f8f/dracula/450_1000.jpg",
					titulo: "Atomic Habits",
					autor: "YO",
					id: 123,
					genero: "NOVELA",
					descripcion:
						"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti fug.",
				},
				 {
					img: "https://2.bp.blogspot.com/-HCk4hjeb-Fc/Uaaw7DcccTI/AAAAAAAAB1A/hg4-yr9ckh8/s1600/150be10c7bdea403eb606eb1b3e91b54.jpg",
					titulo: "alla Habits",
					autor: "YO",
					id: 133,
					genero: "NOVELA",
					descripcion: "NO TIENE",
				},
				 {
					img: "https://i.blogs.es/e711ff/laila/450_1000.jpg",
					titulo: "hola Habits",
					autor: "YO",
					id: 113,
					genero: "NOVELA",
					descripcion: "NO TIENE",
				},
				 {
					img: "https://pm1.aminoapps.com/7129/08c261d7c400923f1beb1498db4393fa361df826r1-752-1035v2_hq.jpg",
					titulo: "jejej Habits",
					autor: "YO",
					id: 103,
					genero: "NOVELA",
					descripcion: "NO TIENE",
				},
				 {
					img: "https://farm1.static.flickr.com/28/62836618_6d09fa7c4f.jpg?v=0",
					titulo: "aaaa Habits",
					autor: "YO",
					id: 3,
					genero: "NOVELA",
					descripcion: "NO TIENE",
				},
				 {
					img: "https://mpd-biblio-covers.imgix.net/9781250041128.jpg",
					titulo: "cheeee Habits",
					autor: "YO",
					id: 13,
					genero: "NOVELA",
					descripcion: "NO TIENE",
				},
		],
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
		ObtenerLibro() {
			//Arma el link con la pagina
			fetch(url)
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