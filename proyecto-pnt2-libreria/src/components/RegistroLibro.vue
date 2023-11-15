<script setup>


const libroNuevo = {
    titulo:'',
    genero:'',
    autor:'',
    descripcion:''

}
const url ="https://65541b4963cafc694fe6268f.mockapi.io/booke/1"
const crearLibro = () => {

alert(libroNuevo.autor)
    fetch(url, {
        method: 'PUT',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({libroNuevo})
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
    <div class="margen">
        <h3>Publicá un nuevo libro</h3>
        <form >
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
            <button type="submit" class="btn btn-success" @click="crearLibro"> PUBLICAR </button>
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