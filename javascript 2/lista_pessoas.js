//2. Crie uma lista com 15 pessoas lendo seu nome e cor.
//• As cores podem ser “branco”, “negro”, “pardo” e “outro”
//• Em seguida, mostre quantas pessoas tem cada cor
//• Tente resolver esse problema sem usar uma cadeia de “ifs” ou switch

const pessoas =
[{nome:"João",cor:"outro"},
{nome:"Rodrigo",cor:"pardo"},
{nome:"Yuri",cor:"negro"},
{nome:"Harlei",cor:"negro"},
{nome:"Janaina",cor:"outro"},
{nome:"Marcio",cor:"branco"},
{nome:"Rafael",cor:"pardo"},
{nome:"Yan",cor:"negro"},
{nome:"Heitor",cor:"negro"},
{nome:"Carlos",cor:"pardo"},
{nome:"Sarah",cor:"branco"},
{nome:"André",cor:"outro"},
{nome:"Matheus",cor:"negro"},
{nome:"Vitor",cor:"negro"},
{nome:"Lucas",cor:"branco"}];

let contagem = {};
for (let pessoa of pessoas) {
    if (!contagem[pessoa.cor]) {
    contagem[pessoa.cor] = 1;
    } else {
    contagem[pessoa.cor]++;
    }
}
console.log(contagem);