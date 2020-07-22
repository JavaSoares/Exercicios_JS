// Necessitamos uma função maisMenos que receba um array
// e retorne outro com os seguintes três números:

// na primeira posição, a fração de números que são
// positivos
// na segunda posição, a fração de números que são zero
// na última posição, a fração de números que são negativos
// Por exemplo, maisMenos([1, 2, 0, -1]) deveria retornar
// [0.5, 0.25, 0.25], devido a que há 50% de positivos,
// 25% de zeros, e 25% de negativos.
// Escreva a função maisMenos.

function maisMenos(numeros) {
     var quantidade = numeros.length
     var positivos = 0;
     var zeros = 0;
     var negativos = 0;
     for (var i = 0; i < quantidade; i++) {
       if (numeros[i] < 0) {
         negativos = negativos + 1;  
       } else if (numeros[i] > 0) {
         positivos = positivos + 1;  
       } else {
         zeros = zeros + 1;  
       }
     }
    
     positivos = positivos / quantidade;
    
     zeros = zeros / quantidade;
    
     negativos = negativos / quantidade;
    
     var total = [positivos, zeros, negativos];
    
     return total;
    }

    console.log (maisMenos([1,2,0,-1]))

