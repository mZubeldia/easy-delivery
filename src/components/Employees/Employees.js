import { Link } from "react-router-dom";

const Employees = () => {
  return (
    <main className="container min-vh-100 px-4 px-lg-5">
      <div className="card text-white bg-completed my-5 py-4 text-center">
        <div className="card-body">
          <h3 className="text-black m-0">Empleados</h3>
        </div>
      </div>

      <div className="row gx-4 gx-lg-5">
        <div className="col-md-4 mb-5">
          <div className="card h-100 border-completed">
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

        <div className="col-md-4 mb-5">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title">Lorena García</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item  mb-2">lejemplo@gmail.com.</li>
                <li className="list-group-item mb-2">712 345 678.</li>
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
        <div className="col-md-4 mb-5">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title">Jose Antonio Vázquez</h2>

              <ul className="list-group list-group-flush">
                <li className="list-group-item  mb-2">javazquez@gmail.com.</li>
                <li className="list-group-item mb-2">612 345 678.</li>
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
      <div className="row justify-content-center">
        <div className="col-md-2 mb-3">
          <Link
            to="/nuevo-empleado"
            type="button"
            className="btn btn-add btn-warning btn-center"
          >
            <i className="fa plus-icon fa-plus"></i>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Employees;
