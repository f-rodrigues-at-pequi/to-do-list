import {criarItemDaLista} from "./criar-item-da-lista.js";

const item = document.getElementById("input-item");
console.log("oi")
const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(event) {
    event.preventDefault()

    const itemDaLista = criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDaLista)
}