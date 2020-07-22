function somar(numero1, numero2){
    return numero1 + numero2;
}
function triplo(valor){
    return valor * 3;
}
function triploDaSoma(numero3, numero4){
    var resultado = somar(numero3, numero4);

    return triplo(resultado);
}

var total = triploDaSoma(5, 5);

// usando string na função e somando a quantidade usando
// .length
function tamanhoNomeSobrenome(nome, sobrenome){
    var res = nome.length + " ".length + sobrenome.length;
    return res;
}

var nome = tamanhoNomeSobrenome("jair", "Soares");
console.log(nome);

