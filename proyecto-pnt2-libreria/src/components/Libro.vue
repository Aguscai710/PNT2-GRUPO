<script setup>
const props = defineProps({
    libro : 0


})
</script>

<template>
    
    <div class="card" style="width: 30rem;">
        <div class="card-body">
            <img :src=props.libro.img class="card-img-top" alt="...">
            <h5 class="card-title">{{ libro.titulo }}</h5>
            <h5 class="card-title">{{ libro.descripcion }}</h5>
            <h5 class="card-title">{{ libro.autor }}</h5>
            <h5 class="card-title">{{ libro.genero }}</h5>
            <button @click="seleccionar(id)" href="">LO QUIERO!!!111</button>
        </div>
</div>
    
</template>

<style scoped>

</style>