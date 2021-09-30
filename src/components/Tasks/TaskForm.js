import { Form } from "react-bootstrap";

const TaskForm = () => {
  return (
    <main className="page-wrapper bg-gra-05 p-t-100 p-b-100 ">
      <div className="wrapper wrapper--w680">
        <div className="card-form card-4">
          <div className="card-body">
            <h2 className="text-black mb-4">Nueva tarea</h2>

            <form id="contactForm" method="POST">
              <div className="row row-space">
                <div className="col-2 mb-3">
                  <Form.Label>Granja</Form.Label>
                  <Form.Select
                    className="task-select "
                    aria-label="Default select example"
                  >
                    <option>Granjas</option>
                    <option value="Tres Arroyos">Tres Arroyos</option>
                    <option value="El Huerto">El Huerto</option>
                    <option value="Granja el sol">Granja el sol</option>
                    <option value="Granja La Serena">Granja La Serena</option>
                  </Form.Select>
                </div>

                <div className="col-2 mb-3">
                  <Form.Label>Matadero</Form.Label>
                  <Form.Select
                    className="task-select"
                    aria-label="Default select example"
                  >
                    <option>Mataderos</option>
                    <option value="M. Gil">M. Gil</option>
                    <option value="M. Orihuela">M. Orihuela</option>
                    <option value="M. Malaga SA">M. Malaga SA</option>
                  </Form.Select>
                </div>
              </div>

              <div className="row row-space">
                <div className="col-2 mb-3">
                  <Form.Label>Empleado</Form.Label>
                  <Form.Select
                    className="task-select "
                    aria-label="Default select example"
                  >
                    <option disabled="disabled" selected="selected">
                      Empleados
                    </option>
                    <option value="J. M. Fernandez Garcia">
                      J. M. Fernandez Garcia
                    </option>
                    <option value="Laura Menenez Perez">
                      Laura Menenez Perez
                    </option>
                    <option value="Lorena Luque Ceballo">
                      Lorena Luque Ceballo
                    </option>
                    <option value="Antonio Vazquez Torres">
                      Antonio Vazquez Torres
                    </option>
                  </Form.Select>
                </div>

                <div className="col-2 mb-3">
                  <Form.Label>Camion</Form.Label>
                  <Form.Select
                    className="task-select "
                    aria-label="Default select example"
                  >
                    <option disabled="disabled" selected="selected">
                      Camiones
                    </option>
                    <option value="rigid">Rigido</option>
                    <option value="articulado">Articulado</option>
                    <option value="trailer">Trailer</option>
                  </Form.Select>
                </div>
              </div>

              <div className="row row-space">
                <div className="col-2 ">
                  <div className="input-group-form ">
                    <div className="input-group">
                      <label className="label" for="pigsNumber">
                        N. Cerdos
                      </label>
                      <input
                        className="input--style-4"
                        type="text"
                        id="pigsNumber"
                        name="pigsNumber"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-2 mb-3">
                  <Form.Label>Tipo cerdos</Form.Label>
                  <Form.Select
                    className="task-select "
                    aria-label="Default select example"
                  >
                    <option disabled="disabled" selected="selected">
                      Cerdos
                    </option>
                    <option value="white">Blanco</option>
                    <option value="iberic">Iberico</option>
                    <option value="duroc">Duroc</option>
                  </Form.Select>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-md-6 mb-3">
                  <Form.Group controlId="dob">
                    <Form.Label>Fecha recogida granja</Form.Label>
                    <Form.Control
                      className="task-select "
                      type="date"
                      name="dob"
                      placeholder="Fecha"
                    />
                  </Form.Group>
                </div>

                <div className="col-md-6 mb-3">
                  <Form.Group controlId="dob">
                    <Form.Label>Fecha entrega matadero</Form.Label>
                    <Form.Control
                      className="task-select "
                      type="date"
                      name="dob"
                      placeholder="Fecha"
                    />
                  </Form.Group>
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
                  className="btn-form btn--radius-2 btn--task"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TaskForm;
