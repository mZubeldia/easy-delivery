import { Link } from "react-router-dom";

import ScrollButton from "../ScrollButton/ScrollButton";

const Home = () => {
  return (
    <main className="container px-4 px-lg-5">
      <section className="pending-section">
        {/* pending section */}
        <div className="card text-white bg-warning my-5 py-4 text-center">
          <div className="card-body">
            <h3 className="text-white m-0">
              <i className="d-xl-none far fa-clock pending-icon "></i> Tareas
              pendientes
            </h3>
          </div>
        </div>

        <div className="row gx-4 gx-lg-5">
          <div className="col-md-4 mb-5">
            <div className="card h-100 border-warning">
              <div className="card-body">
                <h2 className="card-title">Tarea 1 +</h2>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item  mb-2">Fecha de recogida</li>
                  <li className="list-group-item mb-2">Fecha de entrega</li>
                  <li className="list-group-item mb-2">
                    Direccion de recogida
                  </li>
                  <li className="list-group-item mb-2">Direccion de entrega</li>
                </ul>
              </div>
              <div className="card-footer">
                <Link className="btn btn-warning btn-sm" to="/detalle-tarea">
                  More Info
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card h-100 border-warning">
              <div className="card-body">
                <h2 className="card-title">Tarea 2</h2>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item  mb-2">Fecha de recogida</li>
                  <li className="list-group-item mb-2">Fecha de entrega</li>
                  <li className="list-group-item mb-2">
                    Direccion de recogida
                  </li>
                  <li className="list-group-item mb-2">Direccion de entrega</li>
                </ul>
              </div>
              <div className="card-footer">
                <a className="btn btn-warning btn-sm" href="#!">
                  More Info
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100 border-warning">
              <div className="card-body">
                <h2 className="card-title">Tarea 3</h2>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item  mb-2">Fecha de recogida</li>
                  <li className="list-group-item mb-2">Fecha de entrega</li>
                  <li className="list-group-item mb-2">
                    Direccion de recogida
                  </li>
                  <li className="list-group-item mb-2">Direccion de entrega</li>
                </ul>
              </div>
              <div className="card-footer">
                <a className="btn btn-warning btn-sm" href="#!">
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* done section */}

      <section className="done-section">
        <div className="card text-white bg-success my-5 py-4 text-center">
          <div className="card-body">
            <h3 className="text-white m-0">Tareas completadas</h3>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5">
          <div className="col-md-4 mb-5">
            <div className="card h-100 border-success">
              <div className="card-body">
                <h2 className="card-title">Tarea A</h2>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item  mb-2">Fecha de recogida</li>
                  <li className="list-group-item mb-2">Fecha de entrega</li>
                  <li className="list-group-item mb-2">
                    Direccion de recogida
                  </li>
                  <li className="list-group-item mb-2">Direccion de entrega</li>
                </ul>
              </div>
              <div className="card-footer">
                <a className="btn btn-success btn-sm" href="#!">
                  More Info
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100 border-success">
              <div className="card-body">
                <h2 className="card-title">Tarea B</h2>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item  mb-2">Fecha de recogida</li>
                  <li className="list-group-item mb-2">Fecha de entrega</li>
                  <li className="list-group-item mb-2">
                    Direccion de recogida
                  </li>
                  <li className="list-group-item mb-2">Direccion de entrega</li>
                </ul>
              </div>
              <div className="card-footer">
                <a className="btn btn-success btn-sm" href="#!">
                  More Info
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100 border-success">
              <div className="card-body">
                <h2 className="card-title">Tarea C</h2>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item  mb-2">Fecha de recogida</li>
                  <li className="list-group-item mb-2">Fecha de entrega</li>
                  <li className="list-group-item mb-2">
                    Direccion de recogida
                  </li>
                  <li className="list-group-item mb-2">Direccion de entrega</li>
                </ul>
              </div>
              <div className="card-footer">
                <a className="btn btn-success btn-sm" href="#!">
                  More Info
                </a>
              </div>
            </div>
          </div>
          <ScrollButton />
        </div>
      </section>
    </main>
  );
};

export default Home;
