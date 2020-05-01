
// Segundo o site do Mozilla classe serve para 
//trabalhar com herança e criar objetos de maneira facil e clara
class TodoList{
    constructor(){
        this.todos =[];
    }
    addTodos() {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.addTodos();
}