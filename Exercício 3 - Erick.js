var novoSalario;
var codigo;
var total=0;
var diferenca=0;



var salario=Number(prompt(' Digite o salario '));
var cargo=prompt(' Digite o cod do cargo ');


switch (cargo) {
    case "101":
        total= salario +(salario * (10/100));
        diferenca = Number(total)-salario;

        break;
    case "102":
        salario += salario  * (20/100);
        diferenca = Number(total)-salario;
        break;
    case "103":
        salario += salario * (30/100);
        diferenca = Number(total)-salario;
        break;
    default:
        salario += salario * (40/100);
        diferenca = Number(total)-salario;
}

alert(+salario, +total, +diferenca);




/*function calculaSalario(){
        var valor = prompt("informe o valor");
        var quantidade = document.getElementById("quantidade");
        var salario =  Number(valor*quantidade);
        alert(salario);
    }*/