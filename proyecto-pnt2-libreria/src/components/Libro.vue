<script setup>
const props = defineProps({
    libro: 0


})

const crearPeticion = () => {
    const peticion = {
        id : props.libro.id,
        usuario : props.libro.usuario, //ver como guardar la variable usuario para usarla en todos lados
        estado : "en espera"
    }
    fetch(url, {
        method: 'PUT', // or PATCH
        headers: {'content-type':'application/json'},
        body: JSON.stringify({Peticion: peticion})
        }).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // Do something with updated task
}).catch(error => {
  // handle error
})

}

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
                <button class="btn btn-primary" @click="crearPeticion"> PEDIR </button> <!--crearpeticion-->
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