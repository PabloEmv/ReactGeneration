import React from "react";

const TableUserComponent = () => {
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
            <tr>
              <th scope="row">1</th>
              <td>Admin</td>
              <td>Perez</td>
              <td>@admin@admin.com</td>
              <td>Admin1234</td>
              <td><div><button type="button" class="btn btn-primary me-3">+</button><button type="button" class="btn btn-success">Editar</button><button type="button" class="btn btn-danger ms-3">Eliminar</button></div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TableUserComponent;
