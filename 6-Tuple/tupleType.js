"use strict";
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Vagner', 'Torquato'));
console.log(criarPessoa('Maria', 'Eduarda', 'Torquato'));
let bestSong = Math.random() > 0.5
    ? 'Chain of Fools'
    : 'Respct';
console.log(bestSong);
let firstName = 'Vagner';
console.log(firstName.length);
