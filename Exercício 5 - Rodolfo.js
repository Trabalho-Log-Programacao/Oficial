//Definição das Variaveis
let resto, nota100, nota50, nota10, nota5, valor;

//Solicita o valor ao usuario
valor = prompt("Digite o valor: ");

//Encontra quantidade de notas de 100
nota100 = Math.trunc(valor / 100);

//Valor restante após a separação das notas de 100
resto = valor % 100;

//Encontra quantidade de notas de 50
nota50 = Math.trunc(resto / 50);

//Valor restante após a separação das notas de 50
resto = resto % 50;

//Encontra quantidade de notas de 10
nota10 = Math.trunc(resto / 10);

//Valor restante após a separação das notas de 10
resto = resto % 10;

//Encontra quantidade de notas de 5
nota5 = Math.trunc(resto / 5);

//Encontra quantidade de notas de 1
nota1 = resto % 5;

//Exibe os resultados
alert("Valor inicial: " + valor + "\n" + "\n" +
    "Notas de 100: " + nota100 + "\n" +
    "Notas de 50: " + nota50 + "\n" +
    "Notas de 10: " + nota10 + "\n" +
    "Notas de 5: " + nota5 + "\n" +
    "Notas de 1: " + nota1 + "\n"
)