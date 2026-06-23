let nomes = ["Veronica", "Fred", "Arthur", "Breno", "Julia"];
let pr1 = [5,2,6,7,8];
let pr2 = [6,4,2,8,9];
let media = [];
let sit = [];

for (let i = 0; i < 5; i++) {
    media[i] = (pr1[i] + pr2[i]) /2;
    if (media [i] >= 5) {
        sit[i] ="APROVADO"
    } else {
        sit[i] = "REPROVADO"
    }
}

for (let i = 0; i < 5; i++) {
    console.log(`nome ${nome[i]}`)
}