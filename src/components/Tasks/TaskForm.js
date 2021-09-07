import { Form } from "react-bootstrap";

const TaskForm = () => {
  return (
    <main className="container px-5 my-5">
      <div className="card text-white bg-secondary my-5 py-4 text-center">
        <div className="card-body">
          <h3 className="text-white m-0">Nueva tarea</h3>
        </div>
      </div>

      <form id="contactForm" data-sb-form-api-token="API_TOKEN">
        <div className="mb-3">
          <label className="form-label" for="granja">
            Granja
          </label>
          <select className="form-select" id="granja" aria-label="Granja">
            <option value="Granjas">Granjas</option>
            <option value="Tres Arroyos">Tres Arroyos</option>
            <option value="El Huerto">El Huerto</option>
            <option value="Granja el sol">Granja el sol</option>
            <option value="Granja La Serena">Granja La Serena</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label" for="camion">
            Camion
          </label>
          <select className="form-select" id="camion" aria-label="Camion">
            <option value="Tipo de camion">Tipo de camion</option>
            <option value="Rigido">Rigido</option>
            <option value="Articulado">Articulado</option>
            <option value="Remolque">Remolque</option>
            <option value="Frigorifico">Frigorifico</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label" for="matadero">
            Matadero
          </label>
          <select className="form-select" id="matadero" aria-label="Matadero">
            <option value="Mataderos">Mataderos</option>
            <option value="M. Del Sar">M. Del Sar</option>
            <option value="M. de Berriz">M. de Berriz</option>
            <option value="M. Garcia">M. Garcia</option>
            <option value="M. Bar">M. Bar</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label" for="empleado">
            Empleado
          </label>
          <select className="form-select" id="empleado" aria-label="Empleado">
            <option value="Empleados">Empleados</option>
            <option value="Juan Perez">Juan Perez</option>
            <option value="Antonio Fernandez">Antonio Fernandez</option>
            <option value="Carlos Garcia">Carlos Garcia</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label" for="nCerdos">
            N. Cerdos
          </label>
          <input
            className="form-control"
            id="nCerdos"
            type="text"
            placeholder="N. Cerdos"
            data-sb-validations="required"
          />
          <div className="invalid-feedback" data-sb-feedback="nCerdos:required">
            N. Cerdos is required.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" for="tipoDeCerdo">
            Tipo de cerdo
          </label>
          <select
            className="form-select"
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
        <div className="mb-3">
          <Form.Group controlId="dob">
            <Form.Label>Fecha recogida granja</Form.Label>
            <Form.Control type="date" name="dob" placeholder="Fecha" />
          </Form.Group>
        </div>
        <div className="mb-3">
          <Form.Group controlId="dob">
            <Form.Label>Fecha entrega matadero</Form.Label>
            <Form.Control type="date" name="dob" placeholder="Fecha" />
          </Form.Group>
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
            Crear tarea
          </button>
        </div>
      </form>
    </main>
  );
};

export default TaskForm;
