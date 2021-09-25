import { Link } from "react-router-dom";
import Abattoirs from "./Abattoirs";

const AbattoirsList = (props) => {
  const htmlAbattoir = props.abattoirData.abattoirs.map((abattoirData) => (
    <div className="col-md-4 mb-5">
      <Abattoirs abattoirData={abattoirData} />
    </div>
  ));
  return (
    <main className="container min-vh-100 px-4 px-lg-5">
      <div className="card text-white bg-pending my-5 py-4 text-center">
        <div className="card-body">
          <h2 className="text-black m-0">Mataderos</h2>
        </div>
      </div>
      <div className="row gx-4 gx-lg-5">{htmlAbattoir}</div>
      <Link
        to="/nuevo-matadero"
        type="button"
        className="btn btn-add btn-warning btn-center"
      >
        <i className="fas plus-icon fa-plus"></i>
      </Link>
    </main>
  );
};

export default AbattoirsList;
