// 1. Coleta de Entradas
const num1Str = prompt("Insira o primeiro número:");
const operacao = prompt("Insira a operação desejada (+, -, *, /):");
const num2Str = prompt("Insira o segundo número:");

// 2. Conversão e Validação Numérica
const num1 = parseFloat(num1Str);
const num2 = parseFloat(num2Str);

if (isNaN(num1) || isNaN(num2)) {
    alert("Erro: Pelo menos um dos valores inseridos não é um número válido.");
} else {
    // 3. Execução da Lógica de Cálculo
    let resultado;
    let operacaoValida = true;

    // A estrutura switch é ideal para selecionar uma entre múltiplas operações.
    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            // Tratamento da exceção de divisão por zero.
            if (num2 === 0) {
                alert("Erro: Divisão por zero é uma operação indefinida.");
                operacaoValida = false;
            } else {
                resultado = num1 / num2;
            }
            break;
        default:
            // Validação do operador.
            alert("Erro: Operação inválida. Utilize apenas +, -, * ou /.");
            operacaoValida = false;
            break;
    }

    // 4. Exibição do Resultado
    // O resultado só é exibido se a operação foi válida e calculada com sucesso.
    if (operacaoValida) {
        alert(`O resultado de ${num1} ${operacao} ${num2} é: ${resultado}`);
    }
}