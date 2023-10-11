
<script setup>
import Libro from './Libro.vue'
import {ref} from 'vue'


let libroUno ={
    img: "https://i.blogs.es/c68f8f/dracula/450_1000.jpg",
    titulo:"Atomic Habits",
    autor:"YO",
    id:123,
    genero:"NOVELA",
    descripcion:"NO TIENE"
}
let libroDos ={
    img: "https://2.bp.blogspot.com/-HCk4hjeb-Fc/Uaaw7DcccTI/AAAAAAAAB1A/hg4-yr9ckh8/s1600/150be10c7bdea403eb606eb1b3e91b54.jpg",
    titulo:"alla Habits",
    autor:"YO",
    id:133,
    genero:"NOVELA",
    descripcion:"NO TIENE"
}
let libroTres ={
    img: "https://i.blogs.es/e711ff/laila/450_1000.jpg",
    titulo:"hola Habits",
    autor:"YO",
    id:113,
    genero:"NOVELA",
    descripcion:"NO TIENE"
}
let libroCuatro ={
    img: "https://pm1.aminoapps.com/7129/08c261d7c400923f1beb1498db4393fa361df826r1-752-1035v2_hq.jpg",
    titulo:"jejej Habits",
    autor:"YO",
    id:103,
    genero:"NOVELA",
    descripcion:"NO TIENE"
}
let libroCinco ={
    img: "https://farm1.static.flickr.com/28/62836618_6d09fa7c4f.jpg?v=0",
    titulo:"aaaa Habits",
    autor:"YO",
    id:3,
    genero:"NOVELA",
    descripcion:"NO TIENE"
}
let libroSeis ={
    img: "https://mpd-biblio-covers.imgix.net/9781250041128.jpg",
    titulo:"cheeee Habits",
    autor:"YO",
    id:13,
    genero:"NOVELA",
    descripcion:"NO TIENE"
}

let libros = ref([
    libroUno,libroDos,libroTres,libroCuatro,libroCinco,libroSeis
])
let libroSeleccionado = ref(null)

const seleccionar = (index) =>{
libroSeleccionado.value = libros.value[index]
}

const ObtenerLibro = () => {
    //Arma el link con la pagina 
    fetch(url)
        .then(response => {
            if (response.status === 200) {
                return response.json(); // Convierte la respuesta a JSON
            } else {
                throw new Error('No se pudo obtener la información');
            }
        })
        .then(data => {
            libros.value = data.results //Obtengo el results que es donde esta mi vector que quiero trabajar
        })
        .catch(error => {
            console.error(error);
        });
}

</script>

<template>
<div class="row">
    <div class="col-8 contenedor">
    <div  v-for="(libro,id) in libros">
    <div class="card" style="width: 18rem; " >
        <img :src=libro.img class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ libro.titulo }}</h5>
            <button @click="seleccionar(id)" href="">VER LIBRO</button>
        </div>
</div>

</div>
</div>
<div class="col-4">
    <Libro v-if="libroSeleccionado!=null" :libro="libroSeleccionado"></Libro>
</div>
</div>

</template>

<style scoped>
.card-body{
    text-align: center;
}
.contenedor {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly; /* Permite que los elementos vayan debajo cuando no haya suficiente espacio en el ancho de la pantalla */
}
.card{
    width: 50%; /* Esto hará que los elementos ocupen la mitad del ancho del contenedor cuando estén uno al lado del otro */
  box-sizing: border-box; /* Asegura que el ancho incluya el relleno y el borde */
  border: 1px solid #000; /* Puedes agregar bordes para separar los elementos */
  padding: 10px;
}
img{
    height: 400px;
    object-fit: fill;
}

</style>

