import { useState } from "react";

const FarmForm = () => {

  const [nameValue, setNameValue] = useState("")
  const [addressValue, setAddressValue] = useState("")
  const [locationValue, setLocationValue] = useState("")
  const [phoneValue, setPhoneValue] = useState("")
  const [infoValue, setInfoValue] = useState("")
  
  //const handleInputChange = (ev) => {
    //setNameValue(ev.target.value);
   // setAddressValue(ev.target.value);

  //}

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("submit hecho", nameValue, addressValue, locationValue, phoneValue, infoValue);
  }

  return (
    <main className="page-wrapper bg-gra-02 p-t-100 p-b-100 ">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <h2 className="text-black mb-4">Nueva granja</h2>

            <form onSubmit={handleSubmit} id="contactForm" method="POST">
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <label className="label" for="name">
                      Nombre
                    </label>
                    <input 
                    value={nameValue} 
                    onChange={ (ev) => setNameValue(ev.target.value) } 
                    className="input--style-4" 
                    type="text" 
                    id="name" />
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label" for="address">
                      Direccion
                    </label>
                    <input
                      value={addressValue}
                      onChange={ (ev) => setAddressValue(ev.target.value) } 
                      className="input--style-4"
                      type="text"
                      id="address"
                    />
                  </div>
                </div>
              </div>

              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <label className="label" for="location">
                      Geolocalizacion
                    </label>
                    <input
                      value={locationValue}
                      onChange={ (ev) => setLocationValue(ev.target.value) } 
                      className="input--style-4"
                      type="text"
                      id="location"
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label" for="phone">
                      Telefono
                    </label>
                    <input 
                    value={phoneValue}
                    onChange={ (ev) => setPhoneValue(ev.target.value) } 
                    className="input--style-4"
                    type="phone"
                    id="phone" />
                  </div>
                </div>
              </div>

              <div className="row row-space">
                <div className="col">
                  <div className="input-group">
                    <label className="label" for="info">
                      Comentarios
                    </label>
                    <textarea
                      value={infoValue}
                      onChange={ (ev) => setInfoValue(ev.target.value) } 
                      style={{ height: "10rem" }}
                      className="input--style-4"
                      type="text"
                      id="info"
                    />
                  </div>
                </div>
              </div>
              <div className="p-t-15">
                <button
                  className="btn-form btn--radius-2 btn--employee "
                  type="submit"
                >
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FarmForm;
