/*
Parte 1 – Funções Simples (10 min)
🔹 Desafio:
Crie uma função chamada mostrarHora que imprime a hora atual usando new Date().
*/
console.log("Parte 1:")
function saudacao(){
    console.log("Olá, seja bem vindo ao sistema!");
    console.log("Hora atual: " + new Date().getHours() + ":" + new Date().getMinutes());
}
saudacao();
/*
Parte 2 – Funções com Parâmetros (10 min)
javascript
CopiarEditar
function saudacaoPersonalizada(nome) {
  console.log(`Olá, ${nome}! Como vai?`);
}

saudacaoPersonalizada("Lucas");

*/
console.log("\n\nParte 2:")
let nome = "Eric";
function saudacaoPersonalizada(nome) {
  console.log(`Olá, ${nome}! Como vai?`); // ${} se usa para colocar valores dentro de um texto
}
/*
🔹 Desafio:
Crie uma função calcularAreaRetangulo(largura, altura) que imprime a área (largura × altura).
*/
function calcularAreaRetangulo(largura, altura){
    let area = largura * altura;
    console.log (`A área do retângulo é: ${area}`);
}
saudacaoPersonalizada(nome);
calcularAreaRetangulo(3,4);

/*
Parte 3 – Funções com Retorno (15 min)
javascript
CopiarEditar
function somar(a, b) {
  return a + b;
}

let resultado = somar(5, 3);
console.log("Soma:", resultado);

*/
console.log("\n\nParte 3:")
function somar(a, b) {
  return a + b;
}
let resultado = somar(5, 3);
console.log(`Resultado da soma: ${resultado}`);
/*🔹 Desafio:
Crie uma função ehPar(numero) que retorna true se o número for par e false caso contrário.*/
function ehPar(numero){
    return (numero % 2 == 0)? "É par!" : "Não é par!";
}
console.log(ehPar(2));

/*
Parte 4 – Mini-projeto: Sistema de Notas (15 min)
javascript
CopiarEditar
function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

function verificarSituacao(media) {
  if (media >= 7) return "Aprovado";
  if (media >= 5) return "Em recuperação";
  return "Reprovado";
}

let media = calcularMedia(6.5, 8.0, 7.0);
console.log(`Média: ${media.toFixed(2)} - Situação: ${verificarSituacao(media)}`);
*/

/*
🔹 Desafio Bônus:
Crie uma função avaliarAluno(nome, n1, n2, n3) que imprime o nome, a média e a situação do aluno.
*/
console.log("\n\nParte 4:");

function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

function verificarSituacao(media) {
  if (media >= 7) return "Aprovado";
  if (media >= 5) return "Em recuperação";
  return "Reprovado";
}

function avaliarAluno(nome, n1, n2, n3){
    let media = calcularMedia(n1, n2, n3);
    console.log(`Aluno: ${nome}`);
    console.log(`Média: ${media.toFixed(2)} - Situação: ${verificarSituacao(media)}`);
}

avaliarAluno("Eric", 10, 10, 10);

/*
Extensões (opcional)
1.	Crie uma função conversorTemperatura(celsius) que converte para Fahrenheit. 
2.	Crie uma função gerarSenhaAleatoria() que retorna uma senha de 8 caracteres aleatórios.
*/
console.log("\n\nExtras:")
console.log("1. Crie uma função conversorTemperatura(celsius) que converte para Fahrenheit.");

conversorTemperatura = (celcius) =>{
    return (celcius * 1.8) + 32;
}
let celcius = 20;
console.log(`Celcius: ${celcius} \nFahr: ${conversorTemperatura(celcius)}`);



console.log("\n\n2. Crie uma função gerarSenhaAleatoria() que retorna uma senha de 8 caracteres aleatórios.");

gerarSenhaAleatoria = () =>{
    let senha = "";
    let i = 0;
    while(i < 8){
        senha +=  String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        i++;
    }
    return senha;
    
}
console.log("Sua senha: " + gerarSenhaAleatoria());