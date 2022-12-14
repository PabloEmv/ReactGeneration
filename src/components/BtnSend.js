import React from "react";

const BtnSendComponent = ({infoBoton, handleOnClick}) => {
  return (
    <div align="center">
      <button type="button" class="btn btn-primary mb-2" onClick={() => {handleOnClick()}}>
      {infoBoton}
      </button>
    </div>
  );
};
export default BtnSendComponent;
