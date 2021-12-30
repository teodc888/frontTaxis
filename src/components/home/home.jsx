import React from "react";
import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <h1>Bienvenido a la mejor App de taxis</h1>
        <Link to="/recaudaciones">
          <Button variant="contained">Cargar Recaudacion</Button>
        </Link>
        <Link to="/recaudacionesTotales">
          <Button variant="contained">Mostrar Recaudaciones</Button>
        </Link>
        <Link to="/choferes">
          <Button variant="contained">Todos los choferes</Button>
        </Link>
        <Link to="/cargarChofer">
          <Button variant="contained">Cargar nuevo chofer</Button>
        </Link>
      </Stack>
    </>
  );
}
