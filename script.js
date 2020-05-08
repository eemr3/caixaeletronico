var name = ''
var saldoInicial = 0;
var result = 0;

document.querySelector('#btn-cad').addEventListener("click", () => {
    document.querySelector('.form-cad').classList.toggle('hide');

    name = document.querySelector('#nome-cli').value;
    saldoInicial = document.querySelector('#valor-inicial').value;
});

function saque() {
    let valor = document.querySelector('#valorSaque').value;

    result = parseFloat(saldoInicial) - parseFloat(valor);

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
    document.querySelector('#name').innerHTML = name;
    document.querySelector('#saldo-anterior').innerHTML = `R$ ${saldoInicial}`;
    document.querySelector('#saldo-atual').innerHTML = `R$ ${result}`;

}