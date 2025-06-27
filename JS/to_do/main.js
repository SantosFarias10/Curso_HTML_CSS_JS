const todos = JSON.parse(localStorage.getItem("todos")) || [];  //si al buscar los todos en el localStorage da null (siempre en la primera iteracion), entonces va a usar el arreglo vacio

const render = () => {
  const list = document.getElementById("todoList");
  //todoList.innerHTML = "";
  //for(let i = 0; todos.length > i; i++) {
  //  todoList.innerHTML += '<li>' + todos[i] + '</li>'
  //}
  //Version mas Simple con Map
  const todosTemplate = todos.map(t => '<li>' + t + '</li>');
  list.innerHTML = todosTemplate.join(''); //join toma todos lo elementos del array y los junta

  //const a = [1,2,3,4]
  //arr.splice(0, 1)  //elimina elementos de un array, en el ejemplo borra solo 1 elemento (el primero)
  
  const elementos = document.querySelectorAll("#todoList li"); //buscamos todos elemento ya sea por su id, clase, etiqueta
  elementos.forEach((elemento, i) => { //funcion para iterar sobre cada elemento del array y ejecutar una funcion sobre ellos
    elemento.addEventListener("click", () => {  //agregamos un evento al click
      elemento.parentNode.removeChild(elemento);
      todos.splice(i, 1);
      actualizaTodos(todos);
      render(); //como los indices no se actualizan con respecto al arreglo, entonces volvemos a llamar la funcion para eliminarlo xd.
    })
  })
}

const actualizaTodos = (todos) => {
  const todoStrings = JSON.stringify(todos);
  localStorage.setItem("todos", todoStrings);
}


window.onload = () => {
  render();
  const form = document.getElementById("todoForm");
  form.onsubmit = (e) => {  // Manejamos las cosas cuando apretamos el boton
    e.preventDefault(); 
    
    const todo = document.getElementById("todo");
    
    const todoText = todo.value;  //Guardamos el valor del todo, para luego poder
    todo.value = "";  //Reemplazar el valor
    
    todos.push(todoText);
    actualizaTodos(todos);
    render();
  }
}
