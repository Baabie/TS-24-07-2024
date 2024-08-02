/* 1. Crie uma função que receba 2 números e retorne um objeto
contendo a média e também um indicador booleano de
aprovado/reprovado. Considere aprovado com média >= 6. */


export function calcularMedia (a: number, b: number) {
    const media = (a + b) / 2;
    const aprovado = media >= 6;
    return {media, aprovado};
}

