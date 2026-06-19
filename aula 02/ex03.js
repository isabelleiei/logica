let valorHoraAula = 10;
let horaTrabalhadas = 10;
let salarioBruto = valorHoraAula * horaTrabalhadas;

let descontoINSS = 0.1;
let salarioLiquido = salarioBruto - (salarioBruto * descontoINSS);

console.log (`Salário liquido: R$ ${salarioLiquido}`)