// Neste exercício, crie a função  dobro tendo como base 
// o exemplo acima. O objetivo é fixar o seu entendimento
// sobre a estrutura de declaração de uma função.

function dobro(numero) {
    return numero * 2;
}

// Vamos praticar juntos: escreva agora uma função metade,
// que pega um número como parâmetro e retorna sua metade.

function metade(numero) {
    return numero / 2;
}

// Escreva a função multiplicar que receba dois parâmetros,
// multiplique-os e retorne o resultado da multiplicação.

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

// Queremos criar funções que nos permitam calcular a área
// e o perímetro de um círculo.
// valor de π é 3.14. 
// perimetro = π * raio * 2; area = π * raio * raio;
function perimetro(numero1) {
    var valor = 3.14 * numero1 * 2;
    return valor;
}

function area(numero2) {
    var resultado = 3.14 * numero2 * numero2;
    return resultado;
}


function listarProdutos() {
    var lista = ['Leite', 'tomate', 'Biscoito', 'Tapioca']
    for (var i = 0; i < lista.length; i++) {
        console.log(lista[i])
    }
}
listarProdutos()

function tabuadaDoSete() {
    for (i = 1; i < 11; i++) {
        var resultado = 7 * i
        console.log("7 x " + i + " = " + resultado)
    }
}
tabuadaDoSete()

function menorNumero(numA, numB) {
    if (numA < numB) {
        return numA
    } else {
        return numB
    }
}
// Verifica o menor numero
var menor = menorNumero(6, 12)
console.log(menor)

console.log(menorNumero(10, 5))

// calcula a autonomia do veiculo
function autonomia(combustivel, rendimento) {
    return combustivel * rendimento
}
console.log(autonomia(10, 5))

// calcula o valor
function calculaValorDevido(pesoDaRoupaSuja) {
    return pesoDaRoupaSuja * 3.00 + 10.00
}

console.log(calculaValorDevido(8))

// função para saber se letra começa com maiuscula e miniscula
function comecaComMaiuscula(palavra) {
    return /^[A-Z]/.test(palavra)
}

var palavras = ["Amor", "copo", "Bolacha", "biscoito"];

// Seu código vem aqui embaixo.
for (i = 0; i < palavras.length; i++) {
    if (comecaComMaiuscula(palavras[i])) {
        console.log("Começa com maiúscula")
    } else {
        console.log("Não começa com maiúscula")
    }
}

// A função a seguir (calculaIdade) não precisa ser alterada
// A sua função deve ser escrita logo abaixo desta
function calcularIdade(dataDeNascimento) {
    var [dia, mes, ano] = dataDeNascimento.split('/');
    var d = new Date();
    var anoAtual = d.getFullYear();
    var mesAtual = d.getMonth() + 1;
    var diaAtual = d.getDate();
    ano = +ano; mes = +mes; dia = +dia;
    var quantosAnos = anoAtual - ano;
    if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
        quantosAnos--;
    }
    return quantosAnos < 0 ? 0 : quantosAnos;
}

console.log(calcularIdade("05/11/1967"))

function deixaEntrar(dataDeNascimento, censura) {
    dataDeNascimento = calcularIdade(dataDeNascimento)
    return dataDeNascimento >= censura
}

console.log(deixaEntrar("05/11/1967", 18))


// Usando funções - Filtrar produtos
// Uma loja virtual permite a seus visitantes filtrar produtos pelo preço. Existe um array com os preços dos produtos.
//  Um programador já criou uma função maisBaratosQue(valor, precos) que retorna um array com os preços dos produtos mais 
//  baratos que o valor passado como parâmetro. Outro programador já criou uma função maisCarosQue(valor, precos) que
//  retorna um array com os preços mais caros que o valor passado como parâmetro. Chegou sua vez!
// Crie uma função precosEntre(valorMenor, valorMaior, precos) que deve utilizar as funções maisBaratosQue e maisCarosQue
//  para retornar os preços que estão entre o valorMenor e o valorMaior. Sua função deve receber então dois parâmetros:
// valorMenor para representar o valor mínimo dos preços a serem listados
// valorMaior para representar o valor máximo dos preços a serem listados
// precos para representar um array com os preços dos produtos
// Ela deve retornar um array com todos os preços entre valorMenor e valorMaior
function maisBaratosQue(valor, precos) {
    return precos.filter(p => p <= valor);
}

