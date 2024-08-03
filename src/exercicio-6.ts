/* 6. Usando o contexto do exercício 6, crie um tipo de usuário que
representa funcionários da diretoria da empresa. O tipo Diretor deve
conter as propriedades: nome, idade, salário (opcional) e nível de
comissionamento (numérico). Crie uma função que receba um
Diretor e mostre suas informações. Exemplos:
a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A” */



import { Usuario } from "./exercicio-5";

export type Diretor = Usuario & {
    comissao: number;
};

    export function infoDiretor(Diretor: Diretor): string {
    const salario = Diretor.salario ? `salario $${Diretor.salario}` : 'salario N/A';
    return `Diretor ${Diretor.nome}, ${Diretor.idade} years old, commission level ${Diretor.comissao}, ${salario}`;
}


    const Diretor: Diretor = {
    nome: 'Bob',
    idade: 50,
    ocupacao: 'Diretor',
    comissao: 5,
    salario: 5000,
};

    console.log(
    infoDiretor(Diretor)
);