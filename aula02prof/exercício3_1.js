//Define um array chamado temperaturas que armazena 4 temperaturas em celcius
const temperaturas = [15, 22, 30, 39];

//Imprime todas as temperaturas do array
console.log(`As temperaturas armazenadas são: ${temperaturas}°`);

//Sorteia uma das temperaturas do array acima
const temperaturaAleatoria = temperaturas[Math.floor(Math.random() * temperaturas.length)];

//Converte a temperatura para fahrenheit
const teperaturaF = (temperaturaAleatoria * 9/5) + 32;

console.log (`A temperatura sorteada é ${temperaturaAleatoria} °C, que corresponde a ${teperaturaF}°F`);
