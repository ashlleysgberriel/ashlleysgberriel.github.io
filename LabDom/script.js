// Tarefa 1: Soma de dois números
function executarTarefa1() {
    const num1 = parseFloat(document.getElementById('num1_t1').value);
    const num2 = parseFloat(document.getElementById('num2_t1').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado_t1').textContent = "Por favor, insira números válidos.";
        return;
    }

    const soma = num1 + num2;
    document.getElementById('resultado_t1').textContent = `A soma é: ${soma}`;
}

// Tarefa 2: Maior de dois números
function executarTarefa2() {
    const num1 = parseFloat(document.getElementById('num1_t2').value);
    const num2 = parseFloat(document.getElementById('num2_t2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado_t2').textContent = "Por favor, insira números válidos.";
        return;
    }

    let resultado;
    if (num1 > num2) {
        resultado = `${num1} é o maior.`;
    } else if (num2 > num1) {
        resultado = `${num2} é o maior.`;
    } else {
        resultado = "Os números são iguais.";
    }
    document.getElementById('resultado_t2').textContent = resultado;
}

// Tarefa 3: Verificar se o número é primo
function executarTarefa3() {
    const num = parseInt(document.getElementById('num_t3').value);

    if (isNaN(num) || num <= 1) {
        document.getElementById('resultado_t3').textContent = "Por favor, insira um número inteiro maior que 1.";
        return;
    }

    let isPrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrimo = false;
            break;
        }
    }

    const resultado = isPrimo ? `${num} é um número primo.` : `${num} NÃO é um número primo.`;
    document.getElementById('resultado_t3').textContent = resultado;
}

// Tarefa 4: Hipotenusa de um Triângulo Retângulo
function executarTarefa4() {
    const cateto1 = parseFloat(document.getElementById('cateto1_t4').value);
    const cateto2 = parseFloat(document.getElementById('cateto2_t4').value);

    if (isNaN(cateto1) || isNaN(cateto2) || cateto1 <= 0 || cateto2 <= 0) {
        document.getElementById('resultado_t4').textContent = "Por favor, insira valores positivos para os catetos.";
        return;
    }

    // Usando o Teorema de Pitágoras: a^2 + b^2 = c^2
    const hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
    document.getElementById('resultado_t4').textContent = `A hipotenusa é: ${hipotenusa.toFixed(2)}`;
}

// Tarefa 5: Reajuste Salarial
function executarTarefa5() {
    const salarioAtual = parseFloat(document.getElementById('salario_t5').value);
    const percentualReajuste = parseFloat(document.getElementById('percentual_t5').value);

    if (isNaN(salarioAtual) || isNaN(percentualReajuste) || salarioAtual < 0 || percentualReajuste < 0) {
        document.getElementById('resultado_t5').textContent = "Por favor, insira valores válidos e não negativos.";
        return;
    }

    const novoSalario = salarioAtual * (1 + percentualReajuste / 100);
    document.getElementById('resultado_t5').textContent = `O novo salário é: R$ ${novoSalario.toFixed(2)}`;
}

// Tarefa 6: Conversão de Fahrenheit para Celsius
function executarTarefa6() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit_t6').value);

    if (isNaN(fahrenheit)) {
        document.getElementById('resultado_t6').textContent = "Por favor, insira uma temperatura válida em Fahrenheit.";
        return;
    }

    // C = (F - 32) / 1.8 ou C = (F - 32) / (9/5)
    const celsius = (fahrenheit - 32) * 5 / 9; // Simplificação de (F - 32) / (9/5)

    document.getElementById('resultado_t6').textContent = `A temperatura em Celsius é: ${celsius.toFixed(2)} °C`;
}

// Tarefa 7: Média Ponderada de 3 Notas (pesos 2, 3, 5)
function executarTarefa7() {
    const nota1 = parseFloat(document.getElementById('nota1_t7').value);
    const nota2 = parseFloat(document.getElementById('nota2_t7').value);
    const nota3 = parseFloat(document.getElementById('nota3_t7').value);

    const peso1 = 2;
    const peso2 = 3;
    const peso3 = 5;

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota2 < 0 || nota3 < 0) {
        document.getElementById('resultado_t7').textContent = "Por favor, insira notas válidas e não negativas.";
        return;
    }

    // Fórmula da média ponderada: (nota1*peso1 + nota2*peso2 + nota3*peso3) / (peso1+peso2+peso3)
    const mediaFinal = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);
    document.getElementById('resultado_t7').textContent = `A média final é: ${mediaFinal.toFixed(2)}`;
}