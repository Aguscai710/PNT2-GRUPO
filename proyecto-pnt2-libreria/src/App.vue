<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
<div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/Biblioteca">Biblioteca</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Persona">Personas</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Login">Login</router-link>
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

<style scoped>

</style>