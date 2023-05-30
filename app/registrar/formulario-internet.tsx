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

export default function FormularioServicioInternet(props: any) {
  const { handleNext, handlePrev } = props;
  //estados para cada checkbox
  const [servicio1, setServicio1] = useState("Diariamente");
  const [servicioMulti1, setServicioMulti1] = useState<string[]>(["Vivienda"]);
  //evento antes del cargado para llenar los datos main al principal

  //manejo de eventos de los checkboxs
  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setServicio1(value);
  };

  const handleMultiChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (servicioMulti1.includes(value)) {
      let index = servicioMulti1.indexOf(value);
      servicioMulti1.splice(index, 1);
      setServicioMulti1([...servicioMulti1]);
    } else {
      if (value == "No tiene") {
        setServicioMulti1([value]);
      } else {
        setServicioMulti1([...servicioMulti1, value]);
      }
    }
  };
  const siguiente = () => {
    handleNext({ servicioInternet: { servicio1, servicioMulti1 } });
  };
  return (
    <>
      <div className="col-10 offset-1">
        <form action="">
          <div className="row">
            <div className="col-8 offset-2">
              <FormGroup>
                <h3>La persona accede a internet desde:</h3>
                <small>(Puede marcar más de una opción)</small>
                <div className="d-flex flex-wrap">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={servicioMulti1.includes("Vivienda")}
                        onChange={handleMultiChange1}
                        value="Vivienda"
                      />
                    }
                    label="Vivienda"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={servicioMulti1.includes("Lugares publicos")}
                        onChange={handleMultiChange1}
                        value="Lugares publicos"
                      />
                    }
                    label="Lugares Públicos"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={servicioMulti1.includes("Telefono / Celular")}
                        onChange={handleMultiChange1}
                        value="Telefono / Celular"
                      />
                    }
                    label="Teléfono / Celular"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={servicioMulti1.includes("No tiene")}
                        onChange={handleMultiChange1}
                        value="No tiene"
                      />
                    }
                    label="No accede a internet"
                  />
                </div>
              </FormGroup>
            </div>
            <div
              className={
                servicioMulti1.includes("No tiene")
                  ? "ocultar"
                  : "col-8 offset-2 mostrar"
              }
            >
              <FormGroup>
                <h3>¿Con qué frecuencia usa internet?</h3>
                <small> (marque solo una opción)</small>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={1}
                  name="radio-tiene-frecuencia"
                  onChange={handleChange1}
                >
                  <FormControlLabel
                    value="Diariamente"
                    control={<Radio />}
                    label="Diariamente"
                  />
                  <FormControlLabel
                    value="Mas de una vez semana"
                    control={<Radio />}
                    label="Más de una vez a la semana"
                  />
                  <FormControlLabel
                    value="Una vez a la semana"
                    control={<Radio />}
                    label="Una vez a la semana"
                  />
                  <FormControlLabel
                    value="Una vez al mes"
                    control={<Radio />}
                    label="Una vez al mes"
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
