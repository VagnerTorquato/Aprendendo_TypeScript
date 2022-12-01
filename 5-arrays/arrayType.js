"use strict";
/**
 * arquivo: arrayType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Array'
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#array
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// ==> Exemplo 01 - Uso de Colchetes:
let frutas = ['🍉', '🍊', '🍒', '🍍'];
console.log(frutas[2]);
// Exemplo 02 - Array Object (Objetc Array)- Primeira letra de Array é Maiuscula
let frutas1 = ['🍉', '🍊', '🍒', '🍍'];
console.log(frutas[3]);
// Exemplo 03 - Adicionando mais string com o Método 'push'
//Resumo
//O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
let idiomas = ['Português', 'Inglês', 'Espanhol', 'francês'];
console.log(idiomas);
idiomas.push('Alemão', 'Mandarin');
console.log(idiomas);
