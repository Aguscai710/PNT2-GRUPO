<!--
    Crea un usuario nuevo y lo  agrega en la API
-->

<script setup>
import {ref} from 'vue'
const usuarios = ref([])

const usuarioNuevo = {
        email: "",
        password: "",
        contraseñaConfirmada: "",
        telefono: "",
        usuario: "",
        rol: "Usuario"
    }


const crearUsuario = () => { 
    const usuario = {
        nombre: usuarioNuevo.usuario,
        password:usuarioNuevo.password ,
        mail: usuarioNuevo.email,
        telefono: usuarioNuevo.telefono,
        rol: usuarioNuevo.rol
    }

     if ( usuarioNuevo.password == usuarioNuevo.contraseñaConfirmada ) {
        fetch("http://localhost:8080/api/usuario",{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(usuario)
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
        alert("Registro exitoso!")
        }
        
    }



</script>

<template>
    <div class="margen">
        <form>
            <div class="mb-3">
                <label for="usuario" class="form-label">Nombre de usuario</label>
                <input v-model="usuarioNuevo.usuario" type="text" class="form-control" id="usuario" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input v-model="usuarioNuevo.email" type="email" class="form-control" id="email" aria-describedby="emailHelp" required>
            </div>
            <div class="mb-3">
                <label for="contraseña" class="form-label">Password</label>
                <input v-model="usuarioNuevo.password" type="password" class="form-control" id="contraseña" required>
            </div>
            <div class="mb-3">
                <label for="contraseñaConf" class="form-label">Confirmar Password</label>
                <input v-model="usuarioNuevo.contraseñaConfirmada" type="password" class="form-control" id="contraseñaConf" required>
            </div>
            <div class="mb-3">
                <label for="Telefono" class="form-label">Telefono</label>
                <input v-model="usuarioNuevo.telefono" type="number" class="form-control" id="Telefono" required>
            </div>
            <button class="btn btn-success" @click="crearUsuario()" >Submit</button>
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