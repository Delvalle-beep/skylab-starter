var bntElement = document.querySelector('#app button');
var inputElement = document.querySelector('#app input ');
var ulElement =document.querySelector('#app ul');

var itens = JSON.parse(localStorage.getItem('list_todos')) || []  ;
function renderTodos(){

    ulElement.innerHTML='';


    for(item of itens){
      var liElement = document.createElement('li');
      var todoText = document.createTextNode(item);

      var linkElement = document.createElement('a');

      linkElement.setAttribute('href','#');

      var pos = itens.indexOf(item);
      linkElement.setAttribute('onclick','deleteTodo('+ pos +')');
      var linkText = document.createTextNode('Excluir');

      linkElement.appendChild(linkText);

      liElement.appendChild(todoText);
      liElement.appendChild(linkElement);
      ulElement.appendChild(liElement);
      
    }  
}
renderTodos();

function addTodos(){
    var inputValue = inputElement.value ;
    //puxa o valor o atributo push
    itens.push(inputValue);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}
bntElement.onclick = addTodos;


//deleta as ToDos
function deleteTodo(pos){
    //o slice deleta as coisas por (posição, unidade item)
itens.splice(pos,1);
renderTodos();
saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos',JSON.stringify(itens));
}