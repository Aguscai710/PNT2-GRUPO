<!--
   1) Con el boton "Aceptar" hacemos el intercambio(eliminamos los libros de los usuatios en la API) 
   y mostramos un pop up con los datos del usuario 
   2)Elimina la peticion del otro usuario y elimina la confirmacion mia en la API
-->

<script setup>
import { ref , onMounted} from 'vue'


const confirmaciones = ref([])

const ObtenerConfirmaciones=()=> {
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
					this.confirmaciones = data.data;
				})
				.then((tasks) => {
					// Do something with the list of tasks
				})
				.catch((error) => {
					// handle error
				});
		}
        



onMounted(()=>{
    ObtenerConfirmaciones()
})
</script>

<template>
    <div class="margen">

        <div class="row">
            <div v-for="confirmacion in confirmaciones" class="card" style="width: 30rem;">
            <div class="card-body">
                <div class="container-carta">
                    <h5 class="card-title"><b>El usuario:</b> {{ confirmacion.usuario.nombre }}</h5>
                    <h5 class="card-title"><b>Quiere tu libro:</b> {{ confirmacion.libro.titulo }}</h5>
                    <h5> <b>Por un tiempo de :{{ confirmacion.descripcion }} </b></h5>
                    <br>
                    <br>
                    <button class="btn btn-success" @click="intercambiar(index, peticion.libro1)" href=""> ACEPTAR </button>
                    <button class="btn btn-danger" @click="seleccionar(id)" href=""> RECHAZAR </button>
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