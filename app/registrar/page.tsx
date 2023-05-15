import { Metadata } from "next";

//material UI
import { TextField } from "@mui/material";
//estilos
import "./registrar.scss";
import Pasos from "./pasos";
export const metadata: Metadata = {
  title: "Registro de datos",
  description: "Registro de datos para personas con discapacidad",
};
export default function Registrar() {
  //manejo de eventos
  return (
    <main
      className="container-fluid position-relative"
      style={{ overflowX: "hidden" }}
    >
      <div className="puerta-derecha"></div>
      <div className="puerta-izquierda"></div>
      <img className="logo" src="/assets/logo-gamea.png" alt="logo gamea" />
      <Pasos></Pasos>
    </main>
  );
}
