import PendingTask from "./PendingTask";

const PendingList = (props) => {
  const htmlPending = props.taskData.tasks.map((pendingTask, index) => (
    <div className="col-md-4 mb-5">
      <PendingTask pendingTask={pendingTask} />
    </div>
  ));

  return (
    <section className="pending-section">
      <div className="card text-white bg-pending my-5 py-4 text-center">
        <div className="card-body">
          <h2 className="text-black m-0">Tareas pendientes</h2>
        </div>
      </div>

      <div className="row gx-4 gx-lg-5">{htmlPending}</div>
    </section>
  );
};

export default PendingList;
