import React from "react";
import BtnSendComponent from "./BtnSend";

const UserComponent = () => {
  return (
    <div class="container p-2">
      <div class="card">
        <div class="card-header bg-primary text-white">Formulario Usuario</div>
        <div class="card-body">
          <form>

            {/* ---------------- */}
            <div class="row">
              <div class="col">
              <label for="exampleInputName" class="form-label">
                Nombre
              </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nombre"
                  aria-label="First name"
                />
              </div>
              <div class="col">
              <label for="exampleInputLastName" class="form-label">
                Apellido
              </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Apellido"
                  aria-label="Last name"
                />
              </div>
            </div>
            {/* correo */}
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="email@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <BtnSendComponent />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
