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

export default function FormularioActividadLaboral(props: any) {
  const { handleNext, handlePrev } = props;
  //estados para cada checkbox
  const [laboral1, setLaboral1] = useState("");
  const [laboral2, setLaboral2] = useState("");
  const [laboralMulti1, setMulti1] = useState<string[]>([]);
  const [laboralMulti2, setMulti2] = useState<string[]>([]);
  const [otroLaboral1, setOtroLaboral1] = useState("");
  //manejo de eventos de los checkboxs
  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLaboral1(value);
  };
  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (laboralMulti1.includes(value)) {
      let index = laboralMulti1.indexOf(value);
      laboralMulti1.splice(index, 1);
      setMulti1([...laboralMulti1]);
    } else {
      setMulti1([...laboralMulti1, value]);
    }
  };
  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (laboralMulti2.includes(value)) {
      let index = laboralMulti2.indexOf(value);
      laboralMulti2.splice(index, 1);
      setMulti2([...laboralMulti2]);
    } else {
      setMulti2([...laboralMulti2, value]);
    }
  };

  const handleChange4 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLaboral2(value);
  };
  const handleLaboral1 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setOtroLaboral1(value);
  };
  const siguiente = () => {
    handleNext({
      servicioLaboral: {
        laboral1,
        laboral2,
        laboralMulti1,
        laboralMulti2,
        otroLaboral1,
      },
    });
  };
  return (
    <>
      <div className="col-10 offset-1">
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
            <div className={laboral1 == "Si" ? "row mostrar" : "ocultar"}>
              <div className="col-6 ">
                <FormGroup>
                  <h3>Marque los meses que trabaja</h3>
                  <small>(Puede marcar más de una opción)</small>
                  <div className="d-flex flex-wrap">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti1.includes("Enero")}
                          onChange={handleChange2}
                          value="Enero"
                        />
                      }
                      label="Enero"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti1.includes("Febrero")}
                          onChange={handleChange2}
                          value="Febrero"
                        />
                      }
                      label="Febrero"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti1.includes("Marzo")}
                          onChange={handleChange2}
                          value="Marzo"
                        />
                      }
                      label="Marzo"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti1.includes("Abril")}
                          onChange={handleChange2}
                          value="Abril"
                        />
                      }
                      label="Abril"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti1.includes("Mayo")}
                          onChange={handleChange2}
                          value="Mayo"
                        />
                      }
                      label="Mayo"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti1.includes("Junio")}
                          onChange={handleChange2}
                          value="Junio"
                        />
                      }
                      label="Junio"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti1.includes("Julio")}
                          onChange={handleChange2}
                          value="Julio"
                        />
                      }
                      label="Julio"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti1.includes("Agosto")}
                          onChange={handleChange2}
                          value="Agosto"
                        />
                      }
                      label="Agosto"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti1.includes("Septiembre")}
                          onChange={handleChange2}
                          value="Septiembre"
                        />
                      }
                      label="Septiembre"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti1.includes("Octubre")}
                          onChange={handleChange2}
                          value="Octubre"
                        />
                      }
                      label="Octubre"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti1.includes("Noviembre")}
                          onChange={handleChange2}
                          value="Noviembre"
                        />
                      }
                      label="Noviembre"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti1.includes("Diciembre")}
                          onChange={handleChange2}
                          value="Diciembre"
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
                  <small>(Puede marcar más de una opción)</small>
                  <div className="d-flex flex-wrap">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti2.includes("Agricultura")}
                          onChange={handleChange3}
                          value="Agricultura"
                        />
                      }
                      label="Agricultura"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti2.includes("Ganaderia o pesca")}
                          onChange={handleChange3}
                          value="Ganaderia o pesca"
                        />
                      }
                      label="Ganadería o pesca"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti2.includes("Mineria")}
                          onChange={handleChange3}
                          value="Mineria"
                        />
                      }
                      label="Minería"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti2.includes(
                            "Transporte o mecanica"
                          )}
                          onChange={handleChange3}
                          value="Transporte o mecanica"
                        />
                      }
                      label="Transporte o mecánica"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti2.includes("Construccion")}
                          onChange={handleChange3}
                          value="Construccion"
                        />
                      }
                      label="Construcción"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti2.includes(
                            "Vendedor independiente"
                          )}
                          onChange={handleChange3}
                          value="Vendedor independiente"
                        />
                      }
                      label="Vendedor Dependiente"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti2.includes("Zafra")}
                          onChange={handleChange3}
                          value="Zafra"
                        />
                      }
                      label="Zafra"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti2.includes(
                            "Vendedor por cuenta propia"
                          )}
                          onChange={handleChange3}
                          value="Vendedor por cuenta propia"
                        />
                      }
                      label="Vendedor por cuenta propia"
                    />

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti2.includes(
                            "Trabajador(a) del hogar"
                          )}
                          onChange={handleChange3}
                          value="Trabajador(a) del hogar"
                        />
                      }
                      label="Trabajador(a) del hogar o niñero(a)"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti2.includes("Comunitario")}
                          onChange={handleChange3}
                          value="Comunitario"
                        />
                      }
                      label="Ayudante familiar o comunitario en agricultura o ganadería o pesca"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti2.includes(
                            "Ayudante hogar comercio o ventas"
                          )}
                          onChange={handleChange3}
                          value="Ayudante hogar comercio o ventas"
                        />
                      }
                      label="Ayudante en el hogar en comercio o ventas"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti2.includes("Entidad publica")}
                          onChange={handleChange3}
                          value="Entidad publica"
                        />
                      }
                      label="Trabajo en entidad pública"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={laboralMulti2.includes("Otro")}
                          onChange={handleChange3}
                          value="Otro"
                        />
                      }
                      label="Otro"
                    />

                    <TextField
                      required
                      className={
                        laboralMulti2.includes("Otro")
                          ? "w-100 mostrar"
                          : "ocultar"
                      }
                      id="standard-basic"
                      label=""
                      multiline
                      variant="standard"
                      value={otroLaboral1}
                      onChange={handleLaboral1}
                    />
                  </div>
                </FormGroup>
              </div>
              <div className="col-6 offset-3 mt-4">
                <FormGroup>
                  <h3>¿Con qué frecuencia trabaja?</h3>
                  <small>(Marque sólo una opción)</small>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="1"
                      name="radio-frecuencia-trabajo"
                      onChange={handleChange4}
                    >
                      <FormControlLabel
                        value="Diario"
                        control={<Radio />}
                        label="Todos los días"
                      />
                      <FormControlLabel
                        value="Fin de semana"
                        control={<Radio />}
                        label="Fines de semana"
                      />
                      <FormControlLabel
                        value="Dias festivos"
                        control={<Radio />}
                        label="Días festivos"
                      />
                      <FormControlLabel
                        value="Dias habiles"
                        control={<Radio />}
                        label="Días hábiles"
                      />
                      <FormControlLabel
                        value="Eventual"
                        control={<Radio />}
                        label="Eventual/esporádico"
                      />
                      <FormControlLabel
                        value="En vacaciones"
                        control={<Radio />}
                        label="En vacaciones"
                      />
                    </RadioGroup>
                  </FormControl>
                </FormGroup>
              </div>
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
