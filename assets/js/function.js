const resultado = document.querySelector("#resultado");

//arrow function não acessa 'arguments'

let myFunc = {
    showArguments() {
        resultado.innerHTML = arguments;
        console.log(arguments);
    }
};

myFunc.showArguments("BMW", "AUDI", "MERCEDES", "FERRARI");

//arrow function não acessa 'arguments'
let myFunc2 = {
    showArguments2: () => {
        resultado.innerHTML = arguments;
        console.log(arguments);
    }
};

// myFunc2.showArguments2("corsa", "escort", "uno", "santana", "gol", "");

let user = {
    name: "Marianna Magno",
    usandoArrow: () => {
        console.log(`Meu nome é ${this.name}, com Arrow Function`)
    },
    usandoNominal(){
        console.log(`Meu nome é ${this.name}, com Nominal Function`)
    },
};

user.usandoArrow();
user.usandoNominal();

//THIS. NÃO EXISTE NA ARROW FUNCTION

let soma = (a, b) =>{
    console.log(a + b);
};
let soma2 = function(a, b){
   ; console.log(a + b);
}

// new soma(50, 20);
new soma2(50, 20);

// não usamos new também, pq não tem contructor.

