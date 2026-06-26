class Pedido {
    numero: number
    cliente: string
    valor: number
    entregue: boolean

    constructor(numero: number, cliente: string, valor: number, entregue: boolean) {
        this.numero = numero;
        this.cliente = cliente;
        this.valor = valor;
        this.entregue = entregue;
    }
}

let pedidos
new Pedido (1, "Livia", 32, true)
new Pedido (2, "Gabriel", 41, false)
new Pedido (3, "Agata", 29, true)
new Pedido (4, "João", 20, true)
new Pedido (5, "Emilly", 33, false)
new Pedido (6, "Alissa", 35, false)
new Pedido (7, "Iarly", 52, true)
new Pedido (8, "Isabelle", 41, false)

