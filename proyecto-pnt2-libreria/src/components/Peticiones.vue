<!--
    Las peticiones son creadas desde el boton "pedir" de biblioteca
    Las podemos dar de baja en la API
-->

<script setup>
import { ref, onMounted } from 'vue'
import { useStoreLogin } from '../../stores/storeLogin.js';

const store = useStoreLogin()

const peticiones = ref([])

const borrarPeticion=(id)=>{
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

const ObtenerPeticiones=()=> {
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
					peticiones.value = data.data; //foreach y poner solo las del usuario logueado
				})
				.then((tasks) => {
					// Do something with the list of tasks
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
                    <h5 class="card-title"><b>Al usuario: </b> {{ peticion.Usuario.nombre }}</h5>
                    <h5 class="card-title"><b>Estado de la solicitud: </b> {{ peticion.descripcion }}</h5>
                </div>
                <i @click="borrarPeticion(peticion.id)" class='bx bx-x bx-md bx-tada-hover' ></i>
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