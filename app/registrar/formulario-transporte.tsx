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

export default function FormularioMedioTransporte() {
  //estados para cada checkbox
  const [medio1, setMedio1] = useState(0);
  const [medio2, setMedio2] = useState(0);
  //manejo de eventos de los checkboxs
  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setMedio1(value);
  };
  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setMedio2(value);
  };

  return (
    <form action="">
      <div className="row">
        <div className="col-6">
          <FormGroup>
            <h3>Generalmente ¿Cómo llega a un punto de interés?</h3>
            <small>(Coloque solo una opción)</small>
            <FormControlLabel
              control={
                <Checkbox
                  checked={medio1 == 1}
                  onChange={handleChange1}
                  value="1"
                />
              }
              label="A pie"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={medio1 == 2}
                  onChange={handleChange1}
                  value="2"
                />
              }
              label="En vehículo de transporte terrestre"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={medio1 == 3}
                  onChange={handleChange1}
                  value="3"
                />
              }
              label="Fluvial"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={medio1 == 4}
                  onChange={handleChange1}
                  value="4"
                />
              }
              label="Otro (especifique)"
            />
          </FormGroup>
        </div>
        <div className="col-6">
          <FormGroup>
            <h3>
              Según el medio de transporte señalado, ¿Cuál ese el tiempo máximo
              que demora de llegar desde su vivienda hasta el lugar de interés?
            </h3>
            <small>(Coloque solo una opción)</small>
            <FormControlLabel
              control={
                <Checkbox
                  checked={medio2 == 1}
                  onChange={handleChange2}
                  value="1"
                />
              }
              label="Menos de media hora"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={medio2 == 2}
                  onChange={handleChange2}
                  value="2"
                />
              }
              label="Entre media hora y una hora"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={medio2 == 3}
                  onChange={handleChange2}
                  value="3"
                />
              }
              label="Entre una a dos horas"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={medio2 == 4}
                  onChange={handleChange2}
                  value="4"
                />
              }
              label="Más de dos horas"
            />
          </FormGroup>
        </div>
      </div>
    </form>
  );
}
