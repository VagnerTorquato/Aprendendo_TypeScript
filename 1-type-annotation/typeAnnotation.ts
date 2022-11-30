//Variáveis == type annotation
let nome: string = "Vagner Torquato";
console.log(nome);

//Arrays == type annotation
let animais: string[] = ["Cachorro", "Gato", "Vaca", "Peixe"];
console.log(animais);

//Objetos == type annotation
let carro: {
  nome: string;
  ano: number;
  preco: number;
}
carro = {
  nome: "Corsa",
  ano: 2000,
  preco: 15000
}
console.log(carro);

//Funções == type annotation
function somarNumero(num1: number, num2: number) {
  return num1 + num2;
}
console.log(somarNumero(3, 7));


