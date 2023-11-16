<!--
    Crear un libro y mandarlo a la API de mis libros para  aptos prestar
    Tener un boton para dar de baja uno de mis libros en la API
-->

<script setup>
import {onMounted, ref} from 'vue'
const libros = ref([])
const ObtenerLibros = () => {
    //Arma el link con la pagina
    fetch("http://localhost:8080/api/libro")//Falta filtrar libros x usuario
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
}

onMounted(()=>{
    const intervalo = setInterval(ObtenerLibros,1000)
    ObtenerLibros()
})
</script>

<template>
    <div class="margen">

        <a href="./RegistroLibro">Registrar Libro Nuevo</a>
        <div class="row">
            <div class="col-8 contenedor">
                <div v-for="(libro, id) in libros">
                    <div class="card" style="width: 30rem;">
                        <div class="card-body">
                            <img :src=libro.img class="card-img-top" alt="...">
                            <div class="container-carta">
                                <h5 class="card-title"><b>Titulo:</b> {{ libro.titulo }}</h5>
                                <h5 class="card-title"><b>Descripción:</b> {{ libro.descripcion }}</h5>
                                <h5 class="card-title"><b>Autor:</b> {{ libro.autor }}</h5>
                                <h5 class="card-title"><b>Género:</b> {{ libro.genero }}</h5>
                                <i class='bx bx-x bx-md bx-tada-hover' ></i>
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
</style>