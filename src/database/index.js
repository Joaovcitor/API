import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];

// Correção: Renomear a variável 'conecction' para 'connection'
const connection = new Sequelize(databaseConfig);

// Inicializa cada modelo com a conexão
models.forEach((model) => model.init(connection));

// Configura as associações entre os modelos, se houver
models.forEach((model) => model.associate && model.associate(connection.models));

export default connection;
