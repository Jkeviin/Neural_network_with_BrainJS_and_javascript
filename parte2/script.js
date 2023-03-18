const cajas = document.querySelectorAll(".pintar");

var a =
    '0111110' +
    '1000001' +
    '1000001' +
    '1111111' +
    '1000001' +
    '1000001' +
    '1000001';


var d =
    '0011111' +
    '0100000' +
    '1000000' +
    '1000000' +
    '1000000' +
    '0100000' +
    '0011111';

var c =
    '1111100' +
    '1000010' +
    '1000001' +
    '1000001' +
    '1000001' +
    '1000010' +
    '1111100';

var d =
    '0011111' +
    '0100000' +
    '1000000' +
    '1000000' +
    '1000000' +
    '0100000' +
    '0011111';


var e =
    '1111111' +
    '1000000' +
    '1000000' +
    '1111111' +
    '1000000' +
    '1000000' +
    '1111111';

var modelo = new brain.NeuralNetwork();
modelo.train(
    [
        { input: a.split(''), output: { a: 1 } },
        { input: b.split(''), output: { b: 1 } },
        { input: c.split(''), output: { c: 1 } },
        { input: d.split(''), output: { d: 1 } },
        { input: e.split(''), output: { e: 1 } },
    ]
)

cajas.forEach(caja => {
    caja.addEventListener("mouseover", function () {
        caja.setAttribute("style", "background-color:grey;");
    });
});

document.getElementById("limpiar").addEventListener("click", function () {
    cajas.forEach(caja => {
        caja.setAttribute("style", "background-color:white;");
    });
});

document.getElementById("procesar").addEventListener("click", function () {
    var letra = "";
    cajas.forEach(caja => {
        if (caja.style.backgroundColor == "grey") {
            letra += "1";
        } else {
            letra += "0";
        }
    })

    var resultado = brain.likely(letra, modelo)
    document.getElementById("letraFinal").innerHTML = resultado.toUpperCase();
})
