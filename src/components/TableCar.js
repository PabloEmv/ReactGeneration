import React from "react";

const TableCarComponent = () => {
  return (
    <div class="card">
      <div class="card-body">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Marca</th>
              <th scope="col">Modelo</th>
              <th scope="col">Color</th>
              <th scope="col">Año</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Bugatti</td>
              <td>Chiron</td>
              <td>Azul</td>
              <td>2016</td>
              <td><div><button type="button" class="btn btn-primary me-3">+</button><button type="button" class="btn btn-success">Editar</button><button type="button" class="btn btn-danger ms-3">Eliminar</button></div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TableCarComponent;