function maisCarosQue(valor, precos) {
    return precos.filter(p => p >= valor);
}

// resposta
function precosEntre(valorMenor, valorMaior, precos) {
    var maisBaratos = maisBaratosQue(valorMaior, precos);
    return maisCarosQue(valorMenor, maisBaratos);
}

// Funções Nativas - Estava presente na aula?
// var nomeDoAluno = "Maria"

// var nomesDosPresentes = ["João", "Silva", "Vanderley"]
function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes) {

    if (nomesDosPresentes.indexOf(nomeDoAluno) != -1) {
        return true
    } else {
        return false
    }
}

estavaPresenteNaAula("Maria", ["Matheus", "Leticia", "Caio"])

// Funções Nativas - transformaParaMaiusculo
function transformaParaMaiusculo(array) {
    var maiusculos = new Array();

    for (var i = 0; i < array.length; i++) {

        array[i] = array[i].toUpperCase();

        maiusculos.push(array[i]);

    }

    return maiusculos;

}

// Função Gerar Dezenas
function gerarDezenas() {

    var array = Array();

    for (var i = 0; i < 6; i++) {

        array.push(Math.round(Math.random * 59) + 1);

    }

}

//  Funções Nativas - Maximo e Minimo
function maxmin(a, b, c, d, e) {
    var array = [];
    for (var i = 0; i < 5; i++) {
        return array.push(Math.min(maxmin).push(Math.max(maxmin)));
    }
}

// Variáveis, if e loop
// No fim de semana o elevador do nosso prédio quebrou, restringindo muito o fluxo de pessoas.
// Considerando isso, apenas os moradores dos apartamentos com número par poderão usar o elevador.
// Escreva um código que, com base na variável moradores nos informe quais moradores poderão utilizar o elevador. 
// O número do apartamento é a sua posição no array, e o nome do morador é o valor.
// Imprima no console a lista a seguinte frase: 'O morador ' + nome do morador + ' pode usar o elevador'
var moradores = [
    "Fulano de Tal",
    "Beltrano da Cia",
    "Viajante do Tempo",
    "Morador da Lua",
    "Marciano Azul",
    "Et da Eslováquia",
    "Jedi do Lado Cinza da Força",
    "Baby Yoda Amarelo"
]

for (var i = 0; i < moradores.length; i++) {
    if (i % 2 == 0) {
        console.log('O morador ' + moradores[i] + ' pode usar o elevador')
    }
}

// Dados de um usuário
// Em uma  academia está acontecendo um cadastro de vários usuários contendo as seguintes informações: nome, idade e altura. E para realizar um determinado treino, existe alguns requisitos: Ter 18 anos ou mais e ter uma altura igual ou maior a 1,70.

// Crie uma função chamada maiorAlto que retorne verdadeiro (true) caso ele atenda os requisitos, e falso (false) para o contrário. Nessa função você irá receber um parâmetro que será um array, contendo na primeira posição o nome, segunda posição a idade do aluno e na terceira contendo a altura em Centímetros.
var usuario1 = ['Et da Estônia', 17, 170]
var usuario2 = ['Pessoa do Pântano', 39, 198]
var usuario3 = ['Homem da Lua Virada', 21, 149]
var usuario4 = ['Pequena Paulistana', 18, 171]
var usuario5 = ['Menino da Porteira', 13, 142]

function maiorAlto(array) {
    if (array[1] >= 18 && array[2] >= 170) {
        return true
    } else {
        return false
    }
}

// Academia
// Uma academia precisa separar grupos de pessoas tendo como base a sua 
// altura para que dessa forma consiga formar grupos para as aulas de zumba.
// Temos um array que lista a altura de cada aluno da academia, e outros 3 arrays (Grupo A, B e C) 
// que são classificados da seguinte forma: 

