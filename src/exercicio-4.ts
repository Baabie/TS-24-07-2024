/* 4. Crie um programa para cadastrar, listar e excluir produtos de uma
lista com tipagem de Produto. */


type Produto = {
    nome: string;
    preco: number;
}

const listaProduto: Produto[] = [];

function adicionarProduto(produto: Produto): void {
    listaProduto.push(produto);
}

function produtoLista(): Produto[] {
    return listaProduto;
}

function deletarProduto(nome: string): void {
    const index = listaProduto.findIndex((p) => p.nome === nome);
    if (index !== -1) {
        listaProduto.splice(index, 1);
    }

}

adicionarProduto({nome: 'Produto 1', preco: 100})
adicionarProduto({nome: 'Produto 2', preco: 300})

console.log(produtoLista());