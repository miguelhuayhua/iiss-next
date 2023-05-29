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
  const [servicio1, setServicio1] = useState(0);
  const [servicioMulti1, setServicioMulti1] = useState<number[]>([]);
  //evento antes del cargado para llenar los datos main al principal

  //manejo de eventos de los checkboxs
  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setServicio1(value);
  };

  const handleMultiChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (servicioMulti1.includes(value)) {
      let index = servicioMulti1.indexOf(value);
      servicioMulti1.splice(index, 1);
      setServicioMulti1([...servicioMulti1]);
    } else {
      if (value == 4) {
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
                        checked={servicioMulti1.includes(1)}
                        onChange={handleMultiChange1}
                        value="1"
                      />
                    }
                    label="Vivienda"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={servicioMulti1.includes(2)}
                        onChange={handleMultiChange1}
                        value="2"
                      />
                    }
                    label="Lugares Públicos"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={servicioMulti1.includes(3)}
                        onChange={handleMultiChange1}
                        value="3"
                      />
                    }
                    label="Teléfono / Celular"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={servicioMulti1.includes(4)}
                        onChange={handleMultiChange1}
                        value="4"
                      />
                    }
                    label="No accede a internet"
                  />
                </div>
              </FormGroup>
            </div>
            <div
              className={
                servicioMulti1.includes(4)
                  ? "ocultar"
                  : "col-8 offset-2 mostrar"
              }
            >
              <FormGroup>
                <h3>¿Con qué frecuencia usa internet?</h3>
                <small> (marque solo una opción)</small>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="1"
                  name="radio-tiene-trabajo"
                  onChange={handleChange1}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Diariamente"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Más de una vez a la semana"
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label="Una vez a la semana"
                  />
                  <FormControlLabel
                    value="4"
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
