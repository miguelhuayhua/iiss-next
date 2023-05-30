"use client";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

export default function FormularioServiciosBasicos(props: any) {
  const { handleNext, handlePrev } = props;
  //estados para cada checkbox
  const [servicio1, setServicio1] = useState("Si");
  const [servicio2, setServicio2] = useState("Si");
  const [servicio3, setServicio3] = useState("Si");
  const [servicio4, setServicio4] = useState("Si");

  //manejo de eventos de los checkboxs
  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setServicio1(value);
  };
  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setServicio2(value);
  };
  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setServicio3(value);
  };
  const handleChange4 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setServicio4(value);
  };
  //evento antes del cargado para llenar los datos main al principal
  const siguiente = () => {
    handleNext({
      servicioBasicos: { servicio1, servicio2, servicio3, servicio4 },
    });
  };
  return (
    <>
      <div className="col-10 offset-1">
        <form action="">
          <div className="row">
            <div className="col-4">
              <FormGroup>
                <h3>¿Tiene acceso a agua potable?</h3>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Si"
                    name="radio-tiene-agua"
                    onChange={handleChange1}
                  >
                    <FormControlLabel
                      value="Si"
                      control={<Radio />}
                      label="Sí"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </FormGroup>
            </div>
            <div className="col-4">
              <FormGroup>
                <h3>¿Cuenta con servicio de recojo de basura?</h3>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Si"
                    name="radio-tiene-trabajo"
                    onChange={handleChange2}
                  >
                    <FormControlLabel
                      value="Si"
                      control={<Radio />}
                      label="Sí"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </FormGroup>
            </div>
            <div className="col-4">
              <FormGroup>
                <h3>¿Usa energía eléctrica para alumbrar su vivienda?</h3>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Si"
                    name="radio-tiene-alumbracion"
                    onChange={handleChange3}
                  >
                    <FormControlLabel
                      value="Si"
                      control={<Radio />}
                      label="Sí"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </FormGroup>
            </div>
            <div className="col-8 offset-2">
              <FormGroup>
                <h3>La vivienda que ocupa lugar es:</h3>
                <small>(Marque sólo una opción)</small>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Propia"
                  name="radio-vivienda-ocupada"
                  onChange={handleChange4}
                >
                  <div className="d-flex flex-wrap">
                    <FormControlLabel
                      value="Propia"
                      control={<Radio />}
                      label="Propia"
                    />
                    <FormControlLabel
                      value="Alquilada"
                      control={<Radio />}
                      label="Alquilada"
                    />
                    <FormControlLabel
                      value="Anticretico"
                      control={<Radio />}
                      label="Anticrético"
                    />
                    <FormControlLabel
                      value="Cedido por servicios"
                      control={<Radio />}
                      label="Cedida por servicios"
                    />
                    <FormControlLabel
                      value="Prestado p/a"
                      control={<Radio />}
                      label="Prestada por parientes o amigos"
                    />
                    <FormControlLabel
                      value="Alquiler o anticretico"
                      control={<Radio />}
                      label="Contrato Mixto(alquiler o anticrético)"
                    />
                  </div>
                </RadioGroup>
              </FormGroup>
            </div>
          </div>
        </form>
      </div>
      <div className="col-4 offset-4 col-md-2 offset-md-4">
        <button className="btn custom-btn" onClick={handlePrev}>
          Volver
        </button>
      </div>
      <div className="col-4 col-md-2">
        <button className="btn custom-btn btn-siguiente" onClick={siguiente}>
          Siguiente
        </button>
      </div>
    </>
  );
}
