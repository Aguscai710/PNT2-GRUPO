<!--
    Las peticiones son creadas desde el boton "pedir" de biblioteca
    Las podemos dar de baja en la API
-->

<script setup>
import { ref } from 'vue'

//HACER FETCH PARA TRAER LAS PETICIONES DE LA API


</script>

<template>
    <div class="margen">

        <div v-for="peticion in peticiones" class="card" style="width: 30rem;">
            <div class="card-body">
                <div class="container-carta">
                    <h5 class="card-title"><b>Solicitaste el libro: </b> {{ peticion.libro1 }}</h5>
                    <h5 class="card-title"><b>Al usuario: </b> {{ peticion.usuario }}</h5>
                    <h5 class="card-title"><b>Estado de la solicitud: </b> {{ peticion.estado }}</h5>
                </div>
                <i class='bx bx-x bx-md bx-tada-hover' ></i>
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