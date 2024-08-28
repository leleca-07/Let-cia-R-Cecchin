document.getElementById('calcular').addEventListener('click', function() {
    // Obtém os valores dos inputs
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    // Calcula o IMC
    var imc = peso / (altura * altura);

    // Determina a classificação do IMC
    var classificacao;
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    // Atualiza a interface com o resultado
    document.querySelector('.resultado').textContent = `IMC: ${imc.toFixed(2)}`;
    document.querySelector('.alertaSaude').textContent = `Classificação: ${classificacao}`;

    // Adiciona uma mensagem informativa
    var mensagem = '';
    if (imc < 18.5) {
        mensagem = 'Você está abaixo do peso recomendado. Considere consultar um nutricionista.';
    } else if (imc >= 18.5 && imc < 24.9) {
        mensagem = 'Seu peso está dentro da faixa normal. Continue cuidando da sua saúde!';
    } else if (imc >= 25 && imc < 29.9) {
        mensagem = 'Você está com sobrepeso. Tente incorporar mais atividades físicas e uma dieta equilibrada.';
    } else {
        mensagem = 'Você está com obesidade. É aconselhável procurar orientação médica.';
    }

    document.querySelector('.mensagem').textContent = mensagem;
});
