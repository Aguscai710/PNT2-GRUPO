<!--
   1) Con el boton "Aceptar" hacemos el intercambio(eliminamos los libros de los usuatios en la API) 
   y mostramos un pop up con los datos del usuario 
   2)Elimina la peticion del otro usuario y elimina la confirmacion mia en la API
-->

<script setup>
import { ref } from 'vue'

let peticion1 = {
    usuario: "juan",
    libro1: "hola",
    libro2: ["asda", "fsffdsg", "fasf"]
}
let peticion2 = {
    usuario: "carlos",
    libro1: "gsg",
    libro2: ["asda", "fsffdsg", "fasf"]
}
let peticion3 = {
    usuario: "pedro",
    libro1: "wtgt",
    libro2: ["asda", "fsffdsg", "fasf"]
}
let peticion4 = {
    usuario: "pedro",
    libro1: "wtgt",
    libro2: ["asda", "fsffdsg", "fasf"]
}
let peticion5 = {
    usuario: "pedro",
    libro1: "wtgt",
    libro2: ["asda", "fsffdsg", "fasf"]
}

let peticiones = ref([
    peticion1, peticion2, peticion3, peticion4, peticion5
])

const intercambiar = () =>{

}

</script>

<template>
    <div class="margen">

        <div class="row">
            <div v-for="peticion in peticiones" class="card" style="width: 30rem;">
            <div class="card-body">
                <div class="container-carta">
                    <h5 class="card-title"><b>El usuario:</b> {{ peticion.usuario }}</h5>
                    <h5 class="card-title"><b>Quiere tu libro:</b> {{ peticion.libro1 }}</h5>
                    <select>
                        <option value="" disabled selected>Selecciona un libro de {{ peticion.usuario }} para intercambiar</option>
                        <option v-for="(libro, index) in peticion.libro2" :key="index">{{ libro }}</option>
                    </select>
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