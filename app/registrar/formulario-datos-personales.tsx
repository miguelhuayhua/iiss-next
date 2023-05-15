"use client";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
//estilos
import "./registrar.scss";

//props
export default function FormularioDatosPersonales() {
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
        <div className="col-4">
          <FormControl className="w-100">
            <InputLabel id="demo-simple-select-label">Departamento</InputLabel>
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
        <div className="col-4">
          <FormControl className="w-100">
            <InputLabel id="demo-simple-select-label">Departamento</InputLabel>
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
          <input type="date" name="" className="form-control" id="" />
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
