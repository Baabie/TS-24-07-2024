"use strict";
/* 1. Crie uma função que receba 2 números e retorne um objeto
contendo a média e também um indicador booleano de
aprovado/reprovado. Considere aprovado com média >= 6. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularMedia = calcularMedia;
function calcularMedia(a, b) {
    const media = (a + b) / 2;
    const aprovado = media >= 6;
    return { media, aprovado };
}
