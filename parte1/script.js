// Creación de un objeto modelo de red neuronal usando la librería brain.js
var modelo = new brain.NeuralNetwork();

//Se agrega un eventListener al botón 'botonEntrenamiento' para que, al hacer clic, se entrene el modelo con la lista de entrenamiento generada por la función 'generarListaEntrenamiento()', y se muestren los elementos con id 'entrenamientoListo' y 'preguntar'.
document.getElementById('botonEntrenamiento').addEventListener("click", function () {
    modelo.train(generarListaEntrenamiento());
    document.getElementById("entrenamientoListo").style.display = "block";
    document.getElementById("preguntar").style.display = "block";
})

//La función 'generarListaEntrenamiento()' devuelve una lista de objetos, donde cada objeto representa un color y tiene como atributos 'input' y 'output' que corresponden a los valores RGB del color y su clasificación como 'claro' u 'oscuro', respectivamente.
function generarListaEntrenamiento() {
    var lista = [];
    //Blanco (255,255,255)
    lista[0] = { input: [255 / 255, 255 / 255, 255 / 255], output: { claro: 1 } }
    //Negro(0,0,0)
    lista[1] = { input: [0, 0, 0], output: { oscuro: 1 } }
    //Gris Claro(64,64,64)
    lista[2] = { input: [192 / 255, 192 / 255, 192 / 255], output: { claro: 1 } }
    //Gris Oscuro(64,64,64)
    lista[3] = { input: [64 / 255, 64 / 255, 64 / 255], output: { oscuro: 1 } }
    //Color Personalizado(153,128,128)
    lista[4] = { input: [153 / 255, 64 / 128, 128 / 255], output: { oscuro: 1 } }

    //Se muestra en la consola la lista generada en formato JSON.
    console.log(JSON.stringify(lista))
    return lista;
};

//Se agrega un eventListener al botón 'botonResultado' para que, al hacer clic, se obtenga el color seleccionado por el usuario y se determine si es 'claro' u 'oscuro' según el modelo entrenado.
document.getElementById("botonResultado").addEventListener("click", function () {
    var entrada = document.getElementById("colorSeleccionado").value;
    //Se convierte el valor hexadecimal del color seleccionado en los valores RGB correspondientes.
    const r = parseInt(entrada.substr(1, 2), 16);
    const g = parseInt(entrada.substr(3, 2), 16);
    const b = parseInt(entrada.substr(5, 2), 16);

    //Se ejecuta el modelo con los valores RGB obtenidos y se muestra en la consola el resultado en formato JSON.
    var salida = modelo.run([r / 255, g / 255, b / 255]);
    console.log(JSON.stringify.salido);

    //Se determina si el resultado indica que el color es 'oscuro' o 'claro' utilizando la función 'esOscuro()' y se muestra el resultado en el elemento con id 'resultadoFinal'.
    var resultado = esOscuro(salida.oscuro);
    document.getElementById("resultadoFinal").innerHTML = "Este color es " + resultado;

});

//La función 'esOscuro()' devuelve 'oscuro' si el valor de salida es mayor a 0.5, y 'claro' en caso contrario.
function esOscuro(salida) {
    if (salida > 0.5) {
        return "oscuro";
    } else {
        return "claro";
    }
}