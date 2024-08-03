"use strict";
/* 7. Crie um tipo que seja composto por um User OU por um Diretor
usando interseção de tipos. Desenvolva uma função que receba
uma lista desse novo tipo e, para cada item da lista, imprima:
a. O mesmo que o exercício 5, em caso de objeto User.
b. O mesmo que o exercício 6, em caso de objeto Diretor. */
Object.defineProperty(exports, "__esModule", { value: true });
const exercicio_5_1 = require("./exercicio-5");
const exercicio_6_1 = require("./exercicio-6");
function maisInfo(list) {
    list.forEach((item) => {
        if ('comissao' in item) {
            console.log((0, exercicio_6_1.infoDiretor)(item));
        }
        else {
            console.log((0, exercicio_5_1.infoUsuario)(item));
        }
    });
}
const usuario = { nome: 'Ana', idade: 30, ocupacao: 'Programadora' };
const diretor = {
    nome: 'Lucas',
    idade: 50,
    ocupacao: 'Diretor',
    comissao: 5,
    salario: 5000,
};
maisInfo([usuario, diretor]);
