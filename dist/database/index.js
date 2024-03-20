"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

const models = [_Aluno2.default, _User2.default, _Foto2.default];

// Correção: Renomear a variável 'conecction' para 'connection'
const connection = new (0, _sequelize.Sequelize)(_database2.default);

// Inicializa cada modelo com a conexão
models.forEach((model) => model.init(connection));

// Configura as associações entre os modelos, se houver
models.forEach((model) => model.associate && model.associate(connection.models));

exports. default = connection;
