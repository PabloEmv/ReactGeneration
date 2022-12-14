import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
    TableCarComponent,
  TableUserComponent,
  BtnSendComponent
} from "../components";

const TablasPage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(()=> navigate("/Auto", {}, [navigate]));
  const handleOnClick2 = useCallback(()=> navigate("/", {}, [navigate]));
  return (
    <div>
      <BtnSendComponent infoBoton={'ir a Auto'} handleOnClick={handleOnClick}/>
      <BtnSendComponent infoBoton={'ir a Usuario'} handleOnClick={handleOnClick2}/>
      <div class="container"><TableUserComponent /></div>
      <div class="container"><TableCarComponent /></div>
    </div>
  );
};

export default TablasPage;
