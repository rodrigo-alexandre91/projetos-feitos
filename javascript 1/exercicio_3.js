//3. Chico tem 1,50 metro e cresce 2 centímetros por ano, enquanto Zé tem 1,10 metro e cresce 3 centímetros por ano. 
//Construa um algoritmo que calcule e imprima as alturas de Chico e Zé até que Zé seja maior que Chico

let chico = 1.50;
let zé = 1.10;
let ano = 0;


while (chico > zé) {
    zé += 0.03;
    chico += 0.02;
    ano++;
console.log(`Anos: (${ano}) Chico: (${chico}) X Zé:(${zé})`);
}

