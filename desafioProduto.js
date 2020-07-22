// Necessitamos uma função produto que receba um array de
// números e retorne o produto: o resultado de multiplicar
// todos os elementos entre si.
// Por exemplo, produto([1, 4, 7]) deve retornar 28, que
// é 1 * 4 * 7.

// Escreva a função produto
function produto(numero) {
    var resultado= 1;
    var mes = 0;
    for (var i=0; i<numero.length; i++) {
      mes = numero[i];
      resultado= resultado * mes;
    }
    return resultado;
  }
 