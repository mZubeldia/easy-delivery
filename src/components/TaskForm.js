const TaskForm = () => {
  return (
    <main className="container px-5 my-5">
      <div className="card text-white bg-secondary my-5 py-4 text-center">
        <div className="card-body">
          <h3 className="text-white m-0">Tareas</h3>
        </div>
      </div>
      <form id="contactForm" data-sb-form-api-token="API_TOKEN">
        <div class="mb-3">
          <label class="form-label" for="granja">
            Granja
          </label>
          <select class="form-select" id="granja" aria-label="Granja">
            <option value="Granjas">Granjas</option>
            <option value="Tres Arroyos">Tres Arroyos</option>
            <option value="El Huerto">El Huerto</option>
            <option value="Granja el sol">Granja el sol</option>
            <option value="Granja La Serena">Granja La Serena</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label" for="camion">
            Camion
          </label>
          <select class="form-select" id="camion" aria-label="Camion">
            <option value="Tipo de camion">Tipo de camion</option>
            <option value="Rigido">Rigido</option>
            <option value="Articulado">Articulado</option>
            <option value="Remolque">Remolque</option>
            <option value="Frigorifico">Frigorifico</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label" for="matadero">
            Matadero
          </label>
          <select class="form-select" id="matadero" aria-label="Matadero">
            <option value="Mataderos">Mataderos</option>
            <option value="M. Del Sar">M. Del Sar</option>
            <option value="M. de Berriz">M. de Berriz</option>
            <option value="M. Garcia">M. Garcia</option>
            <option value="M. Bar">M. Bar</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label" for="empleado">
            Empleado
          </label>
          <select class="form-select" id="empleado" aria-label="Empleado">
            <option value="Empleados">Empleados</option>
            <option value="Juan Perez">Juan Perez</option>
            <option value="Antonio Fernandez">Antonio Fernandez</option>
            <option value="Carlos Garcia">Carlos Garcia</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label" for="nCerdos">
            N. Cerdos
          </label>
          <input
            class="form-control"
            id="nCerdos"
            type="text"
            placeholder="N. Cerdos"
            data-sb-validations="required"
          />
          <div class="invalid-feedback" data-sb-feedback="nCerdos:required">
            N. Cerdos is required.
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="tipoDeCerdo">
            Tipo de cerdo
          </label>
          <select
            class="form-select"
            id="tipoDeCerdo"
            aria-label="Tipo de cerdo"
          >
            <option value="Cerdos">Cerdos</option>
            <option value="Iberico">Iberico</option>
            <option value="Porcinos Duroc">Porcinos Duroc</option>
            <option value="Porcinos Large White">Porcinos Large White</option>
            <option value="Negro">Negro</option>
          </select>
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
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default TaskForm;
