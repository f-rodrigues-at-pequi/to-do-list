import {verificarListaVazia} from "./verificar-lista-vazia.js";
import {verificarListaComprados} from "./verifica-lista-comprados.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?")
    if (confirmacao) {
        elemento.remove()
        console.log(listaDeCompras)
        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listaComprados)
    }
}

export { excluirItem }