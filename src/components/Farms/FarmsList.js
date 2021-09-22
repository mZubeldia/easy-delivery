import { Link } from "react-router-dom";
import Farms from "./Farms";

const FarmsList = (props) => {
  console.log(props.farmData.farms);
  const htmlFarm = props.farmData.farms.map((farmData, index) => (
    <div className="col-md-4 mb-5">
      <Farms farmData={farmData} />
    </div>
  ));
  return (
    <main className="container min-vh-100 px-4 px-lg-5 min-h">
      <div className="card text-white bg-completed my-5 py-4 text-center">
        <div className="card-body">
          <h2 className="text-black m-0">Granjas</h2>
        </div>
      </div>

      <div className="row gx-4 gx-lg-5">{htmlFarm}</div>
      <Link
        to="/nueva-granja"
        type="button "
        className="btn btn-add btn-floating btn-warning "
      >
        <i className="fas plus-icon fa-plus"></i>
      </Link>
    </main>
  );
};

export default FarmsList;
