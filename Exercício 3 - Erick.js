var novoSalario;
var codigo;
var total = 0;
var diferenca = 0;

do {
    var cargo = prompt(' Digite o cod do cargo' +
        '\n Cargos disponíveis:' +
        '\n 101 - Gerente' +
        '\n 102 - Engenheiro' +
        '\n 103 - Técnico' +
        '\n Outros');
    if (cargo == "") {
        alert('Cargo indefinido! Favor insira o cargo.' +
        '\n Cargos disponíveis:' +
        '\n 101 - Gerente' +
        '\n 102 - Engenheiro' +
        '\n 103 - Técnico' +
        '\n Outros');
    } else {
        var salario = Number(prompt(' Digite o salario '));
    }
} while (cargo == "");


switch (cargo) {
    case "101":
        total = salario + (salario * (10 / 100)); /*  ou   total= salario + 1.10);  */
        diferenca = Number(total) - salario;

        break;
    case "102":
        total = salario + (salario * (20 / 100))  /*  ou   total= salario + 1.20);  */
        diferenca = Number(total) - salario;
        break;
    case "103":
        total = salario + (salario * (30 / 100))  /*  ou   total= salario + 1.30);  */
        diferenca = Number(total) - salario;
        break;
    default:
        total = salario + (salario * (40 / 100))  /*  ou   total= salario + 1.40);  */
        diferenca = Number(total) - salario;
}

alert("salario:" + salario);
alert("Total:" + total);
alert("Diferença:" + diferenca);




