<script setup>
  import { useStoreLogin } from '../stores/storeLogin.js';
const store = useStoreLogin()

</script>
<template>
  <div class="chau">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="nav-link" to="/Biblioteca"><i class='bx bxs-book-heart bx-lg'></i></router-link>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li class="nav-item">
            <router-link class="nav-link" to="/MisLibros">Mis Libros</router-link>
          </li>
          <div v-if="store.usuarioLogueado.id != 0">
          <li class="nav-item">
            <router-link class="nav-link" to="/RegistroLibro">Crear Libro</router-link>
          </li>
        </div>
          <li class="nav-item">
            <router-link class="nav-link" to="/Peticiones">Libros Solicitados</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Confirmacion">Libros a Confirmar</router-link>
          </li>
          <li v-if="store.usuarioLogueado.rol == 'Administrador'" class="nav-item">
            <router-link class="nav-link" to="/Estadistica">Estadisticas Generales</router-link>
          </li>
        </ul>
        <div v-if="store.usuarioLogueado.id == 0">  
        <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
            <router-link class="nav-link" to="/Login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Registrarse">Registrarse</router-link>
          </li>
        </ul>
      </div>
      <div v-if="store.usuarioLogueado.id != 0">
        <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <h4>{{store.usuarioLogueado.name}}</h4>
          </li>
          <li class="nav-item">
            <button class="btn btn-danger" @click.prevent="store.Logout">Logout</button>
          </li>
        </ul>
      </div>
     

      </div>
    </div>
  </nav>


  
 <div class="algo">
     <RouterView></RouterView>
 </div>

  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p class="text-center text-muted">©️ 2023 BookXchange, Inc</p>
  </footer>
  </div>



</template>

<style scoped>
.back{
  background-color: black;
}
footer{
  width: 100%;
  bottom: 0;
  font-size: 1.2em;
  margin-top: auto;
}
.algo{
  min-height: 620px;
}




</style>