// grupoA - Alunos com altura entre 150 a 159
// grupoB - Alunos com altura entre 160 a 169
// grupoC - Alunos com altura de 1.70 ou mais
// Seu trabalho é pegar cada valor do array alunos e colocar o valor correspondente em seu 
// respectivo grupo. Para esse exercício, você precisará usar loops, condicionais e funções de arrays. 

var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

var grupoA = []
var grupoB = [];
var grupoC = [];

for (var i = 0; i < alunos.length; i++) {
    if (alunos[i] >= 170) {
        grupoC.push(alunos[i]);
    } else if (alunos[i] >= 160) {
        grupoB.push(alunos[i]);
    } else {
        grupoA.push(alunos[i]);
    }
}

//  Estacionamento 
//  Um estacionamento deseja automatizar a cobrança de mensalistas.
//  Para isso decidiu simplificar a forma de calcular o valor devido pelo seu cliente.
//  A quantia a ser paga pelos seus usuários depende do número de entradas que o veículo realiza no estacionamento. 
//  A cada entrada, a placa do veículo é registrada. Ao final do mês, conta-se o número de entradas que o veículo 
//  realizou e faz-se o seguinte cálculo: Se o motorista realizou até 20 entradas, ele deve pagar R$ 10,00 por 
//  entrada realizada. Da vigésima primeira entrada em diante, cada entrada custa R$ 5,00 ao cliente. 
//  Agora, você vai deve ajudar na automatização da cobrança escrevendo duas funções. 
//  A primeira função se chama calcularNumeroDeEntradas(placa). 
//  Ela deve receber um único parâmetro que representa a placa de um carro. 
//  A função deve retornar o número de entradas que esse carro realizou no estacionamento. 
//  Em outras palavras, o número de vezes que a placa passada como parâmetro aparece no array placas.
// Esse array é utilizado dentro das funções. Cada placa neste array representa
// uma entrada do respectivo veículo no estacionamento. Não é necessário alterar
// esse array.

var placas = [
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'RXB-2525', 'AKX-3333', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142', 'AKX-3333', 'ORO-7142', 'ORO-7142',
    'ORO-7142', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'ORO-7142', 'ORO-7142',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333', 'AKX-3333', 'RXB-2525'
]

function calcularNumeroDeEntradas(placa) {
    var numeroEntradas = 0
    for (i = 0; i < placas.length; i++) {
        if (placas[i] == placa) {
            numeroEntradas++;
        } else {
        }
    }
    return numeroEntradas;
}

function calcularValorDevido(placa) {
    var entradas = calcularNumeroDeEntradas(placa);
    if (entradas < 21) {
        return entradas * 10
    } else if (entradas >= 21) {
        return entradas * 20
    }
}

// Cinema
// Em um site sobre cinema, os visitantes cadastrados podem dar notas de 0 a 5 
// para um filme que ele tenha assistido. Cada filme tem um grande array de notas
// atribuídas pelos visitantes. Contudo, além de dar notas para os filmes, os 
// visitantes querem ver o que as outras pessoas acharam do filme! 
// É aí que você entra com seu código:

// Escreva uma função calculaGostos(notas)

// Essa função deve ser escrita para receber somente um parâmetro: 
// um array de notas. Ela deve retornar também um array com três elementos:

// O primeiro, com a quantidade de notas iguais a 0 ou 1. Seriam os que não gostaram do filme
// O segundo, com a quantidade de notas iguais a 2 ou 3. Seriam os que acharam o filme mediano
// O terceiro, com a quantidade de notas iguais a 4 ou 5. Seriam os que gostaram do filme.

var notas = [0, 1, 4, 1, 5, 0, 5, 0, 1, 3, 3, 2]
function calculaGostos(notas) {
    var nNaoGostaram = 0
    var nMediano = 0
    var nGostaram = 0

    for (var i = 0; i < notas.length; i++) {
        if ((notas[i] == 0) || (notas[i] == 1)) {
            nNaoGostaram++;
        } else if ((notas[i] == 2) || (notas[i] == 3)) {
            nMediano++;
        } else {
            nGostaram++;
        }
    }
    return [nNaoGostaram, nMediano, nGostaram];
}

console.log(calculaGostos(notas))

