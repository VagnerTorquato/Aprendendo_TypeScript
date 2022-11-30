"use strict";
//Variáveis == type annotation
let nome = "Vagner Torquato";
console.log(nome);
//Arrays == type annotation
let animais = ["Cachorro", "Gato", "Vaca", "Peixe"];
console.log(animais);
//Objetos == type annotation
let carro;
carro = {
    nome: "Corsa",
    ano: 2000,
    preco: 15000
};
console.log(carro);
//Funções == type annotation
function somarNumero(num1, num2) {
    return num1 + num2;
}
console.log(somarNumero(3, 7));
