import { Link } from "react-router-dom";
import Employees from "./Employees";

const EmployeesList = (props) => {
  const htmlEmployee = props.employeeData.employees.map((employeeData) => (
    <div className="col-md-4 mb-5">
      <Employees employeeData={employeeData} />
    </div>
  ));
  return (
    <main className="container min-vh-100 px-4 px-lg-5">
      <div className="card text-white bg-completed my-5 py-4 text-center">
        <div className="card-body">
          <h2 className="text-black m-0">Empleados</h2>
        </div>
      </div>
      <div className="row gx-4 gx-lg-5">{htmlEmployee}</div>

      <div className="row justify-content-center">
        <div className="col-md-2 mb-3">
          <Link
            to="/nuevo-empleado"
            type="button"
            className="btn btn-add btn-warning btn-center"
          >
            <i className="fa plus-icon fa-plus"></i>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default EmployeesList;
