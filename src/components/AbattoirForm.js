const AbattoirForm = () => {
  return (
    <main className="container px-5 my-5">
      <div className="card text-white bg-secondary my-5 py-4 text-center">
        <div className="card-body">
          <h3 className="text-white m-0">Nuevo matadero</h3>
        </div>
      </div>

      <form id="contactForm" data-sb-form-api-token="API_TOKEN">
        <div class="mb-3">
          <label class="form-label" for="nombre">
            Nombre
          </label>
          <input
            class="form-control"
            id="nombre"
            type="text"
            placeholder="Nombre"
            data-sb-validations="required"
          />
          <div class="invalid-feedback" data-sb-feedback="nombre:required">
            Nombre is required.
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="geolocalizacion">
            Dirección
          </label>
          <input
            class="form-control"
            id="geolocalizacion"
            type="text"
            placeholder="Avd. de las Américas, n.º 5"
            data-sb-validations="required"
          />
          <div
            class="invalid-feedback"
            data-sb-feedback="geolocalizacion:required"
          >
            Geolocalizacion is required.
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="telefono">
            Teléfono
          </label>
          <input
            class="form-control"
            id="telefono"
            type="text"
            placeholder="Telefono"
            data-sb-validations="required"
          />
          <div class="invalid-feedback" data-sb-feedback="telefono:required">
            Telefono is required.
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="comentarios">
            Comentarios
          </label>
          <textarea
            class="form-control"
            id="comentarios"
            type="text"
            placeholder="Comentarios"
            style={{ height: "10rem" }}
            data-sb-validations=""
          ></textarea>
        </div>
        <div class="d-none" id="submitSuccessMessage">
          <div class="text-center mb-3">
            <div class="fw-bolder">Form submission successful!</div>
            <p>To activate this form, sign up at</p>
            <a href="https://startbootstrap.com/solution/contact-forms">
              https://startbootstrap.com/solution/contact-forms
            </a>
          </div>
        </div>
        <div class="d-none" id="submitErrorMessage">
          <div class="text-center text-danger mb-3">Error sending message!</div>
        </div>
        <div class="d-grid">
          <button
            class="btn btn-secondary btn-lg"
            id="submitButton"
            type="submit"
          >
            Crear granja
          </button>
        </div>
      </form>
    </main>
  );
};

export default AbattoirForm;
