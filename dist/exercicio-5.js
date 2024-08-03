"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoUsuario = infoUsuario;
function infoUsuario(user) {
    const salario = user.salario ? `salario $${user.salario}` : 'salario N/A';
    return `${user.nome}, ${user.idade} years old, ${user.ocupacao}, ${salario}`;
}
const user = { nome: 'Ana', idade: 30, ocupacao: 'Programadora' };
console.log(infoUsuario(user));
