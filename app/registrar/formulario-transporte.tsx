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

export default function FormularioMedioTransporte(props: any) {
  const { handlePrev, handleNext } = props;
  //estados para cada checkbox
  const [medio1, setMedio1] = useState("A pie");
  const [otroMedio1, setOtroMedio1] = useState("Menos de media hora");
  const [medio2, setMedio2] = useState("");
  //manejo de eventos de los checkboxs
  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMedio1(value);
  };
  const handleMedio1 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setOtroMedio1(value);
  };
  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMedio2(value);
  };
  //evento antes del cargado para llenar los datos main al principal
  const siguiente = () => {
    handleNext({ servicioTransporte: { medio1, otroMedio1, medio2 } });
  };
  return (
    <>
      <div className="col-10 offset-1">
        <form action="">
          <div className="row">
            <div className="col-6">
              <FormGroup>
                <h3>Generalmente ¿Cómo llega a un punto de interés?</h3>
                <small>(Marque solo una opción)</small>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={1}
                  name="radio-medio-1"
                  onChange={handleChange1}
                >
                  <FormControlLabel
                    value="A pie"
                    control={<Radio />}
                    label="A pie"
                  />
                  <FormControlLabel
                    value="Vehiculo"
                    control={<Radio />}
                    label="En vehículo de transporte terrestre"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="Fluvial"
                  />
                  <FormControlLabel
                    value="Otro"
                    control={<Radio />}
                    label="Otro (especifique)"
                  />
                </RadioGroup>
                <TextField
                  required
                  className={medio1 == "otro" ? "w-100 mostrar" : "ocultar"}
                  id="standard-basic"
                  label=""
                  multiline
                  variant="standard"
                  value={otroMedio1}
                  onChange={handleMedio1}
                />
              </FormGroup>
            </div>
            <div className="col-6">
              <FormGroup>
                <h3>
                  Según el medio de transporte señalado, ¿Cuál ese el tiempo
                  máximo que demora de llegar desde su vivienda hasta el lugar
                  de interés?
                </h3>
                <small>(Marque solo una opción)</small>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={1}
                  name="radio-medio-1"
                  onChange={handleChange2}
                >
                  <FormControlLabel
                    value="Menos de media hora"
                    control={<Radio />}
                    label="Menos de media hora"
                  />
                  <FormControlLabel
                    value="Entre 1 hora y media hora"
                    control={<Radio />}
                    label="Entre media hora y una hora"
                  />
                  <FormControlLabel
                    value="Entre 1 a 2 horas"
                    control={<Radio />}
                    label="Entre una a dos horas"
                  />
                  <FormControlLabel
                    value="Mas de 2 horas"
                    control={<Radio />}
                    label="Más de dos horas"
                  />
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
