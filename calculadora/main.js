function calculo(x){
    var numero = document.getElementById("res").innerHTML
    document.getElementById("res").innerHTML = numero + x
}

function apagar(){
    document.getElementById("res").innerHTML = "" 
}

function apg1(){
    var resultado = document.getElementById("res").innerHTML
    document.getElementById("res").innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById("res").innerHTML
    if(resultado.length > 0){
        document.getElementById("res").innerHTML = eval(resultado)
    }
    else{
        document.getElementById("res").innerHTML = "Inválido"
    }
}