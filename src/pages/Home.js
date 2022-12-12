import React from "react";
import {
  UserComponent,
  CarComponent,
  TableUserComponent,
  TableCarComponent
} from "../components";

const HomePage = () => {
  return (
    <div class="bg-info">
      <UserComponent />
      <CarComponent />
      <div class="row p-5">
        <div class="col"><TableUserComponent /></div>
        <div class="col"><TableCarComponent /></div>
        
      </div>
    </div>
  );
};

export default HomePage;
