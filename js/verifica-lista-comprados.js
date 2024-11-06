const tituloListaComprados = document.getElementById("lista-comprados");

export function verificarListaComprados(lista) {
    if(lista.querySelectorAll("li").length === 0) {
        tituloListaComprados.style.display = "none";
    } else {
        tituloListaComprados.style.display = "block";
    }
}