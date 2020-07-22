var seriesFavoritasDaAna = 
["Game of Thrones", "Breaking Bad", "House of Cards"];
var seriesFavoritasDoHeitor = ["Blindspot", "Blacklist"];

console.log(seriesFavoritasDaAna[0]);
console.log(seriesFavoritasDaAna[1]);
console.log(seriesFavoritasDaAna[2]);

console.log(seriesFavoritasDoHeitor[0]);
console.log(seriesFavoritasDoHeitor[1]);

var bemVindo = ["olá", "mundo"];
var oiVoce = ["olá", "olá"];

console.log(bemVindo[0]);
console.log(bemVindo[1]);
console.log(oiVoce[0]);
console.log(oiVoce[1]);

console.log(seriesFavoritasDoHeitor);

var numerosDeLoteria = [2, 11, 17, 32, 36, 39];
var girosDeDado = [1, 6, 6, 2, 2, 4];
var saiuCara = [false, false, true, false];
var listaDeNumeros = [[1, 2, 3], [4, 5, 6]];
console.log(numerosDeLoteria);
console.log(saiuCara);
console.log(listaDeNumeros);
console.log(girosDeDado);

var numerosDeLoteria = [22,40,12]
var vazio = []
var doisNumeros = [4, 3]

console.log(numerosDeLoteria.length);
console.log(vazio.length);
console.log(doisNumeros.length);

// incluir elementos utilizando o método .push
var pertences = ["espada", "escudo", "crossbow"];
console.log(pertences);
pertences.push("cross");
console.log(pertences);


var umArray = [1, 2, 3];
var outroArray = [4, 5];

function mover(){
   umArray.pop(2);
   outroArray.push(3);
}
mover();
console.log(umArray);
console.log(outroArray);

// outra forma de mover com a função com duas propriedades
var umArray = [1, 2, 3];
var outroArray = [4, 5];
function mover1(umArray, outroArray){   
   var pegarElemento = umArray.pop(2); 
   outroArray.push(pegarElemento);   
}
// teste indexof onde não existe, resultado -1
var diasDeTrabalho = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"];
var dia = diasDeTrabalho.indexOf("osvaldo");
console.log(dia);

// usando o indexOf, se existir True senão False
var array = [1, 6, 7, 6];

function contem(array, numero){
   for(var i = 0; i < array.length ; i++){
    if(array.indexOf(numero) != -1)
     return true;
    }
    return false;
}

// pedir para imprimir um elemento que não exista na lista
// a resposta será undefined
var lista = [];
console.log(lista[2]);

// cor da medalha
var medalha = ["ouro", "prata", "bronze"];

function medalhaDeAcordoComPosto(numero){
 numero -= 1; 
  if( numero < 0 || numero > medalha.length-1 ) return "nada";

  return medalha[numero];
}

console.log(medalhaDeAcordoComPosto(1));

// soma
var lucroUltimoSemestre = [50, -12, 1000, 300, 200, 0];

function lucroTotal4(umPeriodo) {
   var soma = 0;
   soma = soma + umPeriodo[0];
   soma = soma + umPeriodo[1];
   soma = soma + umPeriodo[2];
   soma = soma + umPeriodo[3];
   return soma ;
 }

// outro exemplo de soma

function lucroTotal(umPeriodo) {
   var soma= 0;
   var mes = 0;
   for (var i=0; i<umPeriodo.length; i++) {
     mes = umPeriodo[i];
     soma= soma+ mes;
   }
   return soma;
 }

console.log(lucroTotal([]));
console.log(lucroTotal([100]));
console.log(lucroTotal([100, 2]));
console.log(lucroTotal([2, 10, -20]));
console.log(lucroTotal([2, 10, -20, 0, 0, 10, 10]));

// saber em qual mês teve lucro, mes > 0
// exemplo abaixo
//A função quantidadeDeMesesComLucro([0, 3, -1, 5]) deve retornar 2
//A função quantidadeDeMesesComLucro([10, -10, 2, 100]) deve retornar 3
function quantidadeDeMesesComLucro(umPeriodo) {
   let quantidade= 0;
   for (let mes=0; mes< umPeriodo.length; mes++) {
     if(umPeriodo[mes] > 0){
        quantidade = quantidade + 1;
     }
   }
   return quantidade;
 }

// função que verifica quantidade de mês com perda
function quantidadeDeMesesComPerda(umPeriodo) {
   let quantidade= 0;
   for (let mes=0; mes< umPeriodo.length; mes++) {
     if(umPeriodo[mes] < 0){
        quantidade = quantidade + 1;
     }
   }
   return quantidade;
 }

// Para saber o saldo dos meses
function saldoDeMesesComLucro (umPeriodo) {
   var saldo = [];
   for (let mes=0; mes< umPeriodo.length; mes++) {
     if(umPeriodo[mes] > 0){
       saldo.push(umPeriodo[mes]);
     }
   }
   return saldo;
 }

 // Naipe de Truco
 function naipeDeTruco(naipe) {
   var resultado = [];
   for (var i = 1; i <= 12; i++) {
     if (i == 8) {
       i = i + 1;
     } else {
       resultado.push(i + " de " + naipe);
     }
   }
   return resultado;
 }
