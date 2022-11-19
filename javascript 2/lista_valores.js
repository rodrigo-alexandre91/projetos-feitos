//• Crie uma lista com alguns valores e imprima:
//• Os valores positivos
//• A média de todos os valores

const valores =[10, 35, -5, 7, 0, -3 , 200, -150, -380];
const positivos = [];
let soma = 0;
for(const valor of valores){
    soma += valor;
    if (valor >= 0){
        positivos.push(valor)
    }
}

console.log(`Positivos: ${positivos}`);
console.log(`Média: ${soma / valores.length}` )