"use client";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function FormularioServiciosBasicos() {
  //estados para cada checkbox
  const [servicio1, setServicio1] = useState(0);
  const [servicio2, setServicio2] = useState(0);
  const [servicio3, setServicio3] = useState(0);
  const [servicio4, setServicio4] = useState(0);
  //manejo de eventos de los checkboxs
  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setServicio1(value);
  };
  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setServicio2(value);
  };
  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setServicio3(value);
  };
  const handleChange4 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setServicio4(value);
  };
  return (
    <form action="">
      <div className="row">
        <div className="col-4">
          <FormGroup>
            <h3>¿Tiene acceso a agua potable?</h3>
            <FormControlLabel
              control={
                <Checkbox
                  checked={servicio1 == 1}
                  onChange={handleChange1}
                  value="1"
                />
              }
              label="Si"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={servicio1 == 2}
                  onChange={handleChange1}
                  value="2"
                />
              }
              label="No"
            />
          </FormGroup>
        </div>
        <div className="col-4">
          <FormGroup>
            <h3>¿Cuenta con servicio de recojo de basura?</h3>
            <FormControlLabel
              control={
                <Checkbox
                  checked={servicio2 == 1}
                  onChange={handleChange2}
                  value="1"
                />
              }
              label="Si"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={servicio2 == 2}
                  onChange={handleChange2}
                  value="2"
                />
              }
              label="No"
            />
          </FormGroup>
        </div>
        <div className="col-4">
          <FormGroup>
            <h3>¿Usa energía eléctrica para alumbrar su vivienda?</h3>
            <FormControlLabel
              control={
                <Checkbox
                  checked={servicio3 == 1}
                  onChange={handleChange3}
                  value="1"
                />
              }
              label="Si"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={servicio3 == 2}
                  onChange={handleChange3}
                  value="2"
                />
              }
              label="No"
            />
          </FormGroup>
        </div>
        <div className="col-8 offset-2">
          <FormGroup>
            <h3>La vivienda que ocupa lugar es:</h3>
            <div className="d-flex flex-wrap">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={servicio4 == 1}
                    onChange={handleChange4}
                    value="1"
                  />
                }
                label="Propia"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={servicio4 == 2}
                    onChange={handleChange4}
                    value="2"
                  />
                }
                label="Alquilada"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={servicio4 == 3}
                    onChange={handleChange4}
                    value="3"
                  />
                }
                label="Anticrético"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={servicio4 == 4}
                    onChange={handleChange4}
                    value="4"
                  />
                }
                label="Cedida por servicios"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={servicio4 == 5}
                    onChange={handleChange4}
                    value="5"
                  />
                }
                label="Prestada por parientes o amigos"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={servicio4 == 6}
                    onChange={handleChange4}
                    value="6"
                  />
                }
                label="Contrato Mixto (alquiler o anticrético)"
              />
            </div>
          </FormGroup>
        </div>
      </div>
    </form>
  );
}
