let opçao = 2

console.log (`escolha uma opção de 1 a 5`)
console.log (`1- incluir`)
console.log (`2- alterar`)
console.log (`3- excluir`)
console.log (`4- pesquisar`)
console.log (`5- sair`)

switch (opçao) {
    case 1:
        console.log (`você escolheu a opção "incluir"`)
        break;

    case 2:
        console.log (`você escolheu a opção "alterar"`)
        break;

    case 3:
        console.log (`voce escolheu a opção "excluir"`)
        break;

    case 4:
        console.log (`voce escolheu a opção "pesquisar"`)
        break;

    case 5:
        console.log (`voce escolheu a opção "sair"`)
        break;

    default:
        console.log (`essa opção não existe`)
}
