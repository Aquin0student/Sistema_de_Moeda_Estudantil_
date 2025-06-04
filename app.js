const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const dotenv = require('dotenv');
const mysql = require('mysql2');


dotenv.config({ path: '.env' });

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const alunoRouter = require('./routes/AlunoRoute')
const professorRouter = require('./routes/ProfessorRoute')
const empresaRouter = require('./routes/EmpresaRouter')

const app = express();

// Configurações
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middlewares
app.use(session({
  secret: 'aaaa',
  resave: false,
  saveUninitialized: false
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Conexão com o banco de dados
const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar com o banco de dados:', err);
  } else {
    console.log('Conexão com o banco de dados realizada com sucesso!');
  }
});

// Middleware de autenticação (exemplo de uso)
const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.redirect('/login');
};

// Rotas
app.use('/', usersRouter);
app.use('/aluno', alunoRouter);
app.use('/professor', professorRouter)
app.use('/empresa', empresaRouter)

// Erros
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', { message: err.message, error: err });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});

module.exports = app;
