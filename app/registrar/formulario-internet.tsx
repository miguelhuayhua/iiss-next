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

export default function FormularioServicioInternet() {
  //estados para cada checkbox
  const [servicio1, setServicio1] = useState(0);
  const [servicioMulti1, setServicioMulti1] = useState<number[]>([]);
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
      setServicioMulti1([...servicioMulti1, value]);
    }
  };
  return (
    <form action="">
      <div className="row">
        <div className="col-8 offset-2">
          <FormGroup>
            <h3>
              La persona accede a internet desde: (marque más de una opción)
            </h3>
            <div className="d-flex flex-wrap">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={servicioMulti1.includes(1)}
                    onChange={handleMultiChange1}
                    value="1"
                  />
                }
                label="Propia"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={servicioMulti1.includes(2)}
                    onChange={handleMultiChange1}
                    value="2"
                  />
                }
                label="Alquilada"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={servicioMulti1.includes(3)}
                    onChange={handleMultiChange1}
                    value="3"
                  />
                }
                label="Anticrético"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={servicioMulti1.includes(4)}
                    onChange={handleMultiChange1}
                    value="4"
                  />
                }
                label="Cedida por servicios"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={servicioMulti1.includes(5)}
                    onChange={handleMultiChange1}
                    value="5"
                  />
                }
                label="Prestada por parientes o amigos"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={servicioMulti1.includes(6)}
                    onChange={handleMultiChange1}
                    value="6"
                  />
                }
                label="Contrato Mixto (alquiler o anticrético)"
              />
            </div>
          </FormGroup>
        </div>
        <div className="col-8 offset-2">
          <FormGroup>
            <h3>¿Con qué frecuencia usa internet? (marque solo una opción)</h3>
            <div className="d-flex flex-wrap">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={servicio1 == 1}
                    onChange={handleChange1}
                    value="1"
                  />
                }
                label="Propia"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={servicio1 == 2}
                    onChange={handleChange1}
                    value="2"
                  />
                }
                label="Alquilada"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={servicio1 == 3}
                    onChange={handleChange1}
                    value="3"
                  />
                }
                label="Anticrético"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={servicio1 == 4}
                    onChange={handleChange1}
                    value="4"
                  />
                }
                label="Cedida por servicios"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={servicio1 == 5}
                    onChange={handleChange1}
                    value="5"
                  />
                }
                label="Prestada por parientes o amigos"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={servicio1 == 6}
                    onChange={handleChange1}
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
