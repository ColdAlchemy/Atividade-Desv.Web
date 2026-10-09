// 1. Coleta e Conversão da Entrada
const inputUsuario = prompt("Insira um número inteiro e positivo para iniciar a contagem:");
const numero = Number(inputUsuario);

// 2. Validação da Entrada
// A validação ocorre em etapas para fornecer o erro mais específico possível.
if (isNaN(numero)) {
    console.error("Erro: A entrada não é um número válido.");
} else if (!Number.isInteger(numero)) {
    console.error("Erro: O número deve ser inteiro.");
} else if (numero <= 0) {
    console.error("Erro: O número deve ser positivo e maior que zero para a contagem regressiva.");
} else {
    // 3. Execução da Lógica de Contagem
    console.log(`Iniciando contagem regressiva a partir de ${numero}:`);

    // A estrutura de repetição 'for' é ideal para uma contagem com início,
    // condição de parada e passo de decremento bem definidos.
    for (let i = numero; i >= 0; i--) {
        console.log(i);
    }

    console.log("Contagem finalizada.");
}