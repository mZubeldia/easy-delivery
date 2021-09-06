const TaskDetail = () => {
  return (
    <main className="container min-vh-100 px-4 px-lg-5">
      <div className="card text-white bg-secondary my-5 py-4 text-center">
        <div className="card-body">
          <h3 className="text-white m-0">Detalle</h3>
        </div>
      </div>

      <div className="row gx-4 gx-lg-5 justify-content-md-center">
        <div className="col-md-auto">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title">Juan Fernández</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item  mb-2">
                  jfernandezavazquez@ejemplo.com.
                </li>
                <li className="list-group-item mb-2">812 345 678.</li>
                <li className="list-group-item mb-2">
                  IBAN ES00 0000 00 000 0000000.
                </li>
              </ul>
            </div>
            <div className="card-footer">
              <a className="btn btn-secondary btn-sm" href="#!">
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TaskDetail;
