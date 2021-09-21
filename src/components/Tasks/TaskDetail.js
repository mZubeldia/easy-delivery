const TaskDetail = () => {
  return (
    <main className="container min-vh-100 px-4 px-lg-5">
      <div className="card text-white bg-secondary my-5 py-4 text-center">
        <div className="card-body">
          <h3 className="text-white m-0">Detalle tarea</h3>
        </div>
      </div>

      <div className="row gx-4 my-5 py-4 justify-content-center">
        <div className="col-6 ">
          <div className="card h-100 ">
            <div className="card-body">
              <h2 className="card-title">Tarea 1</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item  mb-2">Fecha de recogida</li>
                <li className="list-group-item mb-2">Fecha de entrega</li>
                <li className="list-group-item mb-2">Direccion de recogida</li>
                <li className="list-group-item mb-2">Granja</li>
                <li className="list-group-item mb-2">Matadero</li>
                <li className="list-group-item mb-2">Empleado</li>
                <li className="list-group-item mb-2">Camion</li>
                <li className="list-group-item mb-2">N. cerdos</li>
                <li className="list-group-item mb-2">Tipo de cerdos</li>
              </ul>
            </div>
            <div className="card-footer">
              <div className="d-flex flex-row col-sm-auto">
                <button className="btn btn-secondary btn-sm m-1" href="#!">
                  Editar
                </button>
                <button className="btn btn-secondary btn-sm m-1" href="#!">
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TaskDetail;
