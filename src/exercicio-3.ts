/* 3. Crie um programa que simule uma carteira de dinheiro. Este
programa vai precisar ter uma carteira contendo saldo, transações
de entrada e saídas. Ou seja, será um objeto com estas
propriedades. Depois crie uma função para lançar uma entrada e
uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
um erro ou avisar. */

class Carteira {
    saldo: number;
    transacoes: string[];

    constructor() {
        this.saldo = 0;
        this.transacoes = [];
    }

    lancarEntrada(valor: number): void {
    if (valor > 0) {
        this.saldo += valor;
        this.transacoes.push(`Entrada: +${valor.toFixed(2)}`);
    } else {
        console.error("Valor de entrada deve ser positivo");
    }
    }

    lancarSaida(valor: number): void {
    if (valor > this.saldo) {
        console.error("Saldo insuficiente para essa saída");
    } else if (valor <= 0) {
        console.error("Valor de saída deve ser positivo");
    } else {
        this.saldo -= valor;
        this.transacoes.push(`Saída: -${valor.toFixed(2)}`);
    }
    }

    mostrarSaldo(): void {
    console.log(`Saldo atual: ${this.saldo.toFixed(2)}`);
    }

    mostrarTransacoes(): void {
    console.log("Transações:");
    this.transacoes.forEach((transacao) => {
        console.log(transacao);
    });
    }
}

const minhaCarteira = new Carteira();

minhaCarteira.lancarEntrada(100);
minhaCarteira.lancarEntrada(50);
minhaCarteira.lancarSaida(30);
minhaCarteira.lancarSaida(150);

minhaCarteira.mostrarSaldo();
minhaCarteira.mostrarTransacoes();