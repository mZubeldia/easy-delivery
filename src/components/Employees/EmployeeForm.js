const EmployeeForm = () => {
  return (
    <main className="container px-5 my-5">
      <div className="card text-white bg-secondary my-5 py-4 text-center">
        <div className="card-body">
          <h3 className="text-white m-0">Nuevo empleado</h3>
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
          <label className="form-label" for="surname">
            Apellidos
          </label>
          <input
            className="form-control"
            id="geolocalizacion"
            type="text"
            placeholder="Apellidos"
            data-sb-validations="required"
          />
          <div
            className="invalid-feedback"
            data-sb-feedback="geolocalizacion:required"
          >
            Surname is required.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" for="email">
            Correo electrónico
          </label>
          <input
            className="form-control"
            id="email"
            type="text"
            placeholder="ejemplo@gmail.com"
            data-sb-validations="required"
          />
          <div className="invalid-feedback" data-sb-feedback="nombre:required">
            Email is required.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" for="phone">
            Teléfono
          </label>
          <input
            className="form-control"
            id="telefono"
            type="text"
            placeholder="611 222 333"
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
          <label className="form-label" for="bank-account">
            Número de cuenta
          </label>
          <input
            className="form-control"
            id="bank-account"
            type="text"
            placeholder="ES11 2222 33 44 55555"
            data-sb-validations="required"
          />
          <div
            className="invalid-feedback"
            data-sb-feedback="telefono:required"
          >
            Bank account is required.
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
            className="btn btn-secondary btn-lg"
            id="submitButton"
            type="submit"
          >
            Crear empleado
          </button>
        </div>
      </form>
    </main>
  );
};

export default EmployeeForm;
