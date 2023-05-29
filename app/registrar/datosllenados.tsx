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
    // try {
    //   const response = await axios.post("http://localhost:8000/apersona/", {
    //     form1,
    //     form2,
    //     form3,
    //     form4,
    //     form5,
    //   });
    //   console.log(response);
    // } catch (error) {
    //   console.error(error);
    // }
    console.log(data)
  };
  return (
    <>
      <div className="col-10 offset-1">
        <form action="">
          <div className="row">
            <div className="col-4">
              <p>
                <b>Nombres: </b>
                {data.form1.nombres}
              </p>
            </div>
            <div className="col-4">
              <p>
                <b>Paterno: </b>
                {data.form1.paterno}

              </p>
            </div>
            <div className="col-4">
              <p>
                <b>Materno: </b>
                {data.form1.materno}

              </p>
            </div>
          </div>
        </form>
      </div>

      <div className="col-4 offset-4 col-md-2 offset-md-4">
        <button className="btn btn-confirmar btn-danger" onClick={handlePrev}>
          Cancelar
        </button>
      </div>
      <div className="col-4 col-md-2">
        <button className="btn btn-cancelar btn-success" onClick={enviarDatos}>
          Acepto y envío mis datos
        </button>
      </div>
    </>
  );
}
