<script setup>
import { onMounted,ref } from 'vue';


let libros=ref([]);

let estadistica=ref({
    
})

const ObtenerLibros=()=> {
			//Arma el link con la pagina
			fetch("http://localhost:8080/api/libro", {
				method: "GET",
				headers: { "content-type": "application/json" },
			})
				.then((res) => {
					if (res.ok) {
						return res.json();
					}
					// handle error
				})
				.then((data) => {
					libros.value=data.data//foreach y poner solo las del usuario logueado
				})
				.then((tasks) => {
					// Do something with the list of tasks
				})
				.catch((error) => {
					// handle error
				});
		}

const ObtenerEstadisticas=()=> {
			//Arma el link con la pagina
			fetch("http://localhost:8080/api/estadistica/1", {
				method: "GET",
				headers: { "content-type": "application/json" },
			})
				.then((res) => {
					if (res.ok) {
						return res.json();
					}
					// handle error
				})
				.then((data) => {
					estadistica.value=data.data //foreach y poner solo las del usuario logueado
				})
                .catch((error) => {
					// handle error
				});
				
				
		}
let peticiones=ref([])
    const ObtenerPeticiones = () => {
	//Arma el link con la pagina
	fetch("http://localhost:8080/api/peticion", {
		method: "GET",
		headers: { "content-type": "application/json" },
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			// handle error
		})
		.then((data) => {
	    peticiones.value=data.data //foreach y poner solo las del usuario logueado
		})

		.catch((error) => {
			// handle error
		});
}
onMounted(()=>{
    ObtenerEstadisticas();
    ObtenerPeticiones();
    ObtenerLibros();
})
</script>

<template>
<div class="estadisticas-container">
    <h1 class="titulo">Estadísticas de Intercambios</h1>

    <div class="cuadro cuadro-superior-izquierda">
      <div class="numero-grande">{{ estadistica.aceptados }}</div>
      <div class="texto-pequeno">Intercambios completados</div>
    </div>

    <div class="cuadro cuadro-superior-derecha">
      <div class="numero-grande">{{ estadistica.rechazados }}</div>
      <div class="texto-pequeno">Intercambios en rechazados</div>
    </div>

    <div class="cuadro cuadro-inferior-izquierda">
      <div class="numero-grande">{{ peticiones.length }}</div>
      <div class="texto-pequeno">Peticiones</div>
    </div>

    <div class="cuadro cuadro-inferior-derecha">
      <div class="numero-grande">{{ libros.length }}</div>
      <div class="texto-pequeno">Libros totales</div>
    </div>
  </div>
</template>

<style scoped>
.estadisticas-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  height: 100vh;
  padding: 20px;
}

.titulo {
  grid-column: 1 / -1;
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.cuadro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
}

.numero-grande {
  font-size: 36px;
  font-weight: bold;
}

.texto-pequeno {
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}

.cuadro-superior-izquierda {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  background-color: white;
}

.cuadro-superior-derecha {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background-color: white;

}

.cuadro-inferior-izquierda {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background-color: white;

}

.cuadro-inferior-derecha {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-color: white;

}
</style>

