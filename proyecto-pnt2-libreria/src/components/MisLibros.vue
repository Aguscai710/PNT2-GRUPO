<!--
    Crear un libro y mandarlo a la API de mis libros para  aptos prestar
    Tener un boton para dar de baja uno de mis libros en la API
-->

<script setup>
import {onMounted, ref} from 'vue'
import { useStoreLogin } from '../../stores/storeLogin.js';

const store = useStoreLogin()

const usuario = store.usuarioLogueado;

const libros = ref([])

const borrarLibro=(id)=> {
			//Arma el link con la pagina
			fetch(`http://localhost:8080/api/libro/${id}`, {
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



const ObtenerLibros=()=> {
			//Arma el link con la pagina
			fetch("http://localhost:8080/api/libro/", {
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
					libros.value = data.data;   //foreach y poner solo las del usuario logueado
				})
				.then((tasks) => {
					// Do something with the list of tasks
				})
				.catch((error) => {
					// handle error
				});
		}


onMounted(()=>{
    ObtenerLibros()
})
</script>

<template>
    <div class="margen">
        <a href="./RegistroLibro">Registrar Libro Nuevo</a>
        <div class="row">
            <div class="col-12 contenedor">
                <div v-for="(libro) in libros">
                    <div class="card" style="width: 20rem;">
                        <div class="card-body">
                            <img :src=libro.imagen class="card-img-top" alt="...">
                            <div class="container-carta">
                                <h5 class="card-title"><b>Titulo:</b> {{ libro.titulo }}</h5>
                                <h5 class="card-title"><b>Descripción:</b> {{ libro.descripcion }}</h5>
                                <h5 class="card-title"><b>Autor:</b> {{ libro.autor }}</h5>
                                <h5 class="card-title"><b>Género:</b> {{ libro.genero }}</h5>
                               <i @click="borrarLibro(libro.id)" class='bx bx-x bx-md bx-tada-hover'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
a {
    border: 2px solid rgb(140, 158, 144);
    border-radius: 5%;
    background-color: rgb(52, 121, 66);
    color: white;
    text-decoration: none;
    padding: 10px;
    transition: 0.5s;
    font-family: Verdana, sans-serif;

}

a:hover {
    background-color: white;
    color: rgb(140, 158, 144);
}

.margen {
    margin: 20px 0px 0px 20px;
}
.bx-md{
    position: absolute;
    top:0 ;
    right: 0;

}
.bx-md:hover{
    color: red;
}

.contenedor {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    /* Permite que los elementos vayan debajo cuando no haya suficiente espacio en el ancho de la pantalla */
}
</style>