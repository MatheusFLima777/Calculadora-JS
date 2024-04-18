const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let saldo;
rl.question("Por gentileza, insira o número de vitórias: ", (vitoria) => {
    rl.question("Por gentileza, insira o número de derrotas: ", (derrota) => {
        saldo = parseInt(vitoria) - parseInt(derrota);

        function CalcRank(saldo) {
            let rank;
            if (saldo < 10) {
                rank = "Ferro";
            } else if (saldo >= 10 && saldo <= 20) {
                rank = "Bronze";
            } else if (saldo > 20 && saldo <= 50) {
                rank = "Prata";
            } else if (saldo > 50 && saldo <= 80) {
                rank = "Ouro";
            } else if (saldo > 80 && saldo <= 90) {
                rank = "Diamante";
            } else if (saldo > 90 && saldo <= 100) {
                rank = "Lendário";
            } else if (saldo >= 101) {
                rank = "Imortal";
            } else {
                rank = "Classificação não encontrada";
            }
            console.log("O Herói tem saldo de " + saldo + " e está no nível de " + rank);
        }

        CalcRank(saldo);

        rl.close();
    });
});
