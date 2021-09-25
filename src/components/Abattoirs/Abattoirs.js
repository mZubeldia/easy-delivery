const Abattoirs = (props) => {
  return (
    <div className="card h-100 border-pending">
      <div className="card-body">
        <h3 className="card-title">{props.abattoirData.name}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item mb-2">
            Direccion: {props.abattoirData.address.street}, numero{" "}
            {props.abattoirData.address.number}{" "}
          </li>
          <li className="list-group-item mb-2">
            CP {props.abattoirData.address.postalCode},{" "}
            {props.abattoirData.address.city}
          </li>

          <li className="list-group-item  mb-2">
            Tlf.: {props.abattoirData.phone}
          </li>

          <li className="list-group-item mb-2">
            Info adicional: {props.abattoirData.comments}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Abattoirs;
