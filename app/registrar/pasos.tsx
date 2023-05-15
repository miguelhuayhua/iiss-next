"use client";
import { ClassNames } from "@emotion/react";
import FormularioDatosPersonales from "./formulario-datos-personales";
import FormularioServiciosBasicos from "./formulario-servicios-basicos";
import { MouseEventHandler, useState } from "react";
export default function Pasos() {
  const [count, setCount] = useState(0);

  //eventos
  const handleNext: MouseEventHandler<HTMLButtonElement> = (ev) => {
    setCount(count + 1);
  };
  const handlePrev: MouseEventHandler<HTMLButtonElement> = (ev) => {
    setCount(count - 1);
  };

  return (
    <>
      <div className={count == 0 ? "mostrar" : "ocultar"}>
        <div className="row">
          <div className="col-6 offset-3">
            <h2>Ingrese sus datos Personales</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1">
            <FormularioDatosPersonales></FormularioDatosPersonales>
          </div>
          <div className="col-4 offset-4">
            <button className="btn custom-btn" onClick={handleNext}>
              Siguiente
            </button>
          </div>
        </div>
      </div>
      <div className={count == 1 ? "mostrar" : "ocultar"}>
        <div className="row">
          <div className="col-6 offset-3">
            <h2>Ingrese los datos de Servicios Básicos</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1">
            <FormularioServiciosBasicos></FormularioServiciosBasicos>
          </div>
          <div className="col-4 offset-4 col-md-2 offset-md-4">
            <button className="btn custom-btn" onClick={handlePrev}>
              Volver
            </button>
          </div>
          <div className="col-4 col-md-2">
            <button
              className="btn custom-btn btn-siguiente"
              onClick={handleNext}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
