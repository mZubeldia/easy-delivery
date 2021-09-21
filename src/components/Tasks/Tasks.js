import { Link } from "react-router-dom";

const Tasks = () => {
  return (
    <main className="container min-vh-100 px-4 px-lg-5">
      <div className="card text-white bg-task my-5 py-4 text-center">
        <div className="card-body">
          <h3 className="text-black m-0">Tareas</h3>
        </div>
      </div>

      <div className="row gx-4 gx-lg-5">
        <div className="col-md-4 mb-5">
          <div className="card h-100 border-task">
            <div className="card-body">
              <h2 className="card-title">Tarea 1</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                magni quas ex numquam, maxime minus quam molestias corporis
                quod, ea minima accusamus.
              </p>
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
              <h2 className="card-title">Prueba</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem
                sunt quam eaque, vel, non in id dolore voluptates quos eligendi
                labore. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur
                voluptatem sunt quam eaque, vel, non in id dolore voluptates
                quos eligendi labore. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Quod tenetur ex natus at dolorem enim!
                Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id
                dolore voluptates quos eligendi labore. Prueba texto mas largo.
              </p>
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
              <h2 className="card-title">Tarea 3</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                magni quas ex numquam, maxime minus quam molestias corporis
                quod, ea minima accusamus.
              </p>
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
            to="/nueva-tarea"
            type="button"
            className="btn btn-add btn-warning btn-center"
          >
            <i className="fas plus-icon fa-plus"></i>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Tasks;
