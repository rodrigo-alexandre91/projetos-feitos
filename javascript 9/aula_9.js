const circulo = {
    raio: 3,
    area(){
        return Math.PI * this.raio * this.raio;
    },
    perimetro(){
        return 2 * Math.PI * this.raio;
    }
}
console.log(circulo.area());
console.log(circulo.perimetro());  
function fazerCirculo(raio){
return {
    raio,
    area(){
        return Math.PI * this.raio * this.raio;
    },
    perimetro(){
        return 2 * Math.PI * this.raio;
    }
}
}
const circulo3 = fazerCirculo(3);
class Circulo{
#raio;
constructor(raio){
    this.#raio = raio;
}

get area(){
    return Math.PI * this.#raio * this.#raio;
}
set area(area){ 
    this.#raio = Math.sqrt(area/Math.PI);
}
get perimetro(){
    return 2 * Math.PI * this.#raio;
}
set perimetro(perimetro) {
    this.#raio = perimetro/(2*Math.PI);
}
get raio() {
    return this.#raio
}
set raio(raio) {
    this.#raio = Math.abs(raio);
}
toString(){
    return `Raio do circulo ${this.#raio}`;
}
static criar(...lista){
    return lista
        .filter((raio) => typeof raio == 'number' && raio > 0)
        .map(raio => new Circulo(raio));
}
}
let circulo1 = new Circulo(3);
circulo1.area = 35;
let circulo2 = new Circulo(5);
circulo2.raio = -10;
console.log(`raio = ${circulo2.raio}`);
console.log(circulo2.area);
console.log(circulo2.perimetro);
console.log(circulo2.toString());
const circulos = Circulo.criar(1,2,"eee",3,4,5);
circulos.forEach(c => console.log(c.toString()));
