const PAO_VALOR = 0.12
const BROA_VALOR = 1.5


var paoVendidos = prompt("Pães vendidos no dia?")
var broaVendidas = prompt("Broas vendidos no dia?")


var venda_total = (paoVendidos * PAO_VALOR)
                + (broaVendidas * BROA_VALOR)

var poupanca = venda_total * 0.1

alert("valor total de pães vendidos é R$ " + venda_total.toFixed(2))
alert("valor a ser poupado é de R$ " + poupanca.toFixed(2)) 