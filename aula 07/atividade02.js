let alunos = [
    {nome: "Agatha", idade: 18},
    {nome: "Alyssa", idade: 22},
    {nome: "Emilly", idade: 18},
    {nome: "Gabriel", idade: 22},
    {nome: "João Pedro", idade: 18},
    {nome: "Iarly", idade: 20},
    {nome: "Isabelle", idade: 20},
    {nome: "Livia", idade: 18}
    ]

for (let i = 0; i < alunos.length; i++) {
    if(alunos[i].idade >= 18) {
        console.log(`${alunos[i].nome} é maior de idade`);
    } else {
        console.log(`${alunos[i].nome} é menor de idade`);
    }
}