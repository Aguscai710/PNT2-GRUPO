<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="nav-link" to="/Biblioteca"><i class='bx bxs-book-heart bx-lg'></i></router-link>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/Persona">Personas</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/MisLibros">Mis Libros</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Peticiones">Peticiones</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Confirmacion">Confirmacion</router-link>
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/Login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Registrarse">Registrarse</router-link>
          </li>
        </ul>

      </div>
    </div>
  </nav>


  <RouterView></RouterView>
</template>

<script setup>

</script>

<style scoped></style>