function convertirTemperatura(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
    return { fahrenheit, kelvin };
}

function solicitarTemperatura() {
    let temperatura;

    while (true) {
        temperatura = prompt("Por favor, ingresa la temperatura en grados Celsius:");

        // Convertir la entrada a número
        temperatura = Number(temperatura);

        // Verificar si es un número
        if (!isNaN(temperatura)) {
            break; // Salir del bucle si es un número válido
        } else {
            alert("Entrada no válida. Por favor, ingresa un número.");
        }
    }

    return temperatura;
}

document.getElementById("convertir").addEventListener("click", () => {
    const temperaturaIngresada = solicitarTemperatura();
    const { fahrenheit, kelvin } = convertirTemperatura(temperaturaIngresada);
    
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
        <p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>
    `;
});