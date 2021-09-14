import { Link } from "react-router-dom";

const PendingTask = (props) => {
  return (
    <>
      <div key={props.pendingTask.id} className="card h-100 border-warning">
        <div className="card-body">
          <h2 className="card-title">Tarea {props.pendingTask.id}</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item  mb-2">
              {props.pendingTask.pickUpDate}
            </li>
            <li className="list-group-item mb-2">{props.pendingTask.farm}</li>
            <li className="list-group-item mb-2">
              {props.pendingTask.dropOffDate}
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
