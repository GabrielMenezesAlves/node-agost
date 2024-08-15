// ecmascript 6 -> 2015

// tipagem fraca ( nao esta forcando )
// tipagem dinamica

// let = var, porem let tem algumas coisas amais...var muito fraco, sem verificacao

let nome = "Gabriel"; // string
let idade = 12; // number - int
let peso = 100.5; // number - float
let acordado = true; // boolean


let cidades = ["curitiba", "pinhais", "colombo"]; // array ou vetor

// nao pode ser aterado o valor
const marca = "AUDI"

// nao cria outra variavel com o mesmo nome
let outro = "jose"

if ("12" === 12)
{
    console.log("verdade");
} else
{
    console.log("falso");
}

let n1 = 4;
let n2 = 6;
let n3 = 3;

// entrada - processamento - saida
// escopo da funcao
function soma(n1, n2)
{
    let n4 = 5;
    let res = n1 + n2 + n3;
    

    function outra(n2, n3)
    {
        return n2 + n3 + n4;
    }

    console.log(outra(1, 2))

    return res;
}

let valor = soma(3, 5);

console.log(valor);

let sub = function(n1, n2)
{
    return n1 - n2;
}

console.log(sub(3, 4));

function calculadora(n1, n2, op)
{
    return op(n1, n2);
}

console.log( calculadora(10, 2, sub) );
console.log( calculadora(10, 2, soma) );

