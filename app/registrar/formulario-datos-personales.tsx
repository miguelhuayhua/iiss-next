"use client";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
//data
import { departamentos } from "./data";
//estilos
import "./registrar.scss";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
//tipos
import { Persona } from "./types";
//props
export default function FormularioDatosPersonales(props: any) {
  const { getData } = props;
  //datos como estado
  let [persona, setPersona] = useState<Persona>({
    ci: "",
    complemento: "",
    departamento: "La Paz",
    expedido: "La Paz",
    f_nacimiento: "",
    localidad: "",
    materno: "",
    nombres: "",
    paterno: "",
    provincia: "",
  });

  let [provincias, setProvincias] = useState<string[]>(
    departamentos[0].provincias
  );
  let [localidades, setLocalidades] = useState<string[]>(
    departamentos[0].localidades
  );
  //datos para el formulario

  //eventos de cambio de estados
  let handlePaterno = (ev: ChangeEvent<HTMLInputElement>) => {
    setPersona({ ...persona, paterno: ev.target.value });
    getData({ persona });
  };
  let handleMaterno = (ev: ChangeEvent<HTMLInputElement>) => {
    setPersona({ ...persona, materno: ev.target.value });
    getData({ persona });
  };
  let handleNombres = (ev: ChangeEvent<HTMLInputElement>) => {
    setPersona({ ...persona, nombres: ev.target.value });
    getData({ persona });
  };
  let handleExpedido = (ev: SelectChangeEvent<string>) => {
    setPersona({ ...persona, expedido: ev.target.value });
    getData({ persona });
  };
  let handleOficialia = (ev: ChangeEvent<HTMLInputElement>) => {
    setPersona({ ...persona, oficialia: Number.parseInt(ev.target.value) });
    getData({ persona });
  };
  let handleLibro = (ev: ChangeEvent<HTMLInputElement>) => {
    setPersona({ ...persona, libro: Number.parseInt(ev.target.value) });
    getData({ persona });
  };
  let handleFolio = (ev: ChangeEvent<HTMLInputElement>) => {
    setPersona({ ...persona, folio: Number.parseInt(ev.target.value) });
    getData({ persona });
  };
  let handleFecha = (ev: ChangeEvent<HTMLInputElement>) => {
    setPersona({ ...persona, f_nacimiento: ev.target.value });
    getData({ persona });
  };
  let handleCarnet = (ev: ChangeEvent<HTMLInputElement>) => {
    setPersona({ ...persona, ci: ev.target.value });
    getData({ persona });
  };
  let handleComplemento = (ev: ChangeEvent<HTMLInputElement>) => {
    setPersona({ ...persona, complemento: ev.target.value });
    getData({ persona });
  };

  let handleDepartamento = (ev: SelectChangeEvent<string>) => {
    setPersona({
      ...persona,
      localidad: "",
      provincia: "",
      departamento: ev.target.value,
    });
    let provincia = departamentos.find(
      (value) => value.departamento == ev.target.value
    )!.provincias;
    let localidad = departamentos.find(
      (value) => value.departamento == ev.target.value
    )!.localidades;
    setProvincias([...provincia]);
    setLocalidades([...localidad]);
    getData({ persona });
  };
  let handleProvincia = (ev: SelectChangeEvent<string>) => {
    setPersona({ ...persona, provincia: ev.target.value });
    getData({ persona });
  };
  let handleLocalidad = (ev: SelectChangeEvent<string>) => {
    setPersona({ ...persona, localidad: ev.target.value });
    getData({ persona });
  };
  //evento antes del cargado para llenar los datos main al principal
  useEffect(() => {
    getData({ persona });
  });

  //datos para el formulario
  return (
    <form action="">
      <div className="row">
        <div className="col-8 offset-2">
          <h3>Nombres y Apellidos:</h3>
        </div>
        <div className="col-4 ">
          <TextField
            required
            className="w-100"
            id="standard-basic"
            label="Apellido Paterno"
            variant="standard"
            value={persona.paterno}
            onChange={handlePaterno}
          />
        </div>
        <div className="col-4">
          <TextField
            required
            className="w-100"
            id="standard-basic"
            label="Apellido Materno"
            variant="standard"
            value={persona.materno}
            onChange={handleMaterno}
          />
        </div>
        <div className="col-4">
          <TextField
            required
            className="w-100"
            id="standard-basic"
            label="Nombres"
            variant="standard"
            value={persona.nombres}
            onChange={handleNombres}
          />
        </div>

        <div className="col-8 offset-2 my-3">
          <h3>Lugar de Nacimiento:</h3>
        </div>
        <div className="col-4">
          <FormControl className="w-100">
            <InputLabel id="demo-simple-select-label">Departamento</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Departamento"
              placeholder="Seleccione el departamento"
              onChange={handleDepartamento}
              value={persona.departamento}
            >
              {departamentos.map((value, i) => (
                <MenuItem key={i} value={value.departamento}>
                  {value.departamento}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="col-4">
          <FormControl className="w-100">
            <InputLabel id="demo-simple-select-label">Provincia</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Provincia"
              placeholder="Seleccione una provincia"
              value={persona.provincia}
              onChange={handleProvincia}
            >
              {provincias.map((value, i) => (
                <MenuItem key={i} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="col-4">
          <FormControl className="w-100">
            <InputLabel id="demo-simple-select-label">Localidad</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={persona.localidad}
              label="Localidad"
              placeholder="Seleccione la Localidad"
              onChange={handleLocalidad}
            >
              {localidades.map((value, i) => (
                <MenuItem key={i} value={value}>
                  {value}
                </MenuItem>
              ))}{" "}
            </Select>
          </FormControl>
        </div>
        <div className="col-8 offset-2 my-3">
          <h3>Certificado de Nacimiento:</h3>
        </div>
        <div className="col-3">
          <TextField
            className="w-100"
            label="Oficialia N°"
            variant="standard"
            required
            onChange={handleOficialia}
            value={persona.oficialia?.toString()}
            type="number"
          />
        </div>
        <div className="col-3">
          <TextField
            className="w-100"
            label="Libro N°"
            variant="standard"
            value={persona.libro?.toString()}
            onChange={handleLibro}
            type="number"
          />
        </div>
        <div className="col-3">
          <TextField
            className="w-100"
            label="Partida N°"
            variant="standard"
            value={persona.partida?.toString()}
            type="number"
          />
        </div>
        <div className="col-3">
          <TextField
            className="w-100"
            label="Folio N°"
            variant="standard"
            onChange={handleFolio}
            value={persona.folio?.toString()}
            type="number"
          />
        </div>
        <div className="col-8 offset-2 my-3">
          <h3>Fecha de Nacimiento:</h3>
        </div>
        <div className="col-4 offset-4">
          <TextField
            className="w-100"
            variant="standard"
            type="date"
            onChange={handleFecha}
          />
        </div>
        <div className="col-8 offset-2 my-3">
          <h3>Documento de Identificación:</h3>
        </div>
        <div className="col-4 ">
          <TextField
            required
            className="w-100"
            id="standard-basic"
            label="Carnet de Identidad"
            variant="standard"
            onChange={handleCarnet}
          />
        </div>
        <div className="col-4">
          <TextField
            className="w-100"
            id="standard-basic"
            label="Complemento"
            variant="standard"
            onChange={handleComplemento}
          />
        </div>
        <div className="col-4">
          <FormControl className="w-100">
            <InputLabel id="demo-simple-select-label">Expedido</InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Departamento"
              defaultValue="Bolivia"
              placeholder="Seleccione el departamento"
              onChange={handleExpedido}
              value={persona.expedido}
            >
              {departamentos.map((value, i) => (
                <MenuItem key={i} value={value.departamento}>
                  {value.departamento}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </form>
  );
}
