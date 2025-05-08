class AlunoDTO {
    constructor({ id, nome, email, cpf, senha, rg, endereco, saldoMoedas }) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.senha = senha;
        this.rg = rg;
        this.endereco = endereco;
        this.saldoMoedas = saldoMoedas;
    }
}

module.exports = AlunoDTO;
