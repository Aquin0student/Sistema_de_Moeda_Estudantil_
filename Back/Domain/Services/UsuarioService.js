const { Usuario } = require('../../Domain/Entities');
const UsuarioDTO = require('../DTOs/UsuarioDTO');
const UsuarioFactory = require('../../Domain/Factories/UsuarioFactory');

class UsuarioService {
    async criarUsuario(data) {
        const entity = UsuarioFactory.criar(data);
        const novo = await Usuario.create(entity);
        return new UsuarioDTO(novo);
    }

    async listarUsuarios() {
        const usuarios = await Usuario.findAll();
        return usuarios.map(u => new UsuarioDTO(u));
    }

    async obterUsuarioPorId(id) {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) return null;
        return new UsuarioDTO(usuario);
    }

    async atualizarUsuario(id, data) {
        await Usuario.update(data, { where: { id } });
        const atualizado = await Usuario.findByPk(id);
        return new UsuarioDTO(atualizado);
    }

    async deletarUsuario(id) {
        return await Usuario.destroy({ where: { id } });
    }
}

module.exports = new UsuarioService();