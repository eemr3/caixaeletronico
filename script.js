let numConta = Math.floor(Math.random() * 1000000) + 1
let name = ''
let saldoInicial = 0;
let result = 0;

console.log(numConta)
document.querySelector('#btn-cad').addEventListener("click", () => {
    document.querySelector('.form-cad').classList.toggle('hide');

    name = document.querySelector('#nome-cli').value;
    saldoInicial = parseFloat(document.querySelector('#valor-inicial').value);
    relatorio()
});

function saque() {
    let valor = document.querySelector('#valorSaque').value;

    if (valor > saldoInicial) {
        alert('Saldo insuficiente!')
        return
    } else {
        result = parseFloat(saldoInicial) - parseFloat(valor);
    }

    relatorio()

    saldoInicial = result;

}

function deposito() {
    let valor = document.querySelector('#valorDep').value;

    result = parseFloat(saldoInicial) + parseFloat(valor);

    relatorio()

    saldoInicial = result;
}

function relatorio() {
    document.querySelector('#numConta').innerHTML = numConta;
    document.querySelector('#name').innerHTML = name;
    document.querySelector('#saldo-anterior').innerHTML = `R$ ${saldoInicial}`;
    document.querySelector('#saldo-atual').innerHTML = `R$ ${result}`;

}
