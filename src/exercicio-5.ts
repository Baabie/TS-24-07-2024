
export type Usuario = {
    nome: string;
    idade: number;
    ocupacao: string;
    salario?: number;
};

    export function infoUsuario(user: Usuario): string {
    const salario = user.salario ? `salario $${user.salario}` : 'salario N/A';
    return `${user.nome}, ${user.idade} years old, ${user.ocupacao}, ${salario}`;
}
    
    const user: Usuario = { nome: 'Ana', idade: 30, ocupacao: 'Programadora' };
    console.log(
    infoUsuario(user)
);