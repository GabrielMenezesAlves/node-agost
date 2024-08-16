

let nome = 123;
// typeof me diz qual o tipo de variavel esta pedindo

console.log( typeof  nome );

// vetor -> array
// estrutura de dados
let cidades = ["curitiba", "pinhais"];
console.log ( cidades );

// classe -> caneta
// encapsulamento
class Caneta
{

    // propriedade -> atributo -> adjetivo
    cor = "azul";

    quantTinta = 100;

    constructor(cor)
    {
        this.cor = cor;
    }

    // funcao -> metodos -> verbo
    escrever(palavra)
    {
        console.log("escreveu: " + palavra);
        this.quantTinta -= 1;
    }
}

// heranca
class Quadro extends Caneta
{
    alerta = false;
}

// instancia
let bic1 = new Caneta();
let bic2 = new Caneta("rosa");
let bic3 = bic1;
let bic4 = new Caneta();

bic1.cor = "vermelho";
bic3.cor = "preta";

console.log(bic1, bic2, bic3, bic4);

if (bic1 == bic2)
{
    console.log("verdade");
} else
{
    console.log("falso");
}

bic2.escrever("Oi turma!!!");
bic2.escrever("blz???");

console.log(bic2);

let pilot = new Quadro();

console.log(pilot);