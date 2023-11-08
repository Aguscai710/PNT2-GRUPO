<script setup>
import { ref } from 'vue';

const libros = ref([])
const ActualizarLibros = () => {
    fetch(url, {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({Libro: libro})
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

const crearLibro = () => {
    let titulo = document.getElementById("titulo").value
    let descripcion = document.getElementById("descripcion").value
    let genero = document.getElementById("genero").value
    let autor = document.getElementById("autor").value

    const libro = {
        titulo : titulo,
        descripcion : descripcion,
        genero: genero,
        autor : autor
    }
    libros.push(libro)
    ActualizarLibros()
}
</script>

<template>
    <div class="margen">
        <h3>Publicá un nuevo libro</h3>
        <form @submit="crearLibro()">
            <div class="mb-3">
                <label for="titulo" class="form-label">Titulo</label>
                <input type="email" class="form-control" id="titulo" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="descripcion" class="form-label">Descripcion</label>
                <input type="password" class="form-control" id="descripcion">
            </div>
            <div class="mb-3">
                <label for="autor" class="form-label">Autor</label>
                <input type="password" class="form-control" id="autor">
            </div>
            <div class="mb-3">
                <label for="genero" class="form-label">Genero</label>
                <input type="password" class="form-control" id="genero">
            </div>
            <button type="submit" class="btn btn-success"> PUBLICAR </button>
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
    height: 500px;
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