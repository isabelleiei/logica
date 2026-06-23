let numeros = [10, 25, 35, 42, 58];

numeros.splice(2, 1);

for (let i = 0; i < numeros.length; i++) {
    console.log ("indice " + i + " : " + numeros [i]);
}
for (let num of numeros) {
    console.log(num);
}
numeros.forEach((num, i) => {
    console.log(`posição ${i}: ${num}`);
});