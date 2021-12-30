import React, { useState, useEffect } from "react";
import { Button, Input, Select } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { createChoferes } from "../../../redux/actions/index";
import { Link } from "react-router-dom";

export default function PostChoferes() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    documento: "",
    telefono: "",
    carnet: "Si",
    vencimientoCarnet: "",
  });

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setInput({ ...input, carnet: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createChoferes(input));
    setInput({
      nombre: "",
      apellido: "",
      documento: "",
      telefono: "",
      carnet: "Si",
      vencimientoCarnet: "",
    });
  };

  console.log(input);

  return (
    <>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <h1>CREAR CHOFER NUEVO</h1>
      </Stack>
      <form onSubmit={handleSubmit}>
        <Box sx={{ width: "100%", marginLeft: "10%" }}>
          <Grid
            container
            rowSpacing={1}
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ marginTop: "4%" }}
          >
            <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                Nombre
              </Typography>
              <Input name="nombre" onChange={handleInput} required="required" />
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                Apellido
              </Typography>
              <Input
                name="apellido"
                onChange={handleInput}
                required="required"
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                Documento
              </Typography>
              <Input
                name="documento"
                onChange={handleInput}
                required="required"
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                Telefono
              </Typography>
              <Input
                name="telefono"
                onChange={handleInput}
                required="required"
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                Carnet
              </Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="carnet"
                onChange={handleSelect}
                required="required"
              >
                <MenuItem name="carnet" value={"Si"}>
                  SI
                </MenuItem>
                <MenuItem name="carnet" value={"No"}>
                  NO
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                FVC
              </Typography>
              <Input
                name="vencimientoCarnet"
                onChange={handleInput}
                required="required"
              />
            </Grid>
          </Grid>
        </Box>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >

            <button>CARGAR</button>
        
        </Stack>
      </form>
    </>
  );
}
