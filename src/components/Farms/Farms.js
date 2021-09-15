import { Link } from "react-router-dom";

const Farms = (props) => {
  return (
    <>
      <div className="card h-100">
        <div className="card-body">
          <h2 className="card-title">{props.farmData.name}</h2>
          <p className="card-text">{props.farmData.phone}</p>
          <p className="card-text">
            Geolocalizacion: {props.farmData.geolocation}
          </p>

          <p className="card-text">
            {props.farmData.address.street}, numero{" "}
            {props.farmData.address.number}
          </p>
          <p className="card-text">
            Codigo postal {props.farmData.address.postalCode},{" "}
          </p>
          <p className="card-text">{props.farmData.address.city}</p>
          <p className="card-text">Info adicional: {props.farmData.comments}</p>
        </div>
        <div className="card-footer">
          <a className="btn btn-secondary btn-sm" href="#!">
            More Info
          </a>
        </div>
      </div>
    </>
  );
};

export default Farms;
