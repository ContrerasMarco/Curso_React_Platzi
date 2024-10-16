//import logo from "./platzi.webp";
import React from "react";
//import "./App.css";
import { TodoMainTitle } from "./TodoMainTitle";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./todoList";
import { TodoItem } from "./TodoItem";
import { TodoCreateButton } from "./TodoCreateButton";

const defaultTodos = [
  //array de creacion de tareas, despues se convierte en un estado para que sea dinamico
  { text: "Cortar cebolla", completados: false }, // completed hace referencia a si el to-do o tarea ya esa completado o no.
  { text: "Tomar el curso de Platzi de react.js", completados: true },
  { text: "Llorar con la llorona", completados: false },
  { text: "Estudiar todos los dias una hora", completados: true },
  { text: "Ver a la U todos los fin de semana", completados: true },
];
function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const todosCompletado = todos.filter(
    //a esto se le llama estado derivados en donde se crea una variable y se usa un estado para caluclarr algo.
    (todos) => !!todos.completados
  ).length; /* se crea variable y arrow function para validad la catidad de to-do completado*/
  const TotalTodos = todos.length; //se crea variable para ver cuantas tareas son en total usando el metodo length.

  const searchedTodos = todos.filter((todos) => {
    return todos.text.toLowerCase().includes(searchValue.toLowerCase());
  });
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todos) => todos.text == text);
    newTodos[todoIndex].completados = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todos) => todos.text == text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };
  return (
    <React.Fragment>
      <TodoMainTitle completados={todosCompletado} totalTareas={TotalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todos) => (
          <TodoItem
            key={todos.text}
            text={todos.text}
            completados={todos.completados}
            onComplete={() => completeTodo(todos.text)}
            onDelete={() => deleteTodo(todos.text)}
          />
        ))}
      </TodoList>
      <TodoCreateButton />
    </React.Fragment>
  );
}

export default App;
