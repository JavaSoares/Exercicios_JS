var diaDaSemana = "domingo";

if (diaDaSemana == "domingo") {
    console.log("Hoje é dia de futebol!!!");
}

// exemplo em else
function hojeSeJoga(dia) {
    if (dia == "domingo") {
        return "Hoje é dia de futebol! ! !";
    } else {
        return "Hoje não é dia de futebol :(";
    }
}

function eMaior(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}

var maior = eMaior(10, 4);

console.log(maior);


function sinal(n) {
    if (n == 0) {
        return "zero";
    } if (n > 0) {
        return "positivo";
    } else
        return "negtivo";
}

var x = sinal(1);
console.log(x);

// Numero da sorte, se é positivo
// e se for multiplo de 2 ou 3
// e se é diferente de 15
// Para descobrir se um número é 
// multiplo de outro o resto da divisão 
// deve resultar em 0. 15/3 = 5 e o resto
// é 0. Em programação para sabermos o resto
// de uma divisão, usamos o símbolo de porcentagem
// (%). Assim: 15%3 == 0, dessa forma sabemos que 
// 15 é múltiplo de 3.
function eNumeroDaSorte(multiplo) {
    return multiplo > 0 && multiplo % 2 == 0 || multiplo % 3 == 0 && multiplo != 15;
}

var num = eNumeroDaSorte(3);
console.log(num);

// Defina a função possoIrAoBanco que, receba dois 
// parâmetros, o primeiro é diaDaSemana (string)
// e o segundo horaAtual(numero), a função deve
// retornar true, apenas se o banco estiver aberto.
function possoIrAoBanco(diaDaSemana, horaAtual) {
    return diaDaSemana != "Sábado" && diaDaSemana != "Domingo" && horaAtual > 9 && horaAtual < 15;
}


function filosofoHipster(profissao, nacionalidade, quilometro) {
    return profissao == "Musico" && nacionalidade == "Brasileira" && quilometro >= 2;
}

var filo = filosofoHipster("Musico", "Brasileira", 8);
console.log(filo);

// pode se aposentar
function podeSeAposentar(idade, sexo, contribuicao) {
    return sexo == "F" && idade >= 60 && contribuicao >= 30 || sexo == "M" &&
        idade >= 65 && contribuicao >= 30;
}

var ex = podeSeAposentar(65, "M", 30);
console.log(ex);

//pode subir roda gigante
function podeSubir(alturaPessoa, vemComCompanhia, temProblemaCardiaco) {
    return temProblemaCardiaco == false &&
        alturaPessoa == 1.2 &&
        vemComCompanhia == true || alturaPessoa >= 1.5 &&
        temProblemaCardiaco == false;
}

var subir = podeSubir(1.1, true, false);
console.log(subir);

// medalha de oura
function medalhaSegundoOPosto(posto) {
    if (posto == 1) {
        return "ouro";
    } if (posto == 2) {
        return "prata";
    } if (posto == 3) {
        return "bronze";
    } else
        return "Continue participando";

}

for (var i = 0; i < 11; i++) {
    var resultado = i * 7
    console.log("7 x " + i + " = " + resultado)
}

for (i = 0; i < 7; i++) {
    console.log("Bom dia, grupo!")
}

var listaDeCarros = ["Fox", "Uno", "Gol", "Astra", "Fiesta"]

// Seu loop aqui:
for (i = 0; i < listaDeCarros.length; i++) {
    console.log(listaDeCarros[i])
}

var listaDeLucro = [100, 30, 300, -10, 600, 10]
var lucroTotal = 0;
for (i = 0; i < listaDeLucro.length; i++) {
    lucroTotal = lucroTotal + listaDeLucro[i]
}
console.log(lucroTotal)

var listaDeGanhos = [10, 30, -10, -5, -1, 40]
var totalNegativos = 0

//seu loop aqui:
for (i = 0; i < listaDeGanhos.length; i++) {
    if (listaDeGanhos[i] < 0) {
        totalNegativos++
    }
}
console.log(totalNegativos)

var listaDeFrutas = ["Uva", "Banana", "Manga", "Cajá", "Pinha"]
var busca = "Cajá"

//seu loop aqui
for (i = 0; i < listaDeFrutas.length; i++) {
    if (busca == listaDeFrutas[i]) {
        console.log("Sim, temos a fruta " + busca + " disponível")
    }
}

var cartela = [8, 13, 18, 22, 42, 49]
var numeroSorteado = 42

//usando o break
for (i = 0; i < cartela.length; i++) {
    if (cartela[i] == numeroSorteado) {
        console.log("Encontrei o número!")
        break
    }
}

//imprime apenas números pares, usando o continue que pula o número.
for (i = 0; i < 21; i++) {
    if (i % 2 == 0) {
        console.log(i)
        continue
    }
}
// Temos uma lista com nomes de todos os integrantes da família mas esqueceram de colocar o sobrenome! 
// Seu desafio será imprimir nome junto com o sobrenome “Macedo” para cada integrante da família. 
// Mas temos uma exceção, temos um integrante com sobrenome diferente, se tiver algum “Pedro”, coloque o sobrenome “Sousa”.

var familia = ["Joana", "Felipe", "Gabriela", "Carlos", "Pedro", "Bruno"]

for (i = 0; i < familia.length; i++) {
    var sobrenome = " Macedo"
    if (familia[i] == "Pedro") {
        sobrenome = " Sousa"
    }
    console.log(familia[i] + sobrenome)
    continue
}
