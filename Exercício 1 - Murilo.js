var anos = Number(prompt ("Quantidade de anos?"));
var meses = Number(prompt ("Quantidade de meses?"));
var dias = Number(prompt ("Quantidade de dias?"));


var total = 0

total += (anos * 365.25);
total += (meses*30.4167);
total += dias;

console.log(Math.round(total))