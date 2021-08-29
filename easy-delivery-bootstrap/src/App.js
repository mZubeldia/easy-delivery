import "./App.css";

function App() {
  return (
    <div classNameName="App">
      <header classNameName="App-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-5">
            <a className="navbar-brand" href="#!">
              Easy Delivery
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#!">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="container px-4 px-lg-5">
        <section className="hero-section row gx-4 gx-lg-5 align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg"
              alt="..."
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Easy Delivery</h1>
            <p>
              This is a template that is great for small businesses. It doesn't
              have too much fancy flare to it, but it makes a great use of the
              standard Bootstrap core components. Feel free to use this template
              for any project you want!
            </p>
            <a className="btn btn-primary" href="#!">
              Call to Action!
            </a>
          </div>
        </section>

        <section className="pending-section">
          <div className="card text-white bg-secondary my-5 py-4 text-center">
            <div className="card-body">
              <p className="text-white m-0">Tareas pendientes de completar</p>
            </div>
          </div>

          <div className="row gx-4 gx-lg-5">
            <div className="col-md-4 mb-5">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="card-title">Tarea 1</h2>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem magni quas ex numquam, maxime minus quam molestias
                    corporis quod, ea minima accusamus.
                  </p>
                </div>
                <div className="card-footer">
                  <a className="btn btn-primary btn-sm" href="#!">
                    More Info
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="card-title">Tarea 2</h2>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod tenetur ex natus at dolorem enim! Nesciunt pariatur
                    voluptatem sunt quam eaque, vel, non in id dolore voluptates
                    quos eligendi labore.
                  </p>
                </div>
                <div className="card-footer">
                  <a className="btn btn-primary btn-sm" href="#!">
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem magni quas ex numquam, maxime minus quam molestias
                    corporis quod, ea minima accusamus.
                  </p>
                </div>
                <div className="card-footer">
                  <a className="btn btn-primary btn-sm" href="#!">
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="done-section">
          <div className="card text-white bg-secondary my-5 py-4 text-center">
            <div className="card-body">
              <p className="text-white m-0">Tareas completadas</p>
            </div>
          </div>
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-4 mb-5">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="card-title">Tarea A</h2>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem magni quas ex numquam, maxime minus quam molestias
                    corporis quod, ea minima accusamus.
                  </p>
                </div>
                <div className="card-footer">
                  <a className="btn btn-primary btn-sm" href="#!">
                    More Info
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="card-title">Tarea B</h2>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod tenetur ex natus at dolorem enim! Nesciunt pariatur
                    voluptatem sunt quam eaque, vel, non in id dolore voluptates
                    quos eligendi labore.
                  </p>
                </div>
                <div className="card-footer">
                  <a className="btn btn-primary btn-sm" href="#!">
                    More Info
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="card-title">Tarea C</h2>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem magni quas ex numquam, maxime minus quam molestias
                    corporis quod, ea minima accusamus.
                  </p>
                </div>
                <div className="card-footer">
                  <a className="btn btn-primary btn-sm" href="#!">
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-5 bg-dark">
        <div className="container px-4 px-lg-5">
          <p className="m-0 text-center text-white">
            Copyright &copy; Easy Delivery 2021
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
