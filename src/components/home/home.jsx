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
          <Button sx={{backgroundColor:"#fbc02d", color:"black"}} variant="success">Cargar Recaudacion</Button>
        </Link>
        <Link to="/recaudacionesTotales">
          <Button sx={{backgroundColor:"#fbc02d", color:"black"}} variant="success">Mostrar Recaudaciones</Button>
        </Link>
        <Link to="/choferes">
          <Button sx={{backgroundColor:"#fbc02d", color:"black"}} variant="success">Todos los choferes</Button>
        </Link>
        <Link to="/cargarChofer">
          <Button sx={{backgroundColor:"#fbc02d", color:"black"}} variant="success">Cargar nuevo chofer</Button>
        </Link>
      </Stack>
    </>
  );
}
