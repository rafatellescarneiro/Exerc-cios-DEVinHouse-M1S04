class Endereco{
  constructor(Logradouro, numero, cidade, estado, pais, cep){
      this.Logradouro = Logradouro;
      this.numero = numero;
      this.cidade = cidade;
      this.estado = estado;
      this.pais = pais;
      this.cep = cep;
      

  }
}

class Cliente {
  constructor(nome, cpf, endereco, celular) {
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.celular = celular;
  }

  get ValidaCpf() {
    return this.validarCpf();
  }

  validarCpf() {
    if (this.cpf.length !== 11) {
      return "CPF inválido.";
    } else {
      return "CPF válido.";
    }
  }
}


class Conta {
  constructor(numConta, saldo, cliente){
      this.numConta = numConta;
      this.saldo = saldo;
      this.cliente = cliente;
  }

}

class Transacoes {
  constructor(conta, valorDaTransacao, numeroDaConta) {
    this.conta = conta;
    this.valorDaTransacao = valorDaTransacao;
    this.idDeTransferencia = 1;
    this.data = new Date();
    this.numeroDaConta = numeroDaConta;
  }

  get transferencia() {
    return this.fazerTransferencia();
  }

  fazerTransferencia() {
    return `Transferencia feita, novo saldo: ${(this.conta -= this.valorDaTransacao)}`;
  }

  get deposito() {
    return this.fazerDeposito();
  }

  fazerDeposito() {
    this.idDeTransferencia++;
    return `Deposito feito, novo saldo: ${(this.conta += this.valorDaTransacao)} ID da transação: ${
      this.idDeTransferencia
    } na data: ${this.data}`;
  }
}


const transf = new Transactions()
console.log(transf.transferenciaConta());