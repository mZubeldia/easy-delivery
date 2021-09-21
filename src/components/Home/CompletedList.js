import CompletedTask from "./CompletedTask";

const CompletedList = (props) => {
  const htmlCompleted = props.taskData.tasks.map((completedTask, index) => (
    <div className="col-md-4 mb-5">
      <CompletedTask completedTask={completedTask} />
    </div>
  ));
  return (
    <section className="done-section">
      <div className="card text-white bg-completed my-5 py-4 text-center">
        <div className="card-body">
          <h3 className="text-white m-0">Tareas completadas</h3>
        </div>
      </div>
      <div className="row gx-4 gx-lg-5">{htmlCompleted}</div>
      <div className="col-md-4 mb-5"></div>
    </section>
  );
};

export default CompletedList;
