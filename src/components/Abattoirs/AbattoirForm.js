const AbattoirForm = () => {
  return (
    <div className="page-wrapper bg-gra-04 p-t-100 p-b-100 ">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <h2 className="text-black mb-4">Nuevo matadero</h2>

            <form id="contactForm" method="POST">
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <label className="label" for="name">
                      Nombre
                    </label>
                    <input className="input--style-4" type="text" id="name" />
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label" for="address">
                      Direccion
                    </label>
                    <input
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
                      Geolocation
                    </label>
                    <input
                      className="input--style-4"
                      type="email"
                      id="location"
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label" for="phone">
                      Telefono
                    </label>
                    <input className="input--style-4" type="phone" id="phone" />
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
                  className="btn-form btn--radius-2 btn--farm "
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbattoirForm;
