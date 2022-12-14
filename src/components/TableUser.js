import React from "react";

const TableUserComponent = ({usuarios, deleteUser}) => {
  return (
    <div class="card">
      <div class="card-body fluid">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Correo</th>
              <th scope="col">Contraseña</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario => (<tr>
              <th scope="row">1</th>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{usuario.correo}</td>
              <td>{usuario.contrasenia}</td>
              <td><div><button type="button" class="btn btn-primary me-3">+</button><button type="button" class="btn btn-success">Editar</button><button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    deleteUser(usuario.nombre);
                  }}
                >
                  Eliminar
                </button></div></td>
            </tr>))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TableUserComponent;
