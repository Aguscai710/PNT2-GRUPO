function piedra(){
    var numeroMaquina = Math.floor(Math.random() * 3) + 1;
    console.log(numeroMaquina)
    switch(numeroMaquina){
        case 1:
            sumarYo()
            sumarMaquina()
            break
        case 2:
            sumarMaquina()
            break
        case 3:
            sumarYo()
    }
    verificarGanador()
}
function papel() {
	var numeroMaquina = Math.floor(Math.random() * 3) + 1;
	console.log(numeroMaquina);
	switch (numeroMaquina) {
		case 1:
			sumarYo();
			
			break;
		case 2:
			sumarYo();
            sumarMaquina();
			break;
		case 3:
			sumarMaquina();
	}
	verificarGanador();
}
function tijera() {
	var numeroMaquina = Math.floor(Math.random() * 3) + 1;
	console.log(numeroMaquina);
	switch (numeroMaquina) {
		case 1:
			
			sumarMaquina();
			break;
		case 2:
			sumarYo()
			break;
		case 3:
			sumarYo();
            sumarMaquina();
	}
	verificarGanador();
}
function verificarGanador(){
    var misPuntos = document.getElementById('yo').innerHTML
    var susPuntos = document.getElementById('maquina').innerHTML
    if(misPuntos>=5){
        alert("Gane yo")
    }else if(susPuntos>=5){
        alert("Gano la maquina")
    }
}

function sumarYo(){
    var misPuntos = document.getElementById('yo')
    misPuntos.innerHTML = parseInt(misPuntos.innerHTML)+1
}
function sumarMaquina() {
	var susPuntos = document.getElementById("maquina");
	susPuntos.innerHTML = parseInt(susPuntos.innerHTML) + 1;
}

