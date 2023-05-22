"use client";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
//estilos
import "./registrar.scss";
import { type } from "os";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
//type
interface Persona {
  nombres: string;
  paterno: string;
  materno: string;
  provincia: string;
  departamento: string;
  localidad: string;
  oficialia: number;
  libro: number;
  partida: number;
  folio: number;
  f_nacimiento: string;
  ci: number;
  complemento: number;
  expedido: string;
}
//props
export default function FormularioDatosPersonales() {
  let departamentos: {
    departamento: string;
    provincias: string[];
    localidades: string[];
  }[] = [
    {
      departamento: "La Paz",
      provincias: [
        "Aroma",
        "Bautista Saavedra",
        "Caranavi",
        "Franz Tamayo",
        "Gualberto Villarroel",
        "Ingavi",
        "Inquisivi",
        "José Manuel Pando",
        "Larecaja",
        "Loayza",
        "Los Andes",
        "Manco Kapac",
        "Muñecas",
        "Nor Yungas",
        "Omasuyos",
        "Pacajes",
        "Pedro Domingo Murillo",
        "Sud Yungas",
      ],
      localidades: [
        "La Paz",
        "El Alto",
        "Viacha",
        "Achocalla",
        "Mecapaca",
        "Palca",
        "Patacamaya",
        "Coroico",
        "Chulumani",
        "Copacabana",
        "Sorata",
        "Charazani",
        "Puerto Acosta",
        "Desaguadero",
        "Apolo",
      ],
    },
    {
      departamento: "Cochabamba",
      provincias: [
        "Arani",
        "Arque",
        "Ayopaya",
        "Bolívar",
        "Carrasco",
        "Cercado",
        "Chapare",
        "Esteban Arce",
        "Germán Jordán",
        "Mizque",
        "Punata",
        "Quillacollo",
        "Tapacarí",
        "Tiraque",
      ],
      localidades: [
        "Cochabamba",
        "Sacaba",
        "Quillacollo",
        "Colcapirhua",
        "Tiquipaya",
        "Vinto",
        "Arani",
        "Punata",
        "Cliza",
        "Arque",
        "Aiquile",
        "Totora",
        "Tarata",
        "Villa Tunari",
        "Chimore",
        "Entre Ríos",
      ],
    },
    {
      departamento: "Santa Cruz",
      provincias: [
        "Andrés Ibáñez",
        "Ángel Sandoval",
        "Chiquitos",
        "Cordillera",
        "Florida",
        "Germán Busch",
        "Guarayos",
        "Ichilo",
        "Ignacio Warnes",
        "José Miguel de Velasco",
        "Ñuflo de Chávez",
        "Obispo Santistevan",
        "Sara",
        "Vallegrande",
      ],
      localidades: [
        "Santa Cruz de la Sierra",
        "Warnes",
        "Montero",
        "Cotoca",
        "San Ignacio de Velasco",
        "Camiri",
        "Puerto Suárez",
        "Riberalta",
        "Guayaramerín",
        "Roboré",
        "San José de Chiquitos",
        "San Matías",
        "Ascensión de Guarayos",
        "Yapacaní",
        "Comarapa",
        "Samaipata",
        "Vallegrande",
        "Buena Vista",
        "Charagua",
        "Concepción",
      ],
    },
  ];
  //datos como estado
  let [persona, setPersona] = useState<Persona>({
    ci: 0,
    complemento: 1,
    departamento: "La Paz",
    expedido: "",
    f_nacimiento: "",
    folio: 0,
    libro: 0,
    localidad: "",
    materno: "",
    nombres: "",
    oficialia: 0,
    partida: 0,
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

  //eventos
  let handlePaterno = (ev: ChangeEvent<HTMLInputElement>) => {
    setPersona({ ...persona, paterno: ev.target.value });
  };
  let handleMaterno = (ev: ChangeEvent<HTMLInputElement>) => {
    setPersona({ ...persona, materno: ev.target.value });
  };
  let handleNombres = (ev: ChangeEvent<HTMLInputElement>) => {
    setPersona({ ...persona, nombres: ev.target.value });
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
    console.log(provincia, localidad, departamentos, persona);
    setProvincias([...provincia]);
    setLocalidades([...localidad]);
  };
  let handleProvincia = (ev: SelectChangeEvent<string>) => {
    setPersona({ ...persona, provincia: ev.target.value });
  };
  let handleLocalidad = (ev: SelectChangeEvent<string>) => {
    setPersona({ ...persona, localidad: ev.target.value });
  };

  //datos para el formulario

  return (
    <form action="">
      <div className="row">
        <div className="col-8 offset-2">
          <h3>Nombres y Apellidos:</h3>
        </div>
        <div className="col-4 ">
          <TextField
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
            className="w-100"
            id="standard-basic"
            label="Apellido Materno"
            variant="standard"
          />
        </div>
        <div className="col-4">
          <TextField
            className="w-100"
            id="standard-basic"
            label="Nombres"
            variant="standard"
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
              error
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Provincia"
              placeholder="Seleccione una provincia"
              value={persona.provincia}
              onChange={handleProvincia}
            >
              {provincias.map((value, i) => (
                <MenuItem key={i + 100} value={value}>
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
            id="standard-basic"
            label="Oficialia N°"
            variant="standard"
          />
        </div>
        <div className="col-3">
          <TextField
            className="w-100"
            id="standard-basic"
            label="Libro N°"
            variant="standard"
          />
        </div>
        <div className="col-3">
          <TextField
            className="w-100"
            id="standard-basic"
            label="Partida N°"
            variant="standard"
          />
        </div>
        <div className="col-3">
          <TextField
            className="w-100"
            id="standard-basic"
            label="Folio N°"
            variant="standard"
          />
        </div>
        <div className="col-8 offset-2 my-3">
          <h3>Fecha de Nacimiento:</h3>
        </div>
        <div className="col-4 offset-4">
          <TextField
            className="w-100"
            id="standard-basic"
            variant="standard"
            type="date"
            
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
          />
        </div>
        <div className="col-4">
          <TextField
            className="w-100"
            id="standard-basic"
            label="Complemento"
            variant="standard"
          />
        </div>
        <div className="col-4">
          <FormControl className="w-100">
            <InputLabel id="demo-simple-select-label">Expedido</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"10"}
              label="Departamento"
              defaultValue="Bolivia"
              placeholder="Seleccione el departamento"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </form>
  );
}
