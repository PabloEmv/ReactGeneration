import React from "react";
import BtnSendComponent from "./BtnSend";

const CarComponent = () => {
  return (
    <div class="container">
      <div class="card">
        <div class="card-header bg-primary text-white">Formulario Auto</div>
        <div class="card-body">
          <form>
            {/* ---------------- */}
            <div class="row">
              <div class="col">
              <label for="exampleInputMarca" class="form-label">
                Marca
              </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Marca"
                  aria-label="Marca"
                />
              </div>
              <div class="col">
              <label for="exampleInputLastModelo" class="form-label">
                Modelo
              </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Modelo"
                  aria-label="Modelo"
                />
              </div>
            </div>
            {/* Color */}
            <div class="mb-2">
              <label for="exampleInputColor" class="form-label">
                Color
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Selecciona el color</option>
                <option value="Negro">Negro</option>
                <option value="Blanco">Blanco</option>
                <option value="Gris">Gris</option>
                <option value="Rojo">Rojo</option>
                <option value="Azul">Azul</option>
                <option value="Verde">Verde</option>
                <option value="Amarillo">Amarillo</option>
              </select>
            </div>

            {/* año */}
            <div class="mb-3">
              <label for="exampleInputAnio" class="form-label">
                Año
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputAnio"
                aria-describedby="Anio"
                placeholder="Año"
              />
            </div>
            <BtnSendComponent infoBoton={'Enviar'}/>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CarComponent;
