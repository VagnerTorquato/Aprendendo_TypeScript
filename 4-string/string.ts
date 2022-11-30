/**
 * arquivo: stringType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo String' 
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// ==> Exemplo 01 - Single Quotes
let nomeCompleto: string = 'Vagner Torquato';
console.log(nomeCompleto);

// ==> Exemplo 02 - Double Quotes
let funcaoEmpresa: string = "Desenvolvedor Web";
console.log(funcaoEmpresa);

// ==> Exemplo 03 - Back Ticks
let nomeEmpresa: string = 'Microsoft';

let dadosFuncionario: string = `Seja bem-vindo ${nomeCompleto}! Você será ${funcaoEmpresa} na empresa ${nomeEmpresa}! `
console.log(dadosFuncionario);
