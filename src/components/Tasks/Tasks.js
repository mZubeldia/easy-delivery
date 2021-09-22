import { Link } from "react-router-dom";

const Tasks = (props) => {
  return (
    <div key={props.taskData.id} className="card h-100 border-task">
      <Link className="card-link" to="/detalle-tarea">
        <div className="card-body">
          <h3 className="card-title">Tarea {props.taskData.id}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item  mb-2">
              Fecha recogida: {props.taskData.pickUpDate}
            </li>
            <li className="list-group-item mb-2">{props.taskData.farm}</li>
            <li className="list-group-item mb-2">
              Fecha entrega: {props.taskData.dropOffDate}
            </li>
            <li className="list-group-item mb-2">{props.taskData.abattoir}</li>
          </ul>
        </div>
      </Link>
      <div className="row justify-content-center">
        <div className="col-md-2 mb-3">
          <Link
            to="/nueva-tarea"
            type="button"
            className="btn btn-add btn-warning btn-center"
          >
            <i className="fas plus-icon fa-plus"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
