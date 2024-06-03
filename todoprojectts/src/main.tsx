import './index.css'

interface Todo{
  title:string,
  isCompleted:boolean,
  readonly id:string
}

let todos:Array<Todo> = [];

const todoContainer = document.querySelector('.todocontainer') as HTMLDivElement

const todoInput = document.getElementById('title') as HTMLInputElement


const myForm = document.getElementById('myform') as HTMLFormElement


myForm.onsubmit = (e:SubmitEvent) => {
  e.preventDefault();
  console.log(todoInput.value);
  const todo:Todo = {
    title:todoInput.value,
    isCompleted:false,
    id:String(Math.random()*10000)
  }
  todos.push(todo)
  todoInput.value = "" ;
  renderTodo(todos); 
}


const generateTodo = (title:string,isCompleted:boolean,id:string) => {
  const todoElement:HTMLDivElement = document.createElement('div');
  todoElement.className = "todo"

  // creating a checkbox
  const checkBox:HTMLInputElement = document.createElement('input');
  checkBox.setAttribute('type','checkbox')
  checkBox.className = 'isCompleted'
  checkBox.checked = isCompleted
  
  // creating p for the title
  const paragraph:HTMLParagraphElement = document.createElement('p');
  paragraph.innerText = title

  // creating a delete button
  const btn:HTMLButtonElement = document.createElement('button')
  btn.innerText='X'
  btn.className='deleteBtn'

  btn.onclick = () => {
    deleteToDo(id);
  }

  // appemding all todo items
  todoElement.append(checkBox,paragraph,btn);
  todoContainer.append(todoElement)
}

const renderTodo = (todos:Todo[]) => {
  todoContainer.innerHTML = ''
  todos.forEach(item => {
    generateTodo(item.title,item.isCompleted,item.id)
  })
}


const deleteToDo = (id:string) => {
  console.log("clicked");
  todos = todos.filter((todo) =>{
    console.log(todo.id);
    return todo.id !== id
  })
  console.log(todos);
  renderTodo(todos)
}