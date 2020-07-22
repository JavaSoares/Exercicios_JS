// Queremos representar uma escada com altura variável,
// utilizando um array de strings.

// Por exemplo, uma escada com altura 3, representaremos
// com o seguinte array:
// var escada3 = [
// "  #",
// " ##",
// "###"
// ]

// var escada5 = [
// "    #",
// "   ##",
// "  ###",
// " ####",
// "#####"
// ]
// Escreva uma função escada que utilize uma altura
// (um número) e retorne um array que represente a
// escada correspondente.

function escada(numeroDegraus) {
    var degrausEscada = [];
    for (let i = 1; i <= numeroDegraus; i++) {
      var degraus = "#".repeat(i);
      degrausEscada.push(degraus);
    }
    return degrausEscada;
  }
  
  console.log(escada(5));

  // outro exemplo
  function escada(altura){
    let lista = [];
    for(let i = 1; i <= altura; i++){
      let espaco = altura - i;
      lista.push(" ".repeat(espaco) + "#".repeat(i));
    }
    return lista;
  }

  console.log(escada(6));
