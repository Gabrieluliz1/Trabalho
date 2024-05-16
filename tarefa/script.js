let n1 = document.querySelector('#soma1');
let n2 = document.querySelector('#soma2');
let result = document.querySelector('#resultado');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    somatotal();
});

function somatotal() {
    let valor1 = parseInt(n1.value);
    let valor2 = parseInt(n2.value);

    if (!isNaN(valor1) && !isNaN(valor2)) {
        let soma = valor1 + valor2;
        result.value = soma;
    } else {
        result.value = 'Por favor, insira números válidos';
    }
}