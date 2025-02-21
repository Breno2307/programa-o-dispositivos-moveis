//variaveis

let variavel_local = 10; //number
const constante =[];  //array
const objeto ={}; //objeto
const msg = "texto"; //string
let status = false; //bool

//funcoes

function soma(a,b){
    return a+b;
}

let resultado = soma (1,2);

const multiplica = (a,b) => a*b;
resultado = multiplica (1,2);
/*
function multiplica(a,b){
return a * b;
}
*/

async function tempo(duracao) {
    await new Promise((r) =>{
    setInterval(r,duracao);
});
    console.log("passou o tempo");
}

tempo(3000);

//objetos

const pessoa ={nome:"jose", email:"jose@iesb.br", tone:"9999-0000"};
console.log(pessoa.nome);
pessoa.nome = "jose reginaldo";
console.log(pessoa.nome);
const (nome) = pessoa;
console.log(nome);
const pessoa_fisica = {cpf:111,...pessoa};

const lista = [];
lista.push("uva");
const achou = lista.find((item) => item === "uva");
/*
for(int i=0; i<lista.length; i++){
    if(lista[i]==="uva")
}
*/
const texto = "ola";
texto.concat("mundo");
texto.toUpperCase();

//modulos

export {soma,multiplica}