const mediaParaAprovacao = 7.00;
var notas = [7.5, 6.0, 9.8];
const media = ((notas[0]+notas[1]+notas[2])/notas.length).toFixed(2)
var statusNota;

if (media < mediaParaAprovacao) {
    statusNota = "o aluno está reprovado"
} else {
    statusNota = "o aluno está aprovado!! Ihuuuuuuuuuuuuuuu"
}


console.log(`A primeira nota do aluno é ${notas[0]}. A segunda nota do aluno é ${notas[1]}. A terceira nota do aluno ${notas[2]}\n
a média do aluno é ${media}. portanto, ${statusNota}`);