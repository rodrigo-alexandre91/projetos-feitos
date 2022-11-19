//2.Leia um número e aplique sobre ele a conjectura de Collatz.
//Ela diz que uma sequencia pode ser feita com base na seguinte
//regra:
//• Se o número n for par, o próximo é n / 2
//• Se for ímpar é 3n+1
//• A sequencia termina em 1

let collatz = (num) => {
    // faz um loop até que o número dado não seja 1
    while(num != 1){

    console.log(num);

      //se o número for par
    if(num % 2 == 0){

        num = parseInt(num / 2); 

    }else{
        //se o número for ímpar
        num = (num * 3) + 1;
    }
    }

  // imprime o utimo número
  console.log(num);
}

collatz(5);
collatz(11);
