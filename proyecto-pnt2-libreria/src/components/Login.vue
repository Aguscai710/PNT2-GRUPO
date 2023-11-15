<!--
    Validar que el usuario exista para que pueda ingresar(en la API)
-->

<script setup>
    import {ref,onMounted} from 'vue'
    const usuarios = ref([])

    const usuarioRegistrado={
        mail:'',
        contraseña:''
    }
    const ObtenerUsuarios = () => {
			//Arma el link con la pagina
			fetch("https://654add315b38a59f28ee50e5.mockapi.io/Usuarios")
				.then((response) => {
					if (response.status === 200) {
						return response.json(); // Convierte la respuesta a JSON
					} else {
						throw new Error("No se pudo obtener la información");
					}
				})
				.then((data) => {
					this.usuarios.value = data.results; //Obtengo el results que es donde esta mi vector que quiero trabajar
				})
				.catch((error) => {
					console.error(error);
				});
	}



    onMounted(()=>{
    const intervalo = setInterval(ObtenerUsuarios,1000)
    ObtenerUsuarios()
})
</script>

<template>
    <div class="background">
        <div class="margen">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input v-model="usuarioRegistrado.mail" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input v-model="usuarioRegistrado.contraseña" type="password" class="form-control" id="exampleInputPassword1" required>
                </div>
                <button type="submit" class="btn btn-success" @click="validarUsuario()">Submit</button>
            </form>
        </div>
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
    height: 250px;
    padding: 10px;
    border-radius: 2%;
    box-shadow: 8px 4px 6px black;
}
input{
    border: none;
    border-bottom: 5px solid #86CD6A;
    border-right: 5px solid #86CD6A ;
}



</style>