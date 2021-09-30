import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-black2 ">
        <div className="container px-5">
          <a className="navbar-brand" href="/home">
            <h1 className="brand-title">Easy Delivery</h1>
            <svg
              width="344"
              height="50"
              style={{ display: "inline-block" }}
              viewBox="0 0 344 323"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="pig-nose">
                <g id="nose" filter="url(#filter0_d)">
                  <path
                    d="M340 187.697C340 268.21 280.489 303.026 186.256 314.099C180.778 314.743 175.231 314.729 169.756 314.055C79.3702 302.934 4 268.104 4 187.697C4 107.032 61.8386 14.9732 160.897 0.961497C166.261 0.202779 171.727 0.222731 177.075 1.08555C266.471 15.5078 340 107.266 340 187.697Z"
                    fill="#D029D3"
                    fill-opacity="0.21"
                    shape-rendering="crispEdges"
                  />
                </g>
                <g id="nostril-left" filter="url(#filter1_d)">
                  <path
                    d="M146 163.488C146 192.49 127.644 216 105 216C82.3563 216 64 192.49 64 163.488C64 134.487 82.3563 99 105 99C127.644 99 146 134.487 146 163.488Z"
                    fill="#D029D3"
                    fill-opacity="0.35"
                    shape-rendering="crispEdges"
                  />
                </g>
                <g id="nostril-right" filter="url(#filter2_d)">
                  <path
                    d="M275 163.488C275 192.49 256.644 216 234 216C211.356 216 193 192.49 193 163.488C193 134.487 211.356 99 234 99C256.644 99 275 134.487 275 163.488Z"
                    fill="#D029D3"
                    fill-opacity="0.35"
                    shape-rendering="crispEdges"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0.414246"
                  width="344"
                  height="322.157"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d"
                  x="60"
                  y="99"
                  width="90"
                  height="125"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d"
                  x="189"
                  y="99"
                  width="90"
                  height="125"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
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
