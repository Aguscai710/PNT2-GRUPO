<script setup>
const props = defineProps({
    libro: 0


})
</script>

<template>
    <div class="card" style="width: 30rem;">
        <div class="card-body">
            <img :src=props.libro.img class="card-img-top" alt="...">
            <div class="container-carta">
                <h5 class="card-title"><b>Titulo:</b> {{ libro.titulo }}</h5>
                <h5 class="card-title"><b>Descripción:</b> {{ libro.descripcion }}</h5>
                <h5 class="card-title"><b>Autor:</b> {{ libro.autor }}</h5>
                <h5 class="card-title"><b>Género:</b> {{ libro.genero }}</h5>
                <button class="btn btn-primary" @click="seleccionar(id)" href=""> PEDIR </button>
            </div>

        </div>
    </div>
</template>

<style scoped>
.container-carta {
    margin-top: 10px;
}

.card-title {
    font-family: Verdana, sans-serif;
    font-size: 1.2em;
}
</style>