// Importar o módulo readline
const readline = require('readline');

// Criar uma interface para ler entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar ao usuário que insira o nome do herói
rl.question("Qual é o nome do herói?\n", (nomeHeroi) => {
  // Solicitar ao usuário que insira a quantidade de experiência (XP) do herói
  rl.question("Quantidade de experiência (XP) do herói?\n", (xpHeroi) => {
    // Converter a entrada de XP para um número inteiro
    xpHeroi = parseInt(xpHeroi);

    // Determinar o nível do herói com base na quantidade de XP
    let nivel;

    if (xpHeroi < 1000) {
      nivel = "Ferro";
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
      nivel = "Bronze";
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
      nivel = "Prata";
    } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
      nivel = "Ouro";
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
      nivel = "Platina";
    } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
      nivel = "Ascendente";
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
      nivel = "Imortal";
    } else {
      nivel = "Radiante";
    }

    // Exibir a mensagem com o nome do herói e seu nível
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);

    // Fechar a interface readline
    rl.close();
  });
});
