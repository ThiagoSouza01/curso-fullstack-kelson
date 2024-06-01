// quero uma arrow function chamada mudaTexto
// dentro dela quero uma variável título que recebe
// document.getElementById("id-do-elemento")
// na outra linha chame: essa-variavel.innerText = "Novo texto"

//dentro do HTML conecte o scripts/script.js:
//<script src="scripts/script.js"></script>
//coloque essa importação antes de fechar o body

const mudaTexto = () => {
    let elementoParaMudarTexto = document.getElementById("titulo");
    elementoParaMudarTexto.innerText = "Mudouuu!"
}