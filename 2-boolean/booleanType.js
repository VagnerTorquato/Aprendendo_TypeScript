"use strict";
/**
 * arquivo: booleanType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Boolean'
  * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// Exemplo 1
let tarefaConcluida = true;
let tarefaPendente = false;
console.log(tarefaConcluida);
console.log(tarefaPendente);
// Exemplo 2
let concluido = false;
if (!concluido) {
    console.log("Tarefa foi concluida com sucesso");
}
else {
    console.log("Tarefa Pendente");
}
