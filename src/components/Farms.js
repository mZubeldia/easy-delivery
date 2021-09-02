import { Link } from "react-router-dom";

const Farms = () => {
  return (
    <main className="container min-vh-100 px-4 px-lg-5 min-h">
      <div className="card text-white bg-secondary my-5 py-4 text-center">
        <div className="card-body">
          <h3 className="text-white m-0">Granjas</h3>
        </div>
      </div>

      <div className="row gx-4 gx-lg-5">
        <div className="col-md-4 mb-5">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title">Granja 1</h2>
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
              <h2 className="card-title">Granja 2</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem
                sunt quam eaque, vel, non in id dolore voluptates quos eligendi
                labore.
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
              <h2 className="card-title">Granja 3</h2>
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
      <div className="fixed-action-btn horizontal md-2 mb-3">
        <Link
          to="/nueva-granja"
          type="button "
          className="btn btn-add btn-floating btn-warning "
        >
          <i className="fas plus-icon fa-plus"></i>
        </Link>
      </div>
    </main>
  );
};

export default Farms;
