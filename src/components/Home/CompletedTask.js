import { Link } from "react-router-dom";

const CompletedTask = (props) => {
  return (
    <div key={props.completedTask.id} className="card h-100 border-completed">
      <Link className="card-link" to="/detalle-tarea">
        <div className="card-body">
          <h2 className="card-title">Tarea {props.completedTask.id}</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item  mb-2">
              Fecha recogida: {props.completedTask.pickUpDate}
            </li>
            <li className="list-group-item mb-2">{props.completedTask.farm}</li>
            <li className="list-group-item mb-2">
              Fecha entrega: {props.completedTask.dropOffDate}
            </li>
            <li className="list-group-item mb-2">
              {props.completedTask.abattoir}
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default CompletedTask;
