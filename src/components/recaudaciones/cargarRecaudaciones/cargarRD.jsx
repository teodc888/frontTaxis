import React, { useState, useEffect } from "react";
import { Input, Select } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerChoferes,
  createRecaudaciones,
} from "../../../redux/actions/index";
import FormControl from "@mui/material/FormControl";
import swal from "sweetalert";
// import TextField from "@mui/material/TextField";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DatePicker from "@mui/lab/DatePicker";

export default function CargarRD() {
  // const [value, setValue] = React.useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerChoferes());
  }, [dispatch]);

  const choferes = useSelector((state) => state.choferes);

  const alert = () => {
    swal({
      title: "Chofer creado",
      text: "El chofer ha sido creado con exito",
      icon: "success",
      button: "Aceptar",
    });
  };

  let hoy = new Date();
  let fecha =
    hoy.getDate() + "/" + (hoy.getMonth() + 1) + "/" + hoy.getFullYear();

  const [input, setInput] = useState({
    dia: fecha,
    neto: "",
    gnc: "",
    kilometros: "",
    gastosExtra: "0",
    idchofer: "",
  });

  const handleSelectChange = function (e) {
    setInput({ ...input, idchofer: e.target.value });
  };

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    alert();
    e.preventDefault();
    dispatch(createRecaudaciones(input));
    setInput({
      dia: fecha,
      neto: "",
      gnc: "",
      kilometros: "",
      gastosExtra: "0",
      idchofer: "",
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
            sx={{ color: "white" }}
            onChange={handleSelectChange}
          >
            {choferes &&
              choferes.map((chofer) => (
                <MenuItem name="idchofer" value={chofer.id}>
                  {chofer.nombre}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Stack>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{ width: "100%", textAlign: "center"}}
        >
          <Grid
            container
            rowSpacing={1}
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ marginTop: "4%" }}
          >
            <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                Dia
              </Typography>
              <Input
                name="dia"
                value={input.dia}
                onChange={handleInput}
                required="required"
                sx={{ color: "white" }}
              />
              {/* <LocalizationProvider dateAdapter={AdapterDateFns} sx={{color:"white"}} >
                <DatePicker
                  label="Dia"
                  views={['year', 'month', 'day']}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider> */}
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                Total
              </Typography>
              <Input
                name="neto"
                onChange={handleInput}
                required="required"
                sx={{ color: "white" }}
                value={input.neto}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                gnc
              </Typography>
              <Input
                name="gnc"
                onChange={handleInput}
                required="required"
                sx={{ color: "white" }}
                value={input.gnc}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                kilometros
              </Typography>
              <Input
                name="kilometros"
                onChange={handleInput}
                required="required"
                sx={{ color: "white" }}
                value={input.kilometros}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                gastosExtra
              </Typography>
              <Input
                name="gastosExtra"
                onChange={handleInput}
                required="required"
                sx={{ color: "white" }}
                value={input.gastosExtra}
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
