import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {
  CarComponent,
  TableCarComponent,
  BtnSendComponent
} from "../components";

const AutoPage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(()=> navigate("/", {}, [navigate]));
  const handleOnClick2 = useCallback(()=> navigate("/Tablas", {}, [navigate]));
  return (
    <div>
      <CarComponent />
      <BtnSendComponent infoBoton={'ir a Home'} handleOnClick={handleOnClick}/>
      <BtnSendComponent infoBoton={'ir a Tablas'} handleOnClick={handleOnClick2}/>
      <div class="container"><TableCarComponent /></div>
    </div>
  );
};

export default AutoPage;
