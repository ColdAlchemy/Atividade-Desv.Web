// Solicita a entrada do usuário.
const inputUsuario = prompt("Insira um número inteiro:");

// Converte a entrada para o tipo Number.
// A função Number() lida melhor com strings vazias e nulas do que parseFloat().
const numero = Number(inputUsuario);

// Inicia a validação.
// 1. Verifica se a conversão resultou em um número válido. isNaN() checa isso.
if (isNaN(numero)) {
    alert("Erro: O valor inserido não é um número.");
} 
// 2. Verifica se o número é um inteiro. A paridade não se aplica a decimais.
else if (!Number.isInteger(numero)) {
    alert(`Erro: O número ${numero} não é inteiro. A análise de par/ímpar aplica-se apenas a inteiros.`);
} 
// 3. Se as validações passaram, executa a lógica principal.
else {
    // Usa o operador módulo (%) para verificar o resto da divisão por 2.
    if (numero % 2 === 0) {
        alert(`O número ${numero} é PAR.`);
    } else {
        alert(`O número ${numero} é ÍMPAR.`);
    }
}