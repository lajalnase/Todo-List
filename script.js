const todoInput = document.getElementById("todo-input")
const addBtn = document.getElementById("btn-submit")
const todoList = document.getElementById("todo-list")


function addItem(){
  const text = todoInput.value.trim();
  if (text !== ""){
    const li = document.createElement("li");
    li.textContent = text;
    todoList.appendChild(li);
    todoInput.value = "";
    
  }
}
addBtn.addEventListener('click', () =>{console.log("click") } );
