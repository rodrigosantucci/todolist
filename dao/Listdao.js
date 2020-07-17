const dbConnection = require("../dbConnection");
const queries = require("../queries/queries");

module.exports = class Listdao {

    async saveEntity(entity) {

        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            let savedTodo = con.query(queries.insert_todo,[entity.title, entity.completed]);
            await con.query("COMMIT");
            entity.id = savedTodo.insertId;
            return entity;
        } catch (ex) {
            await con.query("ROLLBACK");
            console.log(ex);
            throw ex;
        } finally {
            await con.release();
            await con.destroy();
        }
    }

    async updateEntity(entity) {

        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            await con.query(queries.update_todo, [
                entity.title,
                entity.completed,
                entity.id
            ]);
            await con.query("COMMIT");
            return true;
        } catch (ex) {
            await con.query("ROLLBACK");
            console.log(ex);
            throw ex;
        } finally {
            await con.release();
            await con.destroy();
        }
    }


    async deleteEntity(entity) {

        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            await con.query(queries.delete_todo, [id]);
            await con.query("COMMIT");
            return true;
        } catch (ex) {
            await con.query("ROLLBACK");
            console.log(ex);
            throw ex;
        } finally {
            await con.release();
            await con.destroy();
        }
    }

    async readEntity(entity) {

        let con = await dbConnection();
        try {
            await con.query("START TRANSACTION");
            await con.query(queries.readtodo);
            await con.query("COMMIT");
            fazer = JSON.parse(JSON.stringify(fazer));
            return fazer;
        } catch (ex) {
            await con.query("ROLLBACK");
            console.log(ex);
            throw ex;
        } finally {
            await con.release();
            await con.destroy();
        }
    }
}