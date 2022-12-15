import React, { useState, useEffect } from "react";

const initialUser = {
  nombre: "",
  apellido: "",
  correo: "",
  contrasenia: ""
};

const UserComponent = ({
  userAdd,
  usuarioEditado,
  setUsuarioEditado,
  userEdit
}) => {
  const { usuario, setUsuario } = useState(initialUser);
  const { nombre, apellido, correo, contrasenia } = usuario;

  useEffect(() => {
    if (usuarioEditado !== null) {
      setUsuario(usuarioEditado);
    } else {
      setUsuario({
        nombre: "",
  apellido: "",
  correo: "",
  contrasenia: ""
      });
    }
  }, [usuarioEditado]);

  const handleInputChange = (e) => {
    const changedFormValue = {
      ...usuario,
      [e.target.name]: e.target.value,
    };
    setUsuario(changedFormValue);
  };
  return (
    <div class="container p-2">
      <div class="card">
        <div class="card-header bg-primary text-white">Formulario Usuario</div>
        <div class="card-body">
          <form>
            {usuarioEditado !== null ? (
              <h1>Editar Usuario</h1>
            ) : (
              <h1>Ingrese Usuario</h1>
            )}
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
                  id="Nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleInputChange}
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
                  id="Apellido"
                  name="apellido"
                  value={apellido}
                  onChange={handleInputChange}
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
                aria-describedby="emailHelp"
                placeholder="email@example.com"
                id="Correo"
                name="correo"
                value={correo}
                onChange={handleInputChange}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="Contrasenia"
                name="contrasenia"
                value={contrasenia}
                onChange={handleInputChange}
              />
            </div>
            {usuarioEditado !== null ? (
              <button
                type="button"
                class="btn btn-success"
                onClick={() => userEdit(usuario)}
              >
                Editar usuario
              </button>
            ) : (
              <button
                type="button"
                class="btn btn-success"
                onClick={() => userAdd(usuario)}
              >
                Ingresar usuario
              </button>
            )}

            {usuarioEditado !== null ? (
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => setUsuarioEditado(null)}
              >
                Cancelar
              </button>
            ) : (
              <></>
            )}

            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
