class Conta {
  constructor(numero, cpf, saldo, ativo) {
    this.numero = numero;

    this.cpf = cpf;

    this.saldo = saldo;

    this.ativo = ativo;
  }

  ativar() {
    this.ativo = true;
  }

  credito(valor) {
    if (this.ativo) {
      if (valor <= 0) {
        console.log("Impossível realizar valor não positivo...");
      } else {
        this.saldo += valor;
      }
    } else {
      console.log("Conta está inativa...");
    }
  }

  debito(valor) {
    if (this.ativo) {
      if (valor < 0) {
        console.log("Impossível realizar valor negativo...");
      } else if (valor === 0) {
        console.log("Impossível realizar valor zerado...");
      } else if (this.saldo < valor) {
        console.log("Saldo insuficiente...");
      } else {
        this.saldo -= valor;
      }
    } else {
      console.log("Conta está inativa...");
    }
  }
}

class ContaEspecial extends Conta {
  constructor(numero, cpf, saldo, limite, ativo) {
    super(numero, cpf, saldo, ativo);

    this.limite = limite;
  }

  usarLimite(valor) {
    if (valor > this.limite) {
      console.log("Impossível realizar, limite indisponível...");
    } else {
      this.limite -= valor;

      this.credito(valor);
    }

    console.log("Limite atual: " + this.limite);

    console.log("Saldo atual da conta: R$ " + this.saldo);
  }
}

const leia = require("prompt-sync")();

let tipoConta = "";

let tipo = "";

do {
  console.log("BANK NGR");

  console.log("O MELHOR BANCO DE SP");

  console.log("1 - conta poupança");

  console.log("2 - conta corrente");

  console.log("3 - conta especial");

  console.log("4 - sair");

  tipo = leia("Digite o número do tipo de conta a ser aberta: ");

  if (tipo === "1") {
    console.log("BANK NGR");

    console.log("O MELHOR BANCO DE SP");

    tipoConta = "CONTA POUPANÇA";
  } else if (tipo === "2") {
    console.log("BANK NGR");

    console.log("O MELHOR BANCO DE SP");

    tipoConta = "CONTA CORRENTE";
  } else if (tipo === "3") {
    console.log("BANK NGR");

    console.log("O MELHOR BANCO DE SP");

    tipoConta = "CONTA ESPECIAL";
  } else if (tipo === "4") {
    console.log("Saindo do programa...");

    break;
  } else {
    console.log("Opção inválida. Tente novamente.");
  }
} while (tipo != "4");

console.log(tipoConta);

const numero = parseInt(leia("Digite o número da conta: "));

const cpf = leia("Digite o CPF: ");

const c1 = new Conta(numero, cpf, 0, false);

c1.ativar();

if (tipo === "2") {
  for (let x = 1; x <= 10; x++) {
    console.log("Movimento " + x);

    console.log("Saldo da conta: " + c1.saldo + " R$");

    const valor = parseInt(leia("Digite o valor: "));

    const op = leia("Digite D - débito ou C - crédito: ").toUpperCase();

    if (op === "C") {
      c1.credito(valor);
    } else if (op === "D") {
      c1.debito(valor);
    }
  }

  const solicitarCheque = leia(
    "Deseja solicitar cheque? (S/N): "
  ).toUpperCase();

  if (solicitarCheque === "S") {
    const cheques = parseInt(
      leia("Digite a quantidade de cheques desejada (máximo 3): ")
    );

    if (cheques >= 1 && cheques <= 3) {
      const valorCheques = cheques * 30.0;

      c1.debito(valorCheques);
    } else {
      console.log(
        "Quantidade de cheques inválida. O número de cheques deve ser entre 1 e 3."
      );
    }
  }
} else if (tipo === "1") {
  for (let x = 1; x <= 10; x++) {
    console.log("Movimento " + x);

    console.log("Saldo da conta: " + c1.saldo + " R$");

    const valor = parseInt(leia("Digite o valor: "));

    const op = leia("Digite D - débito ou C - crédito: ").toUpperCase();

    if (op === "C") {
      c1.credito(valor);
    } else if (op === "D") {
      c1.debito(valor);
    }
  }

  const aniversario = leia("Digite a data de aniversário da conta: ");

  const dataAtual = leia("Digite a data de hoje: ");

  if (aniversario === dataAtual) {
    const correcao = c1.saldo * 0.05;

    c1.saldo += correcao;
  }
} else if (tipo === "3") {
  const limite = 1000;

  const c1Especial = new ContaEspecial(numero, cpf, 0, limite, true);

  for (let x = 1; x <= 10; x++) {
    console.log("Movimento " + x);

    console.log("Saldo da conta: " + c1Especial.saldo + " R$");

    const valor = parseInt(leia("Digite o valor: "));

    const op = leia("Digite D - débito ou C - crédito: ").toUpperCase();

    if (op === "C") {
      c1Especial.credito(valor);
    } else if (op === "D") {
      c1Especial.debito(valor);
    }
  }

  const usarLimite = leia(
    "Deseja utilizar o limite especial? (S/N): "
  ).toUpperCase();

  if (usarLimite === "S") {
    const valorLimite = parseInt(
      leia("Digite o valor a ser utilizado do limite: ")
    );

    c1Especial.usarLimite(valorLimite);
  }
}

console.log("Saldo final da conta: " + c1.saldo + " R$");
