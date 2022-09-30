
// // console.log(nome, "chamando a variavel usando o var");

// // const nome = "avanade";

// // // SETE TIPOS DE ERROS EM JS //
// // // * SINTAXERROR - ESCREVEU ALGUMA COISA ERRADA
// // // * REFERENCEERROR - CHAMOU ALGUÉM QUE NÃO EXISTE OU QUE NÃO POSSUI ACESSO
// // // * TYPEERROR - ERRO DE TIPO (VIOLAÇÃO DO JS) EX. quando tenta atribuir outro valor em uma const
// // // * EVALERROR - EVITE O USO DO COMANDO EVAL, MAS SE ELE FOR INVALIDO
// // // * RANGEERROR - ERRO DE INTERVALO, LOOP INFINITO, OU CHAMADAS INUMERAS DE RECURSIVIDADE
// // // * URIERROR - ERRO REFERENTE AO URL. CHAMADAS EXTERNAS. UNIFORM RESOURCES IDENTIFIER. HTTPSWWW. 
// // // * INTERNALERROR - ERRO INTERNO DO JS EX. FALTA DE MEMORIA, PROCESSADOR..

// // //eval() - evitar USAR!

// //2 passos para trabalhar com funções: criá-las e chamá-las

// escreve("museu do ipiranga");
// //função nominal - sofre hointing - 
// function escreve(x) {
//     console.log(x)
// }

// //
// function mudaTitulo(novoTitulo) {
//     document.querySelector("h1").innerHTML = "<i>" + novoTitulo + "</i>";
// }

// mudaTitulo("Vai Colorado")

// //não sofre hoisting - é mais organizado
// //expressão de função - function expression  (agora essa variavel é o nome dessa função)
// const mudaTitulo2 = function (target, novoTitulo) {
//     document.querySelector("h2").innerHTML = novoTitulo;
// }

// mudaTitulo("h2", "trocando subtitulo");


// // arrow function
// const relogio = () => {
//     const date = new Date();
//     mudaTitulo2("h2", date.toLocaleTimeString());
// }

// setInterval(relogio, 1000);


// Função Nominal : Sofre hoisting, é criada com comando function , devemos utilizar duas etapas ao trabalhar com a função: cria-la e depois chama-la;

//expressão de função : quando criamos uma varíavel ou constante onde o valor dela é uma função;

//função anonima: uma função anonima precisa de um contexto. significa que não posso criar uma função anonima solta. 
// ou coloco ela como valor de uma variavel, ou nós passamos ela como parametro em outra função, que seria uma função de retorno, o famoso callback.

//arrow function : só preciso das chaves quando eu tenho mais de uma instrução.

const frases = [
    "Um banco para 20 milhões de pessoas",
    "C6 Bank o seu banco",
    "Cartão de credito sem anuidade"
];


const mudaFrase = (target, frases, tempo) => {
    let total = 0;
    setInterval(()=>{
        document.querySelector(target).innerHTML = 
        frases[total >= frases.length -1 ? (total = 0) : (total += 1)];
    }, tempo * 1000);
}
mudaFrase("h1", frases, 4);
