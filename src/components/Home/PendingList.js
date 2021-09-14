import { Link } from "react-router-dom";

const PendingList = (props) => {
  console.log(props.taskData.tasks);
  const htmlPending = props.taskData.tasks.map((pendingTask) => (
    <div className="col-md-4 mb-5">
      <div key={pendingTask.id} className="card h-100 border-warning">
        <div className="card-body">
          <h2 className="card-title">Tarea {pendingTask.id}</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item  mb-2">{pendingTask.pickUpDate}</li>
            <li className="list-group-item mb-2">{pendingTask.farm}</li>
            <li className="list-group-item mb-2">{pendingTask.dropOffDate}</li>
            <li className="list-group-item mb-2">{pendingTask.abattoir}</li>
          </ul>
        </div>
        <div className="card-footer">
          <Link className="btn btn-warning btn-sm" to="/detalle-tarea">
            More Info
          </Link>
        </div>
      </div>
    </div>
  ));
  console.log(htmlPending);

  return (
    <section className="pending-section">
      <div className="card text-white bg-warning my-5 py-4 text-center">
        <div className="card-body">
          <h3 className="text-white m-0">
            <i className="d-xl-none far fa-clock pending-icon "></i> Tareas
            pendientes
          </h3>
        </div>
      </div>

      <div className="row gx-4 gx-lg-5">{htmlPending}</div>
    </section>
  );
};

export default PendingList;
