import { useState } from "react";

const Farms = (props) => {

  const [farms, setFarms] = useState([])

  return (
    <>
      <div className="card h-100 border-completed">
        <div className="card-body">
          <h3 className="card-title">{props.farmData.name}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item mb-2">
              {" "}
              Geolocalizacion: {props.farmData.geolocation}
            </li>
            <li className="list-group-item mb-2">
              {props.farmData.address.street}, numero{" "}
              {props.farmData.address.number}{" "}
            </li>
            <li className="list-group-item mb-2">
              Codigo postal {props.farmData.address.postalCode}
            </li>
            <li className="list-group-item mb-2">
              Codigo postal {props.farmData.address.city}
            </li>
            <li className="list-group-item  mb-2">{props.farmData.phone}</li>

            <li className="list-group-item mb-2">
              Info adicional: {props.farmData.comments}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Farms;
