"use client";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

//axios
import axios from "axios";
interface MyComponentProps {}
export default function DatosLlenados(props: any) {
  const { handlePrev, data } = props;

  //ENVÍO DE DATOS
  const enviarDatos = async () => {
    try {
      const response = await axios.post("http://localhost:8000/apersona/", {
        ...data,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    console.log(data);
  };
  return (
    <>
      <div className="col-10 offset-1">
        <form action="">
          <div className="row">
            <div className="col-12">
              <h4 className="text-center">Datos Personales</h4>
            </div>
            <div className="col-4 box">
              <p>
                <b>Nombres: </b>
                {data.form1.nombres}
              </p>
            </div>
            <div className="col-4 box">
              <p>
                <b>Paterno: </b>
                {data.form1.paterno}
              </p>
            </div>
            <div className="col-4 box">
              <p>
                <b>Materno: </b>
                {data.form1.materno}
              </p>
            </div>
            <div className="col-3 col-xl-2 box">
              <p>
                <b>C.I.: </b>
                {data.form1.ci}
              </p>
            </div>
            <div className="col-4 col-xl-3 box">
              <p>
                <b>Complemento: </b>
                {data.form1.complemento}
              </p>
            </div>
            <div className="col-5 col-xl-3 box">
              <p>
                <b>Expedido: </b>
                {data.form1.expedido}
              </p>
            </div>
            <div className="col-6 col-xl-4 box">
              <p>
                <b>Fecha de Nacimiento: </b>
                {data.form1.f_nacimiento}
              </p>
            </div>
            <div className="col-6 col-xl-4 box">
              <p>
                <b>Departamento: </b>
                {data.form1.departamento}
              </p>
            </div>
            <div className="col-6 col-xl-4 box">
              <p>
                <b>Localidad: </b>
                {data.form1.provincia}
              </p>
            </div>
            <div className="col-6 col-xl-4 box">
              <p>
                <b>Localidad: </b>
                {data.form1.localidad}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h4 className="text-center mt-2">Datos de Servicios Básicos</h4>
            </div>
            <div className="col-4 box">
              <p>
                <b>¿Acceso a Agua Potable?: </b>
              </p>
            </div>
            <div className="col-4 box">
              <p>
                <b>¿Cuenta con servicio de recojo de Basura? </b>
              </p>
            </div>
            <div className="col-4 box">
              <p>
                <b>Materno: </b>
                {data.form1.materno}
              </p>
            </div>
            <div className="col-3 col-xl-2 box">
              <p>
                <b>C.I.: </b>
                {data.form1.ci}
              </p>
            </div>
          </div>
        </form>
      </div>

      <div className="col-5 offset-1 col-md-4 offset-md-2">
        <button className="btn btn-confirmar btn-danger" onClick={handlePrev}>
          Cancelar
        </button>
      </div>
      <div className="col-4 col-md-4">
        <button className="btn btn-cancelar btn-success" onClick={enviarDatos}>
          Acepto y envío mis datos
        </button>
      </div>
    </>
  );
}
