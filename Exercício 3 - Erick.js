var novoSalario;
var codigo;
var total=0;
var diferenca=0;


var cargo=prompt(' Digite o cod do cargo ');
var salario=Number(prompt(' Digite o salario '));



switch (cargo) {
    case "101":
        total = salario * 1.1; /*  ou   total= salario + 1.10);  */
        diferenca = Number(total) - salario;

        break;
    case "102":
        total = salario * 1.2;  /*  ou   total= salario + 1.20);  */
        diferenca = Number(total) - salario;
        break;
    case "103":
        total = salario * 1.3;  /*  ou   total= salario + 1.30);  */
        diferenca = Number(total) - salario;
        break;
    default:
        salario += salario * (40/100);
        diferenca = Number(total)-salario;
}

alert("salario:" + salario);
alert("Total:" + total);
alert("Diferença:" + diferenca);



/*function calculaSalario(){
        var valor = prompt("informe o valor");
        var quantidade = document.getElementById("quantidade");
        var salario =  Number(valor*quantidade);
        alert(salario);
    }*/