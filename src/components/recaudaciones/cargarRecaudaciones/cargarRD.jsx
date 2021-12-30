import React, { useState, useEffect } from "react";
import { Button, Input, Select } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { obtenerChoferes } from "../../../redux/actions/index";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";

export default function CargarRD() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerChoferes());
  }, [dispatch]);

  const choferes = useSelector((state) => state.choferes);
  console.log(choferes);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(createChoferes(input));
    setInput({
      nombre: "",
      apellido: "",
      documento: "",
      telefono: "",
      carnet: "Si",
      vencimientoCarnet: "",
    });
  };

  return (
    <>
      <Stack direction="column" alignItems="center" justifyContent="center">
        <h1>CREAR NUEVA RECAUDACION</h1>
        <h2>ELIJA EL CHOFER</h2>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="carnet"
            required="required"
          >
            {choferes &&
              choferes.map((chofer) => (
                <MenuItem name="choferes" value={chofer.id}>
                  {chofer.nombre}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
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
            <Grid item xs={3.4} sm={3.4} md={3.4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                Dia
              </Typography>
              <Input name="nombre" onChange={handleInput} required="required" />
            </Grid>
            <Grid item xs={3.4} sm={3.4} md={3.4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                Total
              </Typography>
              <Input
                name="apellido"
                onChange={handleInput}
                required="required"
              />
            </Grid>
            <Grid item xs={3.4} sm={3.4} md={3.4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                montoChofer
              </Typography>
              <Input
                name="documento"
                onChange={handleInput}
                required="required"
              />
            </Grid>
            <Grid item xs={3.4} sm={3.4} md={3.4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                gnc
              </Typography>
              <Input
                name="telefono"
                onChange={handleInput}
                required="required"
              />
            </Grid>
            <Grid item xs={3.4} sm={3.4} md={3.4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                kilometros
              </Typography>
              <Input
                name="vencimientoCarnet"
                onChange={handleInput}
                required="required"
              />
            </Grid>
            <Grid item xs={3.4} sm={3.4} md={3.4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                gastosExtra
              </Typography>
              <Input
                name="vencimientoCarnet"
                onChange={handleInput}
                required="required"
              />
            </Grid>
            <Grid item xs={3.4} sm={3.4} md={3.4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                totalGastos
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
