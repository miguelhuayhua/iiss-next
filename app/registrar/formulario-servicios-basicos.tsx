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
  const { getData } = props;
  //estados para cada checkbox
  const [servicio1, setServicio1] = useState(0);
  const [servicio2, setServicio2] = useState(0);
  const [servicio3, setServicio3] = useState(0);
  const [servicio4, setServicio4] = useState(0);

  //manejo de eventos de los checkboxs
  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setServicio1(value);
    getData({
      servicioBasicos: { servicio1, servicio2, servicio3, servicio4 },
    });
  };
  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setServicio2(value);
    getData({
      servicioBasicos: { servicio1, servicio2, servicio3, servicio4 },
    });
  };
  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setServicio3(value);
    getData({
      servicioBasicos: { servicio1, servicio2, servicio3, servicio4 },
    });
  };
  const handleChange4 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setServicio4(value);
    getData({
      servicioBasicos: { servicio1, servicio2, servicio3, servicio4 },
    });
  };
  //evento antes del cargado para llenar los datos main al principal
  useEffect(() => {
    getData({
      servicioBasicos: { servicio1, servicio2, servicio3, servicio4 },
    });
  });

  return (
    <form action="">
      <div className="row">
        <div className="col-4">
          <FormGroup>
            <h3>¿Tiene acceso a agua potable?</h3>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="1"
                name="radio-tiene-trabajo"
                onChange={handleChange1}
              >
                <FormControlLabel value="1" control={<Radio />} label="Sí" />
                <FormControlLabel value="2" control={<Radio />} label="No" />
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
                defaultValue="1"
                name="radio-tiene-trabajo"
                onChange={handleChange2}
              >
                <FormControlLabel value="1" control={<Radio />} label="Sí" />
                <FormControlLabel value="2" control={<Radio />} label="No" />
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
                defaultValue="1"
                name="radio-tiene-trabajo"
                onChange={handleChange3}
              >
                <FormControlLabel value="1" control={<Radio />} label="Sí" />
                <FormControlLabel value="2" control={<Radio />} label="No" />
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
              defaultValue="1"
              name="radio-vivienda-ocupada"
              onChange={handleChange4}
            >
              <div className="d-flex flex-wrap">
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Propia"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="Alquilada"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label="Anticrético"
                />
                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label="Cedida por servicios"
                />
                <FormControlLabel
                  value="5"
                  control={<Radio />}
                  label="Prestada por parientes o amigos"
                />
                <FormControlLabel
                  value="6"
                  control={<Radio />}
                  label="Contrato Mixto(alquiler o anticrético)"
                />
              </div>
            </RadioGroup>
          </FormGroup>
        </div>
      </div>
    </form>
  );
}
