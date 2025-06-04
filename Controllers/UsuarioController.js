const Usuario = require('../Models/Usuario');
const AlunoFactory = require("../Factories/AlunoFactory");
const {Op} = require("sequelize");

module.exports = {
  async login(req, res) {
    try {
      const { email, senha } = req.body;

      if (!email || !senha) {
        return res.status(400).json({ error: 'Preencha todos os campos' });
      }

      const usuario = await Usuario.findOne({
        where: { email }
      });

      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }

      if (usuario.senha !== senha) {
        return res.status(401).json({ error: 'Senha incorreta.' });
      }

      req.session.usuarioId = usuario.id;

      return res.status(200).json({ message: 'Login realizado com sucesso', usuario });

    } catch (error) {
      console.error('Erro ao buscar usuário:', error.message);
      return res.status(500).json({ error: 'Erro ao buscar usuário.', message: error.message });
    }
  },

  async alterarSenha(req, res) {
  try {
    const { senha } = req.body;

    if (!senha) {
      return res.status(400).json({ error: 'A nova senha é obrigatória.' });
    }

    const usuarioId = req.session.usuarioId;

    if (!usuarioId) {
      return res.status(401).json({ error: 'Usuário não autenticado.' });
    }

    const usuario = await Usuario.findByPk(usuarioId);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    usuario.senha = senha;
    await usuario.save();

    return res.status(200).json({ message: 'Senha atualizada com sucesso.' });

  } catch (error) {
    console.error('Erro ao alterar senha:', error);
    return res.status(500).json({ error: 'Erro ao alterar senha.', message: error.message });
  }
},

  async cadastro(req, res){
    try{
      const { nome, email, cpf, rg, endereco, instituicao_id, curso} = req.body;

      if (!nome || !email || !cpf || !rg || !endereco || !instituicao_id || !curso){
        return res.status(400).json({ error: 'Preencha todos os campos' });
      }

      const usuarioExistente = await Usuario.findOne({
      where: {
      [Op.or]: [
        { email },
        { cpf }
      ]
    }
  });

      if (usuarioExistente) {
        return res.status(409).json({ error: 'Já existe um usuário com este e-mail ou CPF.' });
      }

      const aluno = await AlunoFactory.createUsuarioAluno(req.body);
      if(aluno){
        return res.status(201).json({ message: "Criado com sucesso", data: aluno });
      }

    }catch (error){
      console.error('Erro ao criar usuário:', error);
      return res.status(500).json({
      error: 'Erro ao criar usuário.',
      message: error.message,
      details: error.errors  // ← isso mostra o(s) campo(s) que falhou(aram)
  });
    }
  }

};
