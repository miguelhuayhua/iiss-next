"use client";
import { ClassNames } from "@emotion/react";
import FormularioDatosPersonales from "./formulario-datos-personales";
import FormularioServiciosBasicos from "./formulario-servicios-basicos";
import { MouseEventHandler, useState } from "react";
import FormularioServicioInternet from "./formulario-internet";
import FormularioMedioTransporte from "./formulario-transporte";
import FormularioActividadLaboral from "./formulario-actvidadlaboral";

import DatosLlenados from "./datosllenados";
export default function Pasos() {
  const [count, setCount] = useState(0);

  //DATOS DE FORMULARIOS
  let [form1, setForm1] = useState({});
  let [form2, setForm2] = useState({});
  let [form3, setForm3] = useState({});
  let [form4, setForm4] = useState({});
  let [form5, setForm5] = useState({});
  //Formulario Datos Personales

  //eventos
  const handlePrev: MouseEventHandler<HTMLButtonElement> = (ev) => {
    setCount(count - 1);
  };
  //LLAMADO DE DATOS HIJOS
  let getDato1 = (data: any) => {
    setCount(count + 1);
    setForm1({ ...form1, ...data });
  };

  let getDato2 = (data: any) => {
    setCount(count + 1);

    setForm2({ ...form2, ...data });
  };

  let getDato3 = (data: any) => {
    setCount(count + 1);
    setForm3({ ...form3, ...data });
  };

  let getDato4 = (data: any) => {
    setCount(count + 1);
    setForm4({ ...form4, ...data });
  };

  let getDato5 = (data: any) => {
    setCount(count + 1);
    setForm5({ ...form5, ...data });
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
          <FormularioDatosPersonales
            handleNext={getDato1}
          ></FormularioDatosPersonales>
        </div>
      </div>
      <div className={count == 1 ? "mostrar" : "ocultar"}>
        <div className="row">
          <div className="col-6 offset-3">
            <h2>Ingrese los datos de Servicios Básicos</h2>
          </div>
        </div>
        <div className="row">
          <FormularioServiciosBasicos
            handlePrev={handlePrev}
            handleNext={getDato2}
          ></FormularioServiciosBasicos>
        </div>
      </div>
      <div className={count == 2 ? "mostrar" : "ocultar"}>
        <div className="row">
          <div className="col-6 offset-3">
            <h2>Ingrese los datos de Acceso a Internet</h2>
          </div>
        </div>
        <div className="row">
          <FormularioServicioInternet
            handlePrev={handlePrev}
            handleNext={getDato3}
          ></FormularioServicioInternet>
        </div>
      </div>
      <div className={count == 3 ? "mostrar" : "ocultar"}>
        <div className="row">
          <div className="col-6 offset-3">
            <h2>Ingrese los datos de Medio de Transporte</h2>
          </div>
        </div>
        <div className="row">
          <FormularioMedioTransporte
            handlePrev={handlePrev}
            handleNext={getDato4}
          ></FormularioMedioTransporte>
        </div>
      </div>
      <div className={count == 4 ? "mostrar" : "ocultar"}>
        <div className="row">
          <div className="col-6 offset-3">
            <h2>Ingrese los datos Actividad Laboral</h2>
          </div>
        </div>
        <div className="row">
          <FormularioActividadLaboral
            handlePrev={handlePrev}
            handleNext={getDato5}
          ></FormularioActividadLaboral>
        </div>
      </div>
      <div className={count == 5 ? "mostrar" : "ocultar"}>
        <div className="row">
          <div className="col-6 offset-3">
            <h2>Verifique si sus datos están correctos</h2>
          </div>
        </div>
        <div className="row">
          <DatosLlenados
            handlePrev={handlePrev}
            data={{ form1, form2, form3, form4, form5 }}
          ></DatosLlenados>
        </div>
      </div>
    </>
  );
}
