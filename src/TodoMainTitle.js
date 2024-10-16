import "./TodoMainTittle.css";
function TodoMainTitle({ completados, totalTareas }) {
  // definimos las props que queremos usar para que sea dinamico
  return (
    <h1>
      Haz completado {completados} de {totalTareas} tareas
    </h1> // la manera de llamar a las props es a traves de entre llaves{} con el nombre que definimos.
  );
}

export { TodoMainTitle };
