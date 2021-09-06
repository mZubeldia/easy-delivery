import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header classNameName="App-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
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

          <button type="button" id="sidebarCollapse" class="navbar-toggler">
            <span class="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand" href="/">
            Easy Delivery
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
