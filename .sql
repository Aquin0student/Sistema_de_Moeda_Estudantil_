create schema if not exists sistema_de_moeda_estudantil;

USE sistema_de_moeda_estudantil;

-- Tabela Usuario (superclasse)
CREATE TABLE Usuario (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

-- Tabela Professor
CREATE TABLE Professor (
    id BIGINT PRIMARY KEY,
    departamento VARCHAR(100),
    saldoMoedas DOUBLE DEFAULT 1000,
    FOREIGN KEY (id) REFERENCES Usuario(id)
);

-- Tabela Aluno
CREATE TABLE Aluno (
    id BIGINT PRIMARY KEY,
    rg VARCHAR(20),
    endereco VARCHAR(255),
    saldoMoedas DOUBLE DEFAULT 0,
    curso VARCHAR(255),
    FOREIGN KEY (id) REFERENCES Usuario(id)
);

-- Tabela EmpresaParceira
CREATE TABLE EmpresaParceira (
    id BIGINT PRIMARY KEY,
    cnpj VARCHAR(18) NOT NULL UNIQUE,
    endereco VARCHAR(255),
    FOREIGN KEY (id) REFERENCES Usuario(id)
);

-- Tabela Instituicao
CREATE TABLE Instituicao (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

-- Tabela Transacao
CREATE TABLE Transacao (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    data DATE NOT NULL,
    valor INT NOT NULL,
    motivo VARCHAR(255),
    status VARCHAR(50),
    professorId BIGINT,
    alunoId BIGINT,
    FOREIGN KEY (professorId) REFERENCES Professor(id),
    FOREIGN KEY (alunoId) REFERENCES Aluno(id)
);

-- Tabela Vantagem
CREATE TABLE Vantagem (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(255),
    custoMoedas INT NOT NULL,
    foto BLOB,
    empresaParceiraId BIGINT,
    FOREIGN KEY (empresaParceiraId) REFERENCES EmpresaParceira(id)
);

-- Tabela Cupom
CREATE TABLE Cupom (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(100) UNIQUE NOT NULL DEFAULT (SUBSTRING(MD5(RAND()), 1, 10)),
    status VARCHAR(50),
    vantagemId BIGINT,
    alunoId BIGINT,
    foreign key (alunoId) references Aluno(id),
    FOREIGN KEY (vantagemId) REFERENCES Vantagem(id)
);

-- Relacionamento entre Professor e Instituicao (n:n)
CREATE TABLE ProfessorInstituicao (
    professorId BIGINT,
    instituicaoId BIGINT,
    PRIMARY KEY (professorId, instituicaoId),
    FOREIGN KEY (professorId) REFERENCES Professor(id),
    FOREIGN KEY (instituicaoId) REFERENCES Instituicao(id)
);

-- Relacionamento entre Aluno e Instituicao (n:n)
CREATE TABLE AlunoInstituicao (
    alunoId BIGINT,
    instituicaoId BIGINT,
    PRIMARY KEY (alunoId, instituicaoId),
    FOREIGN KEY (alunoId) REFERENCES Aluno(id),
    FOREIGN KEY (instituicaoId) REFERENCES Instituicao(id)
);


-- Usuários (superclasse)
INSERT INTO Usuario (id, nome, email, cpf, senha) VALUES
(1, 'Carlos Silva', 'carlos@edu.com', '123.456.789-00', 'senha123'),
(2, 'Maria Souza', 'maria@edu.com', '987.654.321-00', 'senha456'),
(3, 'Empresa ABC', 'contato@empresaabc.com', '111.222.333-44', 'parceira2024');

-- Professor
INSERT INTO Professor (id, departamento, saldoMoedas) VALUES
(1, 'Engenharia de Software', 1000.0);

-- Aluno
INSERT INTO Aluno (id, rg, endereco, saldoMoedas, curso) VALUES
(2, 'MG-11.222.333', 'Rua das Acácias, 123', 50.0, 'Ciência da Computação');

-- Empresa Parceira
INSERT INTO EmpresaParceira (id, cnpj, endereco) VALUES
(3, '12.345.678/0001-99', 'Av. Central, 456');

-- Instituições
INSERT INTO Instituicao (nome) VALUES
('Universidade Federal do Exemplo'),
('Instituto de Ensino Tecnológico');

-- Relacionamento Professor-Instituição
INSERT INTO ProfessorInstituicao (professorId, instituicaoId) VALUES
(1, 1);

-- Relacionamento Aluno-Instituição
INSERT INTO AlunoInstituicao (alunoId, instituicaoId) VALUES
(2, 1),
(2, 2);

-- Transações
INSERT INTO Transacao (data, valor, motivo, status, professorId, alunoId) VALUES
(CURDATE(), 20, 'Bônus por participação', 'Aprovada', 1, 2),
(CURDATE(), -10, 'Resgate de vantagem', 'Aprovada', NULL, 2);

-- Vantagens
INSERT INTO Vantagem (descricao, custoMoedas, foto, empresaParceiraId) VALUES
('Desconto de 10% em livros', 10, NULL, 3),
('Brinde exclusivo', 20, NULL, 3);

-- Cupons (agora com vínculo ao aluno)
INSERT INTO Cupom (codigo, status, vantagemId, alunoId) VALUES
('ABC10DESCONTO', 'Ativo', 1, 2),
('BRINDE2024', 'Ativo', 2, 2);