// Programar uma função filme que recebe três arrays com os nomes de personagens, 
// filmes e ano de estréia no cinema. A função deve receber também um valor de id 
// escolhido pelo usuário com intervalo de 1 até o tamanho máximo dos arrays 
// fornecidos e retornar uma frase com o seguinte modelo: 
// "personagem é um personagem do filme filme que estreou no cinema em lançamento." 
// Se o valor de id for inválido, a função deve retornar a frase "Essa não é uma opção válida."

personagens = ["Hermione", "Trinity", "Leia"]
filmes = ["Harry Potter", "Matrix", "Star wars"]
lancamentos = [2001, 1999, 1977]
id = 3

// Deve retornar a string:
// Leia é um personagem do filme Star wars que estreou no cinema em 1977.

function filme(personagens, filmes, lancamentos, id) {
    // Escreva abaixo o seu código:
    if ((id > 0) && (id <= filmes.length)) {
        var opt = id - 1;
        return personagens[opt] + " é um personagem do filme " + filmes[opt] + " que estreou no cinema em " + lancamentos[opt] + ".";
    } else {
        return "Essa não é uma opção válida.";
    }
}

// Séries
// Programe uma função series que recebe dois parâmetros, um prefixo 
// com o nome da série e um array com a lista de todos os episódios 
// da série. A função deve retornar um novo array com a lista de 
// episódios iniciando com o nome da série.

// Exemplo: Dadas as variáveis abaixo:

harryPotterPrefixo = "Harry Potter";
harryPotterSeries = [
    "e a Pedra Filosofal",
    "e a Câmara Secreta",
    "e o Prisioneiro de Azkaban",
    "e o Cálice de Fogo",
    "e a Ordem da Fênix",
    "e o Enigma do Príncipe",
    "e as Relíquias da Morte"
];

// A função deve retornar como resultado o seguinte array:
// resultado = [
//     "Harry Potter e a Pedra Filosofal",
//     "Harry Potter e a Câmara Secreta",
//     "Harry Potter e o Prisioneiro de Azkaban",
//     "Harry Potter e o Cálice de Fogo",
//     "Harry Potter e a Ordem da Fênix",
//     "Harry Potter e o Enigma do Príncipe",
//     "Harry Potter e as Relíquias da Morte"
//   ];

function series(prefixo, array) {
    // Escreve sua função abaixo:
    var resultado = []
    for (var i = 0; i < array.length; i++) {
        resultado.push(prefixo + ' ' + array[i])
    }
    return resultado
}

// Maior que o número
// Programe uma função maiorQueNum que busca em um dado array apenas 
// os números maiores do que o número fornecido no segundo parâmetro 
// da função e retorna um novo array apenas com esses números.

// Exemplo:
// numeros = [10, 4, 7, 128, 42, -1, 0, 300, -5]
// num = 5

// resposta = [10, 7, 128, 42, 300]

function maiorQueNum(array, num) {
    // Escreva abaixo o seu código:
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        if (array[i] > num) {
            newArray.push(array[i])
        }
    }
    return newArray
}

// Buscar divisível por
// Programe uma função buscarDivisivelPor que recebe dois parâmetros, 
// um array de números e um número de teste, retornando como resposta o 
// primeiro número do array que seja divisível pelo número dado e diferente 
// de zero. Caso nenhum número do array passe no teste, retorne o texto 
// "Nenhum número válido encontrado!".

function buscarDivisivelPor(array, num) {
    // Escreva abaixo o seu código:
    for (var i = 0; i < array.length; i++) {
        if (array[i] % num == 0 && array[i] != 0) {
            return array[i];
        }
    }
    return "Nenhum número válido encontrado!"
}

// Repetindo palavras
// Crie uma função que receba dois valores, o primeiro será uma palavra qualquer,
//  e o segundo será a quantidade de vezes que o sistema irá imprimir essa palavra.
function repete(valor, qtd) {
    for (i = 0; i < qtd; i++) {
        console.log(valor);
    }
}

// Comissão
// Crie um sistema para calcular a comissão dos vendedores de uma loja. 
// Crie uma função que tenha dois argumentos: preço e porcentagem de comissão.

function comissao(preco, porcentagem) {
    return preco * porcentagem / 100
}


