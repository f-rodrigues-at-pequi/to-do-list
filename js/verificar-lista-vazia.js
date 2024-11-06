export function verificarListaVazia(lista) {
    console.log(lista.childElementCount)
    if(lista.querySelectorAll("li").length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}

const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");
