"use client";
import { ClassNames } from "@emotion/react";
import FormularioDatosPersonales from "./formulario-datos-personales";
import FormularioServiciosBasicos from "./formulario-servicios-basicos";
import { MouseEventHandler, useState } from "react";
import FormularioServicioInternet from "./formulario-internet";
import FormularioMedioTransporte from "./formulario-transporte";
import FormularioActividadLaboral from "./formulario-actvidadlaboral";

//axios
import axios from "axios";
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
  const handleNext: MouseEventHandler<HTMLButtonElement> = (ev) => {
    setCount(count + 1);
  };
  const handlePrev: MouseEventHandler<HTMLButtonElement> = (ev) => {
    setCount(count - 1);
  };
  //LLAMADO DE DATOS HIJOS
  let getDato1 = (data: any) => {
    setForm1({ ...form1, ...data });
  };

  let getDato2 = (data: any) => {
    setForm2({ ...form2, ...data });
  };

  let getDato3 = (data: any) => {
    setForm3({ ...form3, ...data });
  };

  let getDato4 = (data: any) => {
    setForm4({ ...form4, ...data });
  };

  let getDato5 = (data: any) => {
    setForm5({ ...form5, ...data});
  };

  //ENVÍO DE DATOS
  const enviarDatos = async () => {
    try {
      const response = await axios.post("http://localhost:8000/apersona/", {
        form1,
        form2,
        form3,
        form4,
        form5,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
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
            <FormularioDatosPersonales
              getData={getDato1}
            ></FormularioDatosPersonales>
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
            <FormularioServiciosBasicos
              getData={getDato2}
            ></FormularioServiciosBasicos>
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
            <h2>Ingrese los datos de Acceso a Internet</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1">
            <FormularioServicioInternet
              getData={getDato3}
            ></FormularioServicioInternet>
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
            <FormularioMedioTransporte
              getData={getDato4}
            ></FormularioMedioTransporte>
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
            <FormularioActividadLaboral
              getData={getDato5}
            ></FormularioActividadLaboral>
          </div>
          <div className="col-4 offset-4 col-md-2 offset-md-4">
            <button className="btn custom-btn" onClick={handlePrev}>
              Volver
            </button>
          </div>
          <div className="col-4 col-md-2">
            <button
              className="btn custom-btn btn-siguiente"
              onClick={enviarDatos}
            >
              Terminar y Enviar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
