let n1 = 1
let n2 = n1 % 2 === 0;

if (n2) {
    n2=1;
}
switch (n2) {
    case 1:
        console.log (`seu nome é par`);
        break;

    default:
        console.log(`seu nome é impar`)
        break;
}