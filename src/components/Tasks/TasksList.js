import Tasks from "./Tasks";

const TasksList = (props) => {
  const htmlTasks = props.taskData.tasks.map((tasks) => (
    <div className="col-md-4 mb-5">
      <Tasks taskData={tasks} />
    </div>
  ));
  return (
    <main className="container min-vh-100 px-4 px-lg-5">
      <div className="card text-white bg-task my-5 py-4 text-center">
        <div className="card-body">
          <h2 className="text-black m-0">Tareas</h2>
        </div>
      </div>
      <div className="row gx-4 gx-lg-5">{htmlTasks}</div>
    </main>
  );
};

export default TasksList;
