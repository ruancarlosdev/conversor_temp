function converterTemperatura() {
    const temperatura = parseFloat(document.getElementById('temperatura').value);
    const tipoConversao = document.getElementById('conversao').value;
    const resultado = document.getElementById('resultado');

    // Verifica se o valor inserido é um número válido
    if (isNaN(temperatura)) {
        resultado.textContent = "Por favor, digite uma temperatura válida.";
        resultado.style.color = "red";
        return;
    }

    let temperaturaConvertida;
    let unidadeDestino;

    // Realiza a conversão de acordo com a opção escolhida
    if (tipoConversao === "celsiusToFahrenheit") {
        temperaturaConvertida = (temperatura * 9/5) + 32;
        unidadeDestino = "Fahrenheit";
    } else if (tipoConversao === "fahrenheitToCelsius") {
        temperaturaConvertida = (temperatura - 32) * 5/9;
        unidadeDestino = "Celsius";
    }

    // Exibe o resultado
    resultado.textContent = `${temperatura} graus é igual a ${temperaturaConvertida.toFixed(2)} graus ${unidadeDestino}.`;
    resultado.style.color = "green";
}
