const NewForm = () => {
  return (
    <>
      <div className="page-wrapper bg-gra-02 p-t-100 p-b-100 ">
        <div className="wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <h2 className="text-black mb-4">Nuevo empleado</h2>
              <form method="POST">
                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label">Nombre</label>
                      <input
                        className="input--style-4"
                        type="text"
                        name="first_name"
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label">Apellido</label>
                      <input
                        className="input--style-4"
                        type="text"
                        name="last_name"
                      />
                    </div>
                  </div>
                </div>

                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label">Email</label>
                      <input
                        className="input--style-4"
                        type="email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label">Telefono</label>
                      <input
                        className="input--style-4"
                        type="text"
                        name="phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label">Numero de cuenta</label>
                      <input
                        className="input--style-4"
                        type="email"
                        name="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row row-space">
                  <div className="col">
                    <div className="input-group">
                      <label className="label">Comentarios</label>
                      <textarea
                        style={{ height: "10rem" }}
                        className="input--style-4"
                        type="text"
                        name="phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-t-15">
                  <button
                    className="btn btn--radius-2 btn--employee"
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
    </>
  );
};

export default NewForm;
