const Aluno = require('../Models/Aluno');
const Usuario = require("../Models/Usuario");

class AlunoSequelizeFactory {
  /**
   * Cria uma instância do Aluno (não salva no banco).
   */
  static create({ id, curso, instituicaoId }) {
    if (!id || !curso || !instituicaoId) {
      throw new Error('Campos obrigatórios faltando para criação de Aluno');
    }

    return Aluno.build({ id, curso, instituicaoId });
  }

  /**
   * Cria e salva um aluno no banco de dados.
   */
  static async createAndSave({ id, curso, instituicaoId }) {
    if (!id || !curso || !instituicaoId) {
      throw new Error('Campos obrigatórios faltando para criação de Aluno');
    }

    return await Aluno.create({ id, curso, instituicaoId });
  }

  /**
   * Cria e salva um Usuario Aluno de uma vez no banco de dados.
   */

  static async createUsuarioAluno({ nome, email, cpf, senha, curso, instituicaoId }) {
  const usuario = await Usuario.create({ nome, email, cpf, senha });
  const aluno = await Aluno.create({ id: usuario.id, curso, instituicaoId });
  return { usuario, aluno };
}
}

module.exports = AlunoSequelizeFactory;
