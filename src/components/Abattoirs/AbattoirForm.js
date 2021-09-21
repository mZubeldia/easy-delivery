const AbattoirForm = () => {
  return (
    <main className="container px-5 my-5">
      <div className="card text-white bg-pending my-5 py-4 text-center">
        <div className="card-body">
          <h3 className="text-black m-0">Nuevo matadero</h3>
        </div>
      </div>

      <form id="contactForm" data-sb-form-api-token="API_TOKEN">
        <div className="mb-3">
          <label className="form-label" for="nombre">
            Nombre
          </label>
          <input
            className="form-control"
            id="nombre"
            type="text"
            placeholder="Nombre"
            data-sb-validations="required"
          />
          <div className="invalid-feedback" data-sb-feedback="nombre:required">
            Nombre is required.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" for="geolocalizacion">
            Dirección
          </label>
          <input
            className="form-control"
            id="geolocalizacion"
            type="text"
            placeholder="Avd. de las Américas, n.º 5"
            data-sb-validations="required"
          />
          <div
            className="invalid-feedback"
            data-sb-feedback="geolocalizacion:required"
          >
            Geolocalizacion is required.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" for="telefono">
            Teléfono
          </label>
          <input
            className="form-control"
            id="telefono"
            type="text"
            placeholder="Telefono"
            data-sb-validations="required"
          />
          <div
            className="invalid-feedback"
            data-sb-feedback="telefono:required"
          >
            Telefono is required.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" for="comentarios">
            Comentarios
          </label>
          <textarea
            className="form-control"
            id="comentarios"
            type="text"
            placeholder="Comentarios"
            style={{ height: "10rem" }}
            data-sb-validations=""
          ></textarea>
        </div>
        <div className="d-none" id="submitSuccessMessage">
          <div className="text-center mb-3">
            <div className="fw-bolder">Form submission successful!</div>
            <p>To activate this form, sign up at</p>
            <a href="https://startbootstrap.com/solution/contact-forms">
              https://startbootstrap.com/solution/contact-forms
            </a>
          </div>
        </div>
        <div className="d-none" id="submitErrorMessage">
          <div className="text-center text-danger mb-3">
            Error sending message!
          </div>
        </div>
        <div className="d-grid">
          <button
            className="btn btn-pending btn-lg"
            id="submitButton"
            type="submit"
          >
            Crear matadero
          </button>
        </div>
      </form>
    </main>
  );
};

export default AbattoirForm;
