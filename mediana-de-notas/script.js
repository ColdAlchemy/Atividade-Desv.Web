// Solicita as quatro notas ao usuário e as converte para número.
// parseFloat permite a inserção de números decimais (ex: 7.5).
const nota1 = parseFloat(prompt("Insira a primeira nota:"));
const nota2 = parseFloat(prompt("Insira a segunda nota:"));
const nota3 = parseFloat(prompt("Insira a terceira nota:"));
const nota4 = parseFloat(prompt("Insira a quarta nota:"));

// Validação de entrada: verifica se todas as entradas são números válidos.
// A função isNaN() retorna 'true' se o valor não for um número.
if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
    alert("Erro: Todas as notas devem ser valores numéricos.");
} else {
    // Calcula a média aritmética.
    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Define o status com base na média.
    // O operador ternário é uma forma concisa de escrever uma instrução if-else.
    const status = media >= 7 ? "Aprovado" : "Reprovado";

    // Exibe o resultado final em um alert.
    // O método toFixed(2) formata a média para exibir duas casas decimais.
    alert(`Status: ${status}\nMédia: ${media.toFixed(2)}`);
}