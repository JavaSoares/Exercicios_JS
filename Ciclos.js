function imprimirAzul4(){
    var cor = "";
    
    for(var i = 0; i < 4; i++){
        cor += "Azul";
    }
    console.log(cor);
}
imprimirAzul4();

function imprimirAzul5(){
    for(var i = 0; i < 4; i++) {
    console.log("Azul")
    }
    }

    imprimirAzul5();

function passoAPasso(){
    for(var i=0;i < 4;i++){
    console.log("aqui eu tenho o valor de " + i);
    }
}
passoAPasso();

function passandoPeloPares(){
    for(var i=0;i <= 6;i++){
       if (i % 2 == 0){
           console.log("aqui eu tenho o valor de " + i);
       }
    }
}

passandoPeloPares();

function imprimirAzul(x){
    for(var i = 0;i < x;i++){
        console.log("Azul");
    }
}

imprimirAzul(1);


function somar5MoedasDe25Centavos(){
    var totalMoedas = 0;

    for(var i=0;i < 5;i++){
       totalMoedas = totalMoedas + 0.25;
      }
    return totalMoedas;
}

var m = somar5MoedasDe25Centavos();
console.log(m);

function somarMoedasDe25(quantidadeDeMoedas){
    var total = 0;
    for(i = 0;i < quantidadeDeMoedas;i++){
        total = total + 0.25;
    }
    return total;
}
 var m = somarMoedasDe25(7);
 console.log(m);

 function somaDosPares(x){
     var totalP = 0;
     for(i = 0;i <= x;i++){
        if(i % 2 == 0){
         totalP = totalP + i;
        }
     }
     return totalP;
 }

 var m = somaDosPares(10);
 console.log(m);

function somatoria(n){
     var totalN = 0;
     for(var i = 0;i < n;i++){
         totalN = totalN + i;
     }
     return totalN;
}

var x = somatoria(4);
console.log(x);

function caloriasDeTrote(voltas){
    var totalV = 0
    for(var i = 0;i <= voltas;i++){
        totalV += 5 * i;
    }
    return totalV;
}

var v = caloriasDeTrote(2);
console.log(v);

