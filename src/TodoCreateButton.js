import "./stylesButton.css";
function TodoCreateButton() {
  return (
    <div className="StyleButton">
      <button
        className="StyleButtonCreatetodo"
        onClick={(event) => {
          console.log("Le diste click");
          console.log(event);
          console.log(event.target);
        }}
      >
        Crea nuevas tareas para hacer
      </button>
    </div>
  );
}

export { TodoCreateButton };
