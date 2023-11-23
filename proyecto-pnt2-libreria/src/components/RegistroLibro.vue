<script setup>
  import { useStoreLogin } from '../../stores/storeLogin.js';

const store = useStoreLogin()
 var usuario = store.usuarioLogueado

const libroNuevo = {
    titulo:'',
    genero:'',
    autor:'',
    descripcion:'',
    imagen:'',
    usuarioid: usuario.id


}

const crearLibro = () => {
    fetch("http://localhost:8080/api/libro", {
  method: 'POST',
  headers: {'content-type':'application/json'},
  // Send your data in the request body as JSON
  body: JSON.stringify(libroNuevo)
}).then(res => {
  if (res.ok) {
    alert("Libro Creado!")
      return res.json();
  }
  // handle error
}).then(task => {
  // do something with the new task
}).catch(error => {
  // handle error
})
}



</script>

<template>
    <div class="margen">
        <h3>Publicá un nuevo libro</h3>
        <form>
            <div class="mb-3">
                <label for="titulo" class="form-label">Titulo</label>
                <input v-model="libroNuevo.titulo" type="text" class="form-control" id="titulo" required >
            </div>
            <div class="mb-3">
                <label for="descripcion" class="form-label">Descripcion</label>
                <input v-model="libroNuevo.descripcion" type="text" class="form-control" id="descripcion" required>
            </div>
            <div class="mb-3">
                <label for="autor" class="form-label">Autor</label>
                <input v-model="libroNuevo.autor" type="text" class="form-control" id="autor" required>
            </div>
            <div class="mb-3">
                <label for="genero" class="form-label">Genero</label>
                <input v-model="libroNuevo.genero" type="text" class="form-control" id="genero" required>
            </div>
            <div class="mb-3">
                <label for="imagen" class="form-label">Imagen</label>
                <input v-model="libroNuevo.imagen" type="text" class="form-control" id="imagen" required>
            </div>
            <button class="btn btn-success" @click.prevent="crearLibro" > PUBLICAR </button>
        </form>
    </div>
</template>

<style scoped>
.margen {
    font-family: Verdana, sans-serif;
    font-size: 1.2em;
    text-align: center;
    margin: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    margin-top: 160px;
    width: 800px;
    height: 599px;
    padding: 10px;
    border-radius: 2%;
    box-shadow: 8px 4px 6px black;
}
input{
    border: none;
    border-bottom:5px solid #86CD6A;
    border-right: 5px solid #86CD6A ;

}
</style>