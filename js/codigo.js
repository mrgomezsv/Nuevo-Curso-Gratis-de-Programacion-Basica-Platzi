function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado = "Piedra  🪨🪨🪨"
    }else if (jugada == 2) {
        resultado = "Papel  🧻🧻🧻"
    } else if (jugada == 3) {
        resultado = "Tijera  ✂️✂️✂️"
    } else {
        resultado = "MAL ELEGIDO"
    }
    return resultado
}

// 1 es piedra, 2 es tijera, 3 es tijera
let jugador = 0
let triunfos = 0
let perdidas = 0
let empate = 0

while (triunfos < 3 && perdidas < 3){
    pc = aleatorio(1,3)
    jugador = prompt("Elije: 1 para piedra, 2 para papel, 3 para tijera: ")

alert("PC eligio: " + eleccion(pc))
alert("Tu elegiste: " + eleccion(jugador))
    
    //Combate
    if(pc == jugador) {
        alert("Empate")
        empate = empate + 1
    } else if(jugador == 1 && pc == 3){
        alert("Ganaste!!!")
        triunfos = triunfos + 1
    } else if(jugador == 2 && pc == 1){
        alert("GANASTE!!!")
        triunfos = triunfos + 1
    } else if(jugador == 3 && pc == 2){
        alert("GANASTE!!!")
        triunfos = triunfos + 1
    } else {
        alert("PERDISTE")
        perdidas = perdidas + 1
    }
}
alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces. Y empataste " + empate + " veces")

			//alert("Elegiste " + jugador)
			//if(jugador == 1) {
			//	alert("Elegiste Piedra  🪨🪨🪨")
			//}else if (jugador == 2) {
			//	alert("Elegiste Papel  🧻🧻🧻")
			//} else if (jugador == 3) {
			//	alert("Elegiste Tijera  ✂️✂️✂️")
			//} else {
			//	alert("Elegiste PERDER")
			//}
			//eleije pc
			//if(pc == 1) {
			//	alert("PC Elige  🪨🪨🪨")
			//}else if (pc == 2) {
			//	alert("PC Elige Papel  🧻🧻🧻")
			//} else if (pc == 3) {
			//	alert("PC Elige Tijera  ✂️✂️✂️")
			//} else {
			//	alert("PC Elige PERDER")
			//}
			//Combate