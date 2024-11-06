import {adicionarItem} from "./js/adicionar-item.js";
import {verificarListaComprados} from "./js/verifica-lista-comprados.js";

const botaoSalvarItem = document.getElementById("adicionar-item")
botaoSalvarItem.addEventListener("click", adicionarItem);

const listaComprados = document.getElementById("lista-comprados");
verificarListaComprados(listaComprados);

