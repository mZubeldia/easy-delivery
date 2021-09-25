const Employees = (props) => {
  return (
    <div className="card h-100 border-completed">
      <div className="card-body">
        <h3 className="card-title">
          {props.employeeData.name} {props.employeeData.surname}
        </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item  mb-2">
            Email personal: {props.employeeData.personalEmail}
          </li>
          <li className="list-group-item mb-2">
            Tlf.: {props.employeeData.phone}.
          </li>
          <li className="list-group-item mb-2">{props.employeeData.iban}</li>
        </ul>
      </div>
    </div>
  );
};

export default Employees;
