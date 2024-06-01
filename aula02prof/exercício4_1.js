let aluno = {
nome: "Creuza",
cpf: "724.744.521-21",
cidade: "Caruaru",
notas: [7.9, 8.0, 6.5, 9.8]
};

console.log(`Nome: ${aluno.nome}`)
console.log(`CPF: ${aluno.cpf}`)
console.log(`Cidade: ${aluno.cidade}`)

console.log(`Nota 1: ${aluno.notas[0]}`);
console.log(`Nota 2: ${aluno.notas[1]}`);
console.log(`Nota 3: ${aluno.notas[2]}`);
console.log(`Nota 4: ${aluno.notas[3]}`);

const media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2] + aluno.notas[3]) / aluno.notas.lenght;
console.log(`A media é: ${madia.toFixed(2)}`)

const notaAleatoria = aluno.notas[Math.floor (Math.random() * aluno.notas.lenght)];