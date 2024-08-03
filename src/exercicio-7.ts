/* 7. Crie um tipo que seja composto por um User OU por um Diretor
usando interseção de tipos. Desenvolva uma função que receba
uma lista desse novo tipo e, para cada item da lista, imprima:
a. O mesmo que o exercício 5, em caso de objeto User.
b. O mesmo que o exercício 6, em caso de objeto Diretor. */




import { infoUsuario, Usuario } from './exercicio-5';
import { Diretor, infoDiretor } from './exercicio-6';

type UsuarioDiretor = Usuario | Diretor;

function maisInfo(list: UsuarioDiretor[]): void {
    list.forEach((item) => {
        if ('comissao' in item) {
        console.log(infoDiretor(item));
        } else {
        console.log(infoUsuario(item));
        }
    });
}

    const usuario: Usuario = { nome: 'Ana', idade: 30, ocupacao: 'Programadora' };
    const diretor: Diretor = {
    nome: 'Lucas',
    idade: 50,
    ocupacao: 'Diretor',
    comissao: 5,
    salario: 5000,
};


maisInfo([usuario, diretor]);