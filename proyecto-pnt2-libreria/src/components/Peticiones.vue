<!--
    Las peticiones son creadas desde el boton "pedir" de biblioteca
    Las podemos dar de baja en la API
-->

<script setup>
import { ref, onMounted } from 'vue'
import { useStoreLogin } from '../../stores/storeLogin.js';

const store = useStoreLogin()
var usuario = store.usuarioLogueado

const peticiones = ref([])

const borrarPeticion=(id)=>{
    fetch(`http://localhost:8080/api/peticion/${id}`, {
				method: "DELETE",
				headers: { "content-type": "application/json" },
			})
				.then((res) => {
					if (res.ok) {
						peticiones.value = peticiones.value.filter(peticion => peticion.id != id)
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
const borrarConfirmacion=(id)=>{
    fetch(`http://localhost:8080/api/confirmacion/${id}`, {
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

const ObtenerPeticiones = () => {
	//Arma el link con la pagina
	fetch("http://localhost:8080/api/peticion", {
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
					peticiones.value.push(element)
				}

			}); //foreach y poner solo las del usuario logueado
		})

		.catch((error) => {
			// handle error
		});
}


onMounted(()=>{
    ObtenerPeticiones()
})
</script>

<template>
    <div class="margen">

        <div v-for="peticion in peticiones" class="card" style="width: 30rem;">
            <div class="card-body">
                <div class="container-carta">
                    <h5 class="card-title"><b>Solicitaste el libro: </b> {{ peticion.Libro.titulo }}</h5>
                    <h5 class="card-title"><b>Por un tiempo de: </b> {{ peticion.descripcion }}</h5>
                </div>
                <i @click.prevent="borrarPeticion(peticion.id), borrarConfirmacion(peticion.id)" class='bx bx-x bx-md bx-tada-hover' ></i>
            </div>

        </div>

    </div>
</template>

<!--
    tiene que haber un botón que si la peticion no esta en espera (aceptado o rechazado) aparece.
    con ese botón eliminas la petición. popeas del array la petición
-->

<style scoped>
.margen {
    margin: 20px 0px 0px 20px;
}
.card-body{
    position: relative;
    
}
.bx-md{
    position: absolute;
    top:0 ;
    right: 0;

}
.bx-md:hover{
    color: red;
}


</style>