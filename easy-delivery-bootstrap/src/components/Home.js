import ScrollButton from "../ScrollButton";

const Home = () => {
  return (
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
          <a className="btn btn-secondary" href="#!">
            Call to Action!
          </a>
        </div>
      </section>

      <section className="pending-section">
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
                <h2 className="card-title">Tarea 1</h2>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  magni quas ex numquam, maxime minus quam molestias corporis
                  quod, ea minima accusamus.
                </p>
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
                <h2 className="card-title">Tarea 2</h2>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem
                  sunt quam eaque, vel, non in id dolore voluptates quos
                  eligendi labore.
                </p>
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
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  magni quas ex numquam, maxime minus quam molestias corporis
                  quod, ea minima accusamus.
                </p>
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
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  magni quas ex numquam, maxime minus quam molestias corporis
                  quod, ea minima accusamus.
                </p>
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
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem
                  sunt quam eaque, vel, non in id dolore voluptates quos
                  eligendi labore.
                </p>
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
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  magni quas ex numquam, maxime minus quam molestias corporis
                  quod, ea minima accusamus.
                </p>
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
