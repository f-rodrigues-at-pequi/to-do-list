import {criarItemDaLista} from "./criar-item-da-lista.js";
import {verificarListaVazia} from "./verificar-lista-vazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(event) {
    event.preventDefault()

    if (item.value === "") {
        alert("Por favor, insira um item!");
        return
    }

    const itemDaLista = criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDaLista)
    verificarListaVazia(listaDeCompras)

    item.value = "";
}