//Declarar constante GLOBAL 
const codigoProduto = "NOT2020";
//Declare a variável GLOBAL para o nome do produto
var produto = "notbook";
//Declarar a variável LOCAL para categoria do produto
function categoria(){
    let categoria = "Eletrônico";
    return categoria;
}

console.log(produto)
console.log(categoria());
console.log(codigoProduto);
console.log(`O produto é: ${produto}. A categoria é: ${categoria()}. O código do produto é:${codigoProduto}.`);
