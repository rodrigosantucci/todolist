// Arquivo principal, utilizado para rodar o projeto

const Listdao = require("./dao/Listdao");
const listdao = new Listdao();


const app = async () => {

    let savedTodo = await listdao.saveEntity({
        title: "Estudar Design Patterns",
        completed: 0
    });
    console.log ("Salvar tarefa --> ", savedTodo)


    savedTodo.completed = 1;
    let atualizartarefa = await listdao.updateEntity(savedTodo);
    console.log ("Atualizar tarefa --> ", atualizartarefa);

    let todolist = await listdao.readEntity();
    console.log ("Listas tarefas --> ", todolist);

    let deletartarefa = await listdao.deleteEntity(savedTodo);
    console.log ("deletar tarefa --> ", deletartarefa);
}

app();