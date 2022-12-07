type Nome =
  | [primeiroNome: string, sobreNome: string]
  | [primeiroNome: string, nomeDoMeio: string, sobreNome: string]

function criarPessoa(...nome: Nome) {
  return [...nome];
}

console.log(criarPessoa('Vagner', 'Torquato'));
console.log(criarPessoa('Maria', 'Eduarda', 'Torquato'))

let bestSong = Math.random() > 0.5
  ? 'Chain of Fools'
  : 'Respct';

console.log(bestSong);

let firstName = 'Vagner';
console.log(firstName.length);
