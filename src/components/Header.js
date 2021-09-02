import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header classNameName="App-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
          <a className="navbar-brand" href="/">
            Easy Delivery
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link to="/granjas" className="nav-link ">
                  {" "}
                  Granjas
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mataderos" className="nav-link ">
                  {" "}
                  Mataderos
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/empleados" className="nav-link ">
                  {" "}
                  Empleados
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tareas" className="nav-link ">
                  {" "}
                  Tareas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
