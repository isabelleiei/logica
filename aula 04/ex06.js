let opcao = 6;
let pesoNaTerra = 68;
let pesoNoPlaneta, gravidadeRelativa;

switch (opcao) {
    case 1:
        pesoNoPlaneta = pesoNaTerra * (gravidadeRelativa = 0.38)
        console.log (`Seu peso em Mercúrio é: ${pesoNoPlaneta}`)
        break;
    case 2:
        pesoNoPlaneta = pesoNaTerra * (gravidadeRelativa = 0.89)
        console.log (`Seu peso em Vênus é: ${pesoNoPlaneta}`)
        break;
    case 3:
        pesoNoPlaneta = pesoNaTerra * (gravidadeRelativa = 0.38)
        console.log (`Seu peso em Marte é ${pesoNoPlaneta}`)
        break;
    case 4:
        pesoNoPlaneta = pesoNaTerra * (gravidadeRelativa = 2.34)
        console.log (`Seu peso em Júpiter é: ${pesoNoPlaneta}`)
        break;
    case 5:
        pesoNoPlaneta = pesoNaTerra * (gravidadeRelativa = 1.07)
        console.log (`Seu peso em saturno é ${pesoNoPlaneta}`)
        break;
    case 6:
        pesoNoPlaneta = pesoNaTerra * (gravidadeRelativa = 0.8)
        console.log (`Seu peso em Urano é: ${pesoNoPlaneta}`)
        break;
    default:
        console.log ("opção invalida")
        break;
}