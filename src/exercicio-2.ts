/* 2. Crie uma função que receba uma lista de objetos contendo nota e
peso, realize a média das notas considerando o peso. Exemplos:
Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado */

interface NotaPeso {
    nota: number;
    peso: number;
}

export function calcularMediaPonderada (lista: NotaPeso[]): number{
    if (lista.length === 0) return 0;

    let somaNotas = 0;
    let somaPesos = 0;

    for (const item of lista) {
        somaNotas += item.nota * item.peso;
        somaPesos += item.peso;
    }

    return somaNotas / somaPesos;
}

const lista1: NotaPeso[] = [
    {nota: 8, peso: 2},
    {nota:6, peso:3},
];

const lista2: NotaPeso[] = [
    {nota:7, peso:1},
    {nota:5, peso: 2}
]

const media1 = calcularMediaPonderada(lista1);
console.log(`A média ponderada da lista1 é: ${media1}`);

const media2 = calcularMediaPonderada(lista2);
console.log(`A media ponderada da lista2 é ${media2}`)