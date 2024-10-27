import "./todoItem.css";
import { IconComplete } from "./IconComplete";
import { IconDelete } from "./IconDelete";
function TodoItem(props) {
  return (
    <li className="todoList">
      <IconComplete
       completados= {props.completados}
       onComplete={props.onComplete}
      />

      {/*
      <span
        className={`clickTodoListo  click_Icon-check ${props.completados && "clic_icon_active"
          } `}
        onClick={props.onComplete}
      /*se inyecta javascript para y usar el operador ternario para preguntar una condicion
       para verificar en este caso que si o solo si cuando al apretar el ticket de completado 
       se active el color correspondiente a que una tarea haya sido completada y que se active la clase
      correspondiente en este caso clic_icon_active
      >
        V
      </span>*/}
      <p className={`todoitemName ${props.completados && "todoItemComplete"} `}>
        {props.text}
      </p>

      <IconDelete 
      onDelete={props.onDelete}/>
      {/*<span
        className="todoDelete click_Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span>*/}
    </li>
  );
}

export { TodoItem };

/*function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        V
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}
*/
