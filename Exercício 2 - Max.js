// Categorias de nadador por idade
infantil_A = "5 a 7 anos";
infantil_B = "8 a 10 anos";
juvenil_A = "11 a 13 anos";
juvenil_B = "14 a 17 anos";
adulto = "maiores de 18 anos";

// Idade do nadador

var idade;
idade = prompt ("Digite a idade do nadador:"); // abrir uma caixa para digitar a idade 

// Sem categoria
if (idade < 5) {
    console.log("Sem categoria");
    alert ("Sem categoria");
}

// Categoria infantil A (5 a 7 anos)
else if (idade < 8) {
    console.log("Infantil A");
    alert ("Sua categoria é Infantil A");
}

// Categoria infantil B (8 a 10 anos)
else if (idade < 11) {
    console.log("Infantil B");
    alert ("Sua categoria é Infantil B");
}

// Categoria juvenil A (11 a 13 anos)
else if(idade < 14) {
    console.log("Juvenil A");
    alert ("Sua categoria é Juvenil A");
}

// Categoria juvenil B (14 a 17 anos)
else if (idade < 18) {
    console.log("Juvenil B");
    alert ("Sua categoria é Juvenil B");
}

// Categoria adulto (maiores de 18 anos)
else{
    console.log("Adulto");
    alert ("Sua categoria é Adulto");
}

