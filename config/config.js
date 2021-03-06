module.exports = {
  development: {
    username: 'root',
    password: process.env.MYSQLPASSWORD,
    database: 'animalSan_db',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: 'false',
  },
  test: {
    username: 'root',
    password: process.env.MYSQLPASSWORD,
    database: 'animalSan_db',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    use_env_variable: 'JAWSDB_URL',
    dialect: 'mysql',
  },
};
