function calcularArea (base: number, altura: number): number {
    return base * altura;
}

console.log(calcularArea(4,5))

function converterTemperatura (temp: number): number {
    return (temp * 9/5) + 32
}

console.log (`Temperatura em °F ${converterTemperatura(25)}`);

let mensagem = "global";

function teste() {
    let mensagem = "local"
    console.log(mensagem)
}

teste ();
console.log(mensagem);
