let altura = 1.75;
let peso = 105.5;
const imc = peso / (altura * altura);
console.log ("Seu IMC é: ",imc.toFixed(1));

if(imc < 18.5) {
    console.log('Magreza');
}
else if((imc > 18.5) && (imc <= 24.9)) {
    console.log('Saudável');
}
else if((imc > 25.0) && (imc <= 29.9)) {
    console.log('Sobrepeso');
}
else if((imc > 30.0) && (imc <= 34.9)) {
    console.log('Obesidade Grau I');
}
else if((imc > 35.0) && (imc <= 39.9)) {
    console.log('Obesidade Grau II');
}
else {
    console.log('Obesidade Grau III');
}
