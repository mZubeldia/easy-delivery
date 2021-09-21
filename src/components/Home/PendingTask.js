import { Link } from "react-router-dom";

const PendingTask = (props) => {
  var opciones = { year: "numeric", month: "short", day: "numeric" };
  var fecha = new Date().toLocaleDateString("es", opciones);
  //console.log(fecha);
  /* 
  date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
  date = new Date('2013-03-10T02:00:00Z');*/
  return (
    <>
      <div key={props.pendingTask.id} className="card h-100 border-warning">
        <div className="card-body">
          <h2 className="card-title">Tarea {props.pendingTask.id}</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item  mb-2">
              Fecha recogida: {props.pendingTask.pickUpDate}
            </li>
            <li className="list-group-item mb-2">{props.pendingTask.farm}</li>
            <li className="list-group-item mb-2">
              Fecha entrega: {props.pendingTask.dropOffDate}
            </li>
            <li className="list-group-item mb-2">
              {props.pendingTask.abattoir}
            </li>
          </ul>
        </div>
        <div className="card-footer">
          <Link className="btn btn-warning btn-sm" to="/detalle-tarea">
            More Info
          </Link>
        </div>
      </div>
    </>
  );
};

export default PendingTask;
