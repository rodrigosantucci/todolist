// Conexão com o banco de dados mysql

const myqsl = require('promise-mysql');
const { try } = require('bluebird');

const dbConfig = {
    user: "todolist",
    password: "6o4r1g45A.",
    database: "todolist",
    host: "localhost",
    connectionLimit: 10
}

module.exports = async () => {
    try {
        let pool;
        let con;
        if (pool) con = pool.getConnection();
        else {
            pool = await myqsl.createPool(dbConfig);
            con = pool.getConnection();
        }
        return con;
    }
    catch (ex) {
        throw ex;
    }
}