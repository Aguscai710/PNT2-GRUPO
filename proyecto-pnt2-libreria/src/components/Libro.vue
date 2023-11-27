<script setup>
import { useStoreLogin } from '../../stores/storeLogin.js';
const storeLogin = useStoreLogin()

const usuario = storeLogin.usuarioLogueado
const props = defineProps({
    libro: 0
})

const crearPeticion = (idLibro) => {
    const peticion = {
        descripcion: "1 semana",
        usuarioid: usuario.id,
        libroid: idLibro,
    }
//Crear peticion y mandarla
    fetch("http://localhost:8080/api/peticion", {
        method: 'POST', // or PATCH
        headers: {'content-type':'application/json'},
        body: JSON.stringify(peticion)
        }).then(res => {
  if (res.ok) {
    alert("Peticion Creada!")
      return res.json();
  }
  // handle error
}).then(task => {
  // Do something with updated task
}).catch(error => {
  // handle error
})

}
const crearConfirmacion = (idUser, idLibro) =>{
    const confirmacion = {
        descripcion: "1 semana",
        usuarioid: idUser ,                                      //usuarioLogueado
        libroid: idLibro,
    }
    fetch("http://localhost:8080/api/confirmacion", {
        method: 'POST', // or PATCH
        headers: {'content-type':'application/json'},
        body: JSON.stringify(confirmacion)
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
            <img :src=props.libro.imagen class="card-img-top" alt="...">
            <div class="container-carta">
                <h5 class="card-title"><b>Titulo:</b> {{ libro.titulo }}</h5>
                <h5 class="card-title"><b>Descripción:</b> {{ libro.descripcion }}</h5>
                <h5 class="card-title"><b>Autor:</b> {{ libro.autor }}</h5>
                <h5 class="card-title"><b>Género:</b> {{ libro.genero }}</h5>   
                <button class="btn btn-primary" @click.prevent="crearPeticion(libro.id),crearConfirmacion(libro.Usuario.id,libro.id)"> PEDIR </button> <!--crearpeticion-->
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