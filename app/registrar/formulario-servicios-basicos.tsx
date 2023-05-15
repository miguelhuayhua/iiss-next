"use client";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export default function FormularioServiciosBasicos() {
  return (
    <form action="">
      <div className="row">
        <div className="col-8 offset-2">
          <h3>Nombres y Apellidos:</h3>
        </div>
        <div className="col-4">
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
      </div>
    </form>
  );
}
