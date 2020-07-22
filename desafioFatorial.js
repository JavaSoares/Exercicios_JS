// Desafio - Fatorial
// Escreva uma função fatorial, que calcule o fatorial
// de um número.
function fatorial(numero){
 var resultado = numero;
     for(var i = 1; i < numero; i++){
       resultado= resultado * i;
    }
     
    return resultado;
}
