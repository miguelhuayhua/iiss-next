"use client";
import { ClassNames } from "@emotion/react";
import FormularioDatosPersonales from "./formulario-datos-personales";
import FormularioServiciosBasicos from "./formulario-servicios-basicos";
import { MouseEventHandler, useState } from "react";
import FormularioServicioInternet from "./formulario-internet";
import FormularioMedioTransporte from "./formulario-transporte";
import FormularioActividadLaboral from "./formulario-actvidadlaboral";
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
      <div className={count == 2 ? "mostrar" : "ocultar"}>
        <div className="row">
          <div className="col-6 offset-3">
            <h2>Ingrese los datos de Servicios Básicos</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1">
            <FormularioServicioInternet></FormularioServicioInternet>
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
      <div className={count == 3 ? "mostrar" : "ocultar"}>
        <div className="row">
          <div className="col-6 offset-3">
            <h2>Ingrese los datos de Medio de Transporte</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1">
            <FormularioMedioTransporte></FormularioMedioTransporte>
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
      <div className={count == 4 ? "mostrar" : "ocultar"}>
        <div className="row">
          <div className="col-6 offset-3">
            <h2>Ingrese los datos Actividad Laboral</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1">
            <FormularioActividadLaboral></FormularioActividadLaboral>
          </div>
          <div className="col-4 offset-4 col-md-2 offset-md-4">
            <button className="btn custom-btn" onClick={handlePrev}>
              Volver
            </button>
          </div>
          <div className="col-4 col-md-2">
            <button
              className="btn custom-btn btn-siguiente"
            >
              Terminar y Enviar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
