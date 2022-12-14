import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserComponent,
  TableUserComponent,
  BtnSendComponent
} from "../components";

const usuario1 = [{
  nombre:'Joseph',
  apellido:'Joestar',
  correo:'jo.jo@gmail.com',
  contrasenia:'a123'
}, {
  nombre:'Josuke',
  apellido:'Higashikata',
  correo:'jojo@gmail.com',
  contrasenia:'a1233'
}]

const HomePage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(()=> navigate("/Auto", {}, [navigate]));
  const handleOnClick2 = useCallback(()=> navigate("/Tablas", {}, [navigate]));
  
  const [state, setState] = useState(usuario1)

  const userDelete = (nombreUsuario) => {
    const changeUser = state.filter(usuario => usuario.nombre != nombreUsuario)

    setState(changeUser)
  }
  return (
    <div>
      <UserComponent />
      <BtnSendComponent infoBoton={'ir a Auto'} handleOnClick={handleOnClick}/>
      <BtnSendComponent infoBoton={'ir a Tablas'} handleOnClick={handleOnClick2}/>
      <div class="container"><TableUserComponent usuarios={state} deleteUser={userDelete}/></div>
    </div>
  );
};

export default HomePage;
