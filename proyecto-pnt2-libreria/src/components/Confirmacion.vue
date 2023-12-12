<!--
   1) Con el boton "Aceptar" hacemos el intercambio(eliminamos los libros de los usuatios en la API) 
   y mostramos un pop up con los datos del usuario 
   2)Elimina la peticion del otro usuario y elimina la confirmacion mia en la API
-->

<script setup>
import { ref , onMounted} from 'vue'
import { useStoreLogin } from '../../stores/storeLogin.js';

const store = useStoreLogin()
var usuario = store.usuarioLogueado

const confirmaciones = ref([])

const aceptarConfirmacion = (id) => {
    fetch(`http://localhost:8080/api/confirmacion/${id}`, {
				method: "DELETE",
				headers: { "content-type": "application/json" },
			})
				.then((res) => {
					if (res.ok) {
						alert("Confirmacion aceptada")
						confirmaciones.value = confirmaciones.value.filter(confirmacion => confirmacion.id != id)
						return res.json();
					}
					// handle error
				})
				.then((tasks) => {
					// Do something with the list of tasks
				})
				.catch((error) => {
					// handle error
				});
}

const rechazarConfirmacion = (id) => {
//Arma el link con la pagina
    fetch(`http://localhost:8080/api/confirmacion/${id}`, {
				method: "DELETE",
				headers: { "content-type": "application/json" },
			})
				.then((res) => {
					if (res.ok) {
						alert("Confirmacion rechazada")
						confirmaciones.value = confirmaciones.value.filter(confirmacion => confirmacion.id != id)
						return res.json();
					}
					// handle error
				})
				.then((tasks) => {
					// Do something with the list of tasks
				})
				.catch((error) => {
					// handle error
				});
}
const borrarPeticion = (id) => {
    fetch(`http://localhost:8080/api/peticion/${id}`, {
				method: "DELETE",
				headers: { "content-type": "application/json" },
			})
				.then((res) => {
					if (res.ok) {
						return res.json();
					}
					// handle error
				})
				.then((tasks) => {
					// Do something with the list of tasks
				})
				.catch((error) => {
					// handle error
				});
}
const ObtenerConfirmaciones = () => {
	//Arma el link con la pagina
	fetch("http://localhost:8080/api/confirmacion", {
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
			data.data.forEach(element => {
				if (element.Usuario.id == usuario.id) {
					confirmaciones.value.push(element)
				}

			}); //foreach y poner solo las del usuario logueado
		})
		.catch((error) => {
			// handle error
		});
}

let estadistica=ref({
    
})


const ObtenerEstadisticas=()=> {
			fetch("http://localhost:8080/api/estadistica/1", {
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
					estadistica.value=data.data //foreach y poner solo las del usuario logueado
				})
                .catch((error) => {
					// handle error
				});
				
				
		}

const sumarAceptado=()=> {
			let aceptados=estadistica.value.aceptados;
			let rechazados=estadistica.value.rechazados;
			let estadisticaActualizada = {
				aceptados:aceptados+1,
				rechazados
			}
			fetch("http://localhost:8080/api/estadistica/1", {
				method: "PUT",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(estadisticaActualizada)
			})
				.then((res) => {
					if (res.ok) {
						ObtenerEstadisticas()
						return res.json();
					}
					// handle error
				})
				.then((data) => {
					estadistica.value=data.data //foreach y poner solo las del usuario logueado
				})
                .catch((error) => {
					// handle error
				});
				
				
		}

		const sumarRechazado=()=> {
			let aceptados=estadistica.value.aceptados;
			let rechazados=estadistica.value.rechazados;
			let estadisticaActualizada = {
				aceptados,
				rechazados:rechazados+1
			}
			fetch("http://localhost:8080/api/estadistica/1", {
				method: "PUT",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(estadisticaActualizada)
			})
				.then((res) => {
					if (res.ok) {
						ObtenerEstadisticas()
						return res.json();
					}
					// handle error
				})
				.then((data) => {
					estadistica.value=data.data //foreach y poner solo las del usuario logueado
				})
                .catch((error) => {
					// handle error
				});
				
				
		}




onMounted(()=>{
    ObtenerConfirmaciones(),
	ObtenerEstadisticas()
})
</script>

<template>
    <div class="margen">

        <div class="row">
            <div v-for="confirmacion in confirmaciones" class="card" style="width: 23rem;">
            <div class="card-body">
                <div class="container-carta"  style="text-align: center;">
					<h5 class="card-title" style="font-size: 1.5em;"><b>Alguien quiere tu libro</b></h5>
					<br>
                    <h5 class="card-title"><b>Libro:</b> {{ confirmacion.Libro.titulo }}</h5>
                    <h5> <b>Por un tiempo de : {{ confirmacion.descripcion }} </b></h5>
                    <br>

                    <button class="btn btn-success" @click.prevent="aceptarConfirmacion(confirmacion.id), borrarPeticion(confirmacion.id),sumarAceptado()" href=""> ACEPTAR </button>
                    <button class="btn btn-danger" @click.prevent="rechazarConfirmacion(confirmacion.id),borrarPeticion(confirmacion.id), sumarRechazado()" href=""> RECHAZAR </button>
                </div>
            </div>
        </div>
        </div>


    </div>
</template>

<style scoped>
.margen {
    margin: 20px 0px 0px 20px;
}
.btn-danger{
    margin-left: 5px;
}


</style>