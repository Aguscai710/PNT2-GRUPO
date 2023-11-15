<!--
1)Traer los libros de todos los usuarios menos los mios  a Biblioteca desde la API
2)Con el boto "pedir" crear una peticion y mandarla a la API
-->


<script setup>
import Libro from './Libro.vue'
import { ref, onMounted } from 'vue'
import { useStoreBiblioteca } from '../../stores/storeBiblioteca';

const store = useStoreBiblioteca()

onMounted(()=>{
    const intervalo = setInterval(store.ObtenerLibros,1000)
    store.ObtenerLibros()
})
</script>

<template>
    <div class="row">
        <div class="col-8 contenedor">
            <div v-for="(libro, id) in store.getLibros">
                <div class="card" style="width: 18rem; ">
                    <img :src=libro.img class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"> {{ libro.titulo }}</h5>
                        <button class="btn btn-success" @click="store.seleccionar(id)" href="">VER LIBRO</button>
                    </div>
                </div> 
            </div>
        </div>
        <div class="col-4">
            <Libro v-if="store.libroSeleccionado != null" :libro="store.libroSeleccionado"></Libro>
        </div>
    </div>

</template>

<style scoped>
.card-body {
    text-align: center;
}

.contenedor {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    /* Permite que los elementos vayan debajo cuando no haya suficiente espacio en el ancho de la pantalla */
}

.card {
    width: 50%;
    /* Esto hará que los elementos ocupen la mitad del ancho del contenedor cuando estén uno al lado del otro */
    box-sizing: border-box;
    /* Asegura que el ancho incluya el relleno y el borde */
    border: 1px solid #000;
    /* Puedes agregar bordes para separar los elementos */
    padding: 10px;
    margin-top: 20px;
}

img {
    height: 400px;
    object-fit: fill;
}

.card-title {
    font-family: 'Young Serif', serif;
    font-size: 1.4em;
}

</style>

