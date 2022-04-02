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

class Transactions{
  constructor(numeroDaConta, data, saldoConta){
    this.idDeTransferencia = 0
    this.numeroDaconta = numeroDaConta;
    this.data = data;
    this.data = new Date();
    this.saldoConta = saldoConta;

  }
  


  get transferencia(){
    
    this.saldoConta += this.valor;

    return this.saldoConta
    
  }
  
  get Deposito(){
    
    this.saldoConta =- this.valor;

    return this.saldoConta;

  }

  get numberConta(){

    return this.conta();

  }

  valorDaTransacao(valor){
      this.valor = valor;

      if(this.valor.length == 0){
        return `Favor informar o valor da transacao`
      }

  }
  
  conta(){
    let conta = this.numeroDaconta;

      
    if(this.numeroDaconta.length == 0){
      return `Favor informar o número da conta`
    }
    return conta;
  }

}


const transf = new Transactions()
console.log(transf.transferenciaConta());