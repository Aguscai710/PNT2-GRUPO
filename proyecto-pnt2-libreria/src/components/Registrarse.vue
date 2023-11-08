<!--
    Crea un usuario nuevo y lo  agrega en la API
-->

<script setup>
import {ref} from 'vue'
const usuarios = ref([])

// const usuarioNuevo = {
//         email: "",
//         contraseña: "",
//         telefono: "",
//         usuario: ""
//     }


const crearUsuario = () => { 
    let email = document.getElementById("email").value
    let contraseña = document.getElementById("contraseña").value
    let telefono = document.getElementById("telefono").value
    let usuario = document.getElementById("usuario").value
    let contraseñaConf = document.getElementById("contraseñaConf").value

    const usuarioNuevo = {
        email: email,
        contraseña: contraseña,
        telefono: telefono,
        usuario: usuario
    }

    ObtenerUsuarios()
    const emailExists = usuarios.find(p => p.email == email)
    const usuarioExists = usuarios.find(p => p.email == email)
// if (emailExists == null && usuarioExists == null && contraseña == contraseñaConf) {
        fetch("https://654add315b38a59f28ee50e5.mockapi.io/Usuarios",{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ usuario: usuarioNuevo })
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
        console.log(email.value)
    }
//  }
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

</script>

<template>
    <div class="margen">
        <form>
            <div class="mb-3">
                <label for="usuario" class="form-label">Nombre de usuario</label>
                <input type="text" class="form-control" id="usuario">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="contraseña" class="form-label">Password</label>
                <input type="password" class="form-control" id="contraseña">
            </div>
            <div class="mb-3">
                <label for="contraseñaConf" class="form-label">Confirmar Password</label>
                <input type="password" class="form-control" id="contraseñaConf">
            </div>
            <div class="mb-3">
                <label for="Telefono" class="form-label">Telefono</label>
                <input type="number" class="form-control" id="Telefono">
            </div>
            <button type="submit" class="btn btn-success" @click="crearUsuario()">Submit</button>
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
    height: 535px;
    padding: 10px;
    border-radius: 2%;
    box-shadow: 8px 4px 6px black;
}

input {
    border: none;
    border-bottom: 5px solid #86CD6A;
    border-right: 5px solid #86CD6A;

}
</style>