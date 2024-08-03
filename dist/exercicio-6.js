"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoDiretor = infoDiretor;
function infoDiretor(Diretor) {
    const salario = Diretor.salario ? `salario $${Diretor.salario}` : 'salario N/A';
    return `Diretor ${Diretor.nome}, ${Diretor.idade} years old, commission level ${Diretor.comissao}, ${salario}`;
}
const Diretor = {
    nome: 'Bob',
    idade: 50,
    ocupacao: 'Diretor',
    comissao: 5,
    salario: 5000,
};
console.log(infoDiretor(Diretor));
