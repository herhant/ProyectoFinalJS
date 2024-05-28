/* Función principal para calcular el costo */

function calcularCosto(numFotos, numVideos) {
    if (isNaN(numFotos) || isNaN(numVideos) || numFotos < 0 || numVideos < 0) {
        console.log("Por favor, ingrese valores válidos.");
        return 0;
    }

    const costoTotal = calcularCostoTotal(numFotos, numVideos);

    console.log(`Costo Total: $${costoTotal}`);
    return costoTotal;
}

/* Función para calcular el costo total */

function calcularCostoTotal(numFotos, numVideos) {
    const precioFoto = 10; 
    const precioVideo = 50; 
    let costoTotal = 0;

    for (let i = 0; i < numFotos; i++) {
        costoTotal += precioFoto;
    }


    let j = 0;

    while (j < numVideos) {
        costoTotal += precioVideo;
        j++;
    }
    return costoTotal;
}

/* esta parte la googlee */

function mostrarCosto() {
    const numFotos = parseInt(document.getElementById('numFotos').value);
    const numVideos = parseInt(document.getElementById('numVideos').value);
    const costoTotal = calcularCosto(numFotos, numVideos);
    document.getElementById('resultado').innerText = 'Costo Total: $' + costoTotal.toFixed(2);
}
