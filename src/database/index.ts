import knex from 'knex';
import path from 'path';

// migrations = Controle de versão de Banco de Dados;

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, "database.sqlite")
  },
  useNullAsDefault: true,
})

export default db;