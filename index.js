document.getElementById('daleClick').addEventListener('click', function() {
    alert('¡Botón clicado!')})

let primerNumero = document.getElementById("primerNumero")
console.log(primerNumero)
let contadorNumeroUno = 0

let segundoNumero = document.getElementById("segundoNumero")
console.log(segundoNumero)
let contadorNumeroDos = 0

let resultadoOperacionFinal = document.getElementById("resultadoOperacionFinal")
console.log(resultadoOperacionFinal)
let contadorNumeroFinal = 0

//operaciones para sumar o restar a numero 2
function sumaNumerosUno(){
    contadorNumeroUno = contadorNumeroUno + 1
    primerNumero.innerText = contadorNumeroUno 
}

function restaNumerosUno(){
    if(contadorNumeroUno >0){
    contadorNumeroUno = contadorNumeroUno - 1
    primerNumero.innerText = contadorNumeroUno 
    }
}

function sumaDiezNumeroUno(){
    contadorNumeroUno = contadorNumeroUno + 10
    primerNumero.innerText = contadorNumeroUno 
}

function restaDiezNumeroUno(){
    if(contadorNumeroUno >10){
        contadorNumeroUno = contadorNumeroUno - 10
        primerNumero.innerText = contadorNumeroUno 
        }
}

//operaciones para sumar o restar a numero 2

function sumaNumerosDos(){
    contadorNumeroDos = contadorNumeroDos + 1
    segundoNumero.innerText = contadorNumeroDos 
}

function restaNumerosDos(){
    if(contadorNumeroDos >0){
    contadorNumeroDos = contadorNumeroDos - 1
    segundoNumero.innerText = contadorNumeroDos
    }
}

function sumaDiezNumeroDos(){
    contadorNumeroDos = contadorNumeroDos + 10
    segundoNumero.innerText = contadorNumeroDos 
}

function restaDiezNumeroDos(){
    if(contadorNumeroDos >10){
        contadorNumeroDos = contadorNumeroDos - 10
        segundoNumero.innerText = contadorNumeroDos
        }
}

//operaciones cuando ya tengas definido los valores de numero 1 y numero2
function sumaNumerosFinal(){
    contadorNumeroFinal = contadorNumeroUno + contadorNumeroDos
    resultadoOperacionFinal.innerText = contadorNumeroFinal

}

function multiplicarNumeros(){
    contadorNumeroFinalMult = contadorNumeroUno * contadorNumeroDos
    resultadoOperacionFinal.innerText = contadorNumeroFinalMult
}