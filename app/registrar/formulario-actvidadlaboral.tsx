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
import { ChangeEvent, useState } from "react";

export default function FormularioActividadLaboral() {
  //estados para cada checkbox
  const [laboral1, setLaboral1] = useState(2);
  const [laboral2, setLaboral2] = useState(1);
  const [laboralMulti1, setMulti1] = useState<number[]>([]);
  const [laboralMulti2, setMulti2] = useState<number[]>([]);

  //manejo de eventos de los checkboxs
  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setLaboral1(value);
  };
  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    if (laboralMulti1.includes(value)) {
      let index = laboralMulti1.indexOf(value);
      laboralMulti1.splice(index, 1);
      setMulti1([...laboralMulti1]);
    } else {
      setMulti1([...laboralMulti1, value]);
    }
  };
  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (laboralMulti2.includes(value)) {
      let index = laboralMulti2.indexOf(value);
      laboralMulti2.splice(index, 1);
      setMulti2([...laboralMulti2]);
    } else {
      setMulti2([...laboralMulti2, value]);
    }
  };
  const handleChange4 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setLaboral2(value);
  };
  return (
    <form action="">
      <div className="row">
        <div className="col-2 offset-5">
          <FormGroup>
            <h3>Presenta Actualmente un Trabajo?</h3>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="2"
                name="radio-tiene-trabajo"
                onChange={handleChange1}
              >
                <FormControlLabel value="1" control={<Radio />} label="Sí" />
                <FormControlLabel value="2" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </FormGroup>
        </div>
        <div className="col-6 ">
          <FormGroup>
            <h3>Marque los meses que trabaja</h3>
            <small>(Seleccione varias opciones si desea)</small>
            <div className="d-flex flex-wrap">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti1.includes(1)}
                    onChange={handleChange2}
                    value="1"
                  />
                }
                label="Enero"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti1.includes(2)}
                    onChange={handleChange2}
                    value="2"
                  />
                }
                label="Febrero"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti1.includes(3)}
                    onChange={handleChange2}
                    value="3"
                  />
                }
                label="Marzo"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti1.includes(4)}
                    onChange={handleChange2}
                    value="4"
                  />
                }
                label="Abril"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti1.includes(5)}
                    onChange={handleChange2}
                    value="5"
                  />
                }
                label="Mayo"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti1.includes(6)}
                    onChange={handleChange2}
                    value="6"
                  />
                }
                label="Junio"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti1.includes(7)}
                    onChange={handleChange2}
                    value="7"
                  />
                }
                label="Julio"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti1.includes(8)}
                    onChange={handleChange2}
                    value="8"
                  />
                }
                label="Agosto"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti1.includes(9)}
                    onChange={handleChange2}
                    value="9"
                  />
                }
                label="Septiembre"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti1.includes(10)}
                    onChange={handleChange2}
                    value="10"
                  />
                }
                label="Octubre"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti1.includes(11)}
                    onChange={handleChange2}
                    value="11"
                  />
                }
                label="Noviembre"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti1.includes(12)}
                    onChange={handleChange2}
                    value="12"
                  />
                }
                label="Diciembre"
              />
            </div>
          </FormGroup>
        </div>
        <div className="col-6 ">
          <FormGroup>
            <h3>¿Qué trabajo es el que hace habitualmente?</h3>
            <small>(Seleccione varias opciones si desea)</small>
            <div className="d-flex flex-wrap">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti2.includes(1)}
                    onChange={handleChange3}
                    value="1"
                  />
                }
                label="Agricultura"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti2.includes(2)}
                    onChange={handleChange3}
                    value="2"
                  />
                }
                label="Ganadería o pesca"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti2.includes(3)}
                    onChange={handleChange3}
                    value="3"
                  />
                }
                label="Minería"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti2.includes(4)}
                    onChange={handleChange3}
                    value="4"
                  />
                }
                label="Minería"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti2.includes(5)}
                    onChange={handleChange3}
                    value="5"
                  />
                }
                label="Construcción"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti2.includes(6)}
                    onChange={handleChange3}
                    value="6"
                  />
                }
                label="Vendedor Dependiente"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti2.includes(7)}
                    onChange={handleChange3}
                    value="7"
                  />
                }
                label="Zafra"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti2.includes(8)}
                    onChange={handleChange3}
                    value="8"
                  />
                }
                label="Vendedor por cuenta propia"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti2.includes(9)}
                    onChange={handleChange3}
                    value="9"
                  />
                }
                label="Transporte o mecánica"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti2.includes(10)}
                    onChange={handleChange3}
                    value="10"
                  />
                }
                label="Trabajador(a) del hogar o niñero(a)"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti2.includes(11)}
                    onChange={handleChange3}
                    value="11"
                  />
                }
                label="Ayudante familiar o comunitario en agricultura o ganadería o pesca"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti2.includes(12)}
                    onChange={handleChange3}
                    value="12"
                  />
                }
                label="Ayudante en el hogar en comercio o ventas"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={laboralMulti2.includes(13)}
                    onChange={handleChange3}
                    value="13"
                  />
                }
                label="Trabajo en entidad pública"
              />
            </div>
          </FormGroup>
        </div>
        <div className="col-6 offset-3 mt-4">
          <FormGroup>
            <h3>¿Con qué frecuencia trabaja?</h3>
            <small>(Seleccione sólo una opción)</small>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="1"
                name="radio-frecuencia-trabajo"
                onChange={handleChange4}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Todos los días"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="Fines de semana"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label="Días festivos"
                />
                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label="Días hábiles"
                />
                <FormControlLabel
                  value="5"
                  control={<Radio />}
                  label="Eventual/esporádico"
                />
                <FormControlLabel
                  value="6"
                  control={<Radio />}
                  label="En vacaciones"
                />
              </RadioGroup>
            </FormControl>
          </FormGroup>
        </div>
      </div>
    </form>
  );
}
