
<script setup>
    import {ref,onMounted} from 'vue'
    import { useStoreLogin } from '../../stores/storeLogin.js';

    const store = useStoreLogin()


</script>

<template>

    {{ store.usuarioLogueado }}
    <div class="background">
        <div class="margen">
            <form>
                <div class="mb-3">
                    <label for="mail" class="form-label">Email address</label>
                    <input v-model="store.usuarioRegistrado.mail" type="email" class="form-control" id="mail" aria-describedby="emailHelp" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input v-model="store.usuarioRegistrado.password" type="password" class="form-control" id="password" required>
                </div>
                <button class="btn btn-success" @click="store.LoguearUsuario()">Submit</button>
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