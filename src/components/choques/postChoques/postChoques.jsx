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
  createChoque,
} from "../../../redux/actions/index";
import FormControl from "@mui/material/FormControl";
import swal from "sweetalert";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { makeStyles } from "@material-ui/core/styles";
import Taxi from "../../../imagenes/depositphotos_59926519-stock-photo-yellow-sedan-taxi-car.jpg";

export default function PostChoques() {
  const [value, setValue] = React.useState(new Date());
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

  let fecha =
  value &&
  value.getDate() + "/" + (value.getMonth() + 1) + "/" + value.getFullYear();


  const [input, setInput] = useState({
    dia: fecha,
    fotos: "",
    seguro: "",
    poliza: "",
    nombre: "",
    apellido: "",
    dni: "",
    telefono: "",
    placa: "",
    marca: "",
    chofer:"",
  });

  const handleSelectChange = function (e) {
    setInput({ ...input, chofer: e.target.value });
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
    dispatch(createChoque(input));
    setInput({
      dia: fecha,
      fotos: "",
      seguro: "",
      poliza: "",
      nombre: "",
      apellido: "",
      dni: "",
      telefono: "",
      placa: "",
      marca: "",
    });
  };


  const useStyles = makeStyles(() => ({
    dataDie: {
      backgroundColor:"white",
    },
  }));

  const classes = useStyles();

  console.log(input)

  return (
    <>
      <Stack direction="column" alignItems="center" justifyContent="center" textAlign="center"  >
        <h1>CHOQUE NUEVO</h1>
        <h2>ELIJA EL CHOFER</h2>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
          <Select
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
              <LocalizationProvider dateAdapter={AdapterDateFns} >
                <MobileDatePicker
                  variant="success"
                  className={classes.dataDie}
                  label="Dia"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                    setInput({ ...input, dia:  newValue.getDate() + "/" + (newValue.getMonth() + 1) + "/" + newValue.getFullYear() });
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                Fotos
              </Typography>
              <input type='file' multiple='true' name='fotos' onChange={handleInput} />
              {/* <img
              src={input?.fotos[0] ? input.fotos : Taxi}
              border='1px solid gray'
              width='100px'
              height='100px'
              alt='k'
            /> */}
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                Seguro
              </Typography>
              <Input
                name="seguro"
                onChange={handleInput}
                required="required"
                sx={{ color: "white" }}
                value={input.seguro}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                Poliza
              </Typography>
              <Input
                name="poliza"
                onChange={handleInput}
                required="required"
                sx={{ color: "white" }}
                value={input.poliza}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                Nombre
              </Typography>
              <Input
                name="nombre"
                onChange={handleInput}
                required="required"
                sx={{ color: "white" }}
                value={input.nombre}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                Apellido
              </Typography>
              <Input
                name="apellido"
                onChange={handleInput}
                required="required"
                sx={{ color: "white" }}
                value={input.apellido}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                DNI
              </Typography>
              <Input
                name="dni"
                onChange={handleInput}
                required="required"
                sx={{ color: "white" }}
                value={input.dni}
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
                sx={{ color: "white" }}
                value={input.telefono}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                Placa
              </Typography>
              <Input
                name="placa"
                onChange={handleInput}
                required="required"
                sx={{ color: "white" }}
                value={input.placa}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: "4%" }}>
              <Typography gutterBottom variant="h5" component="div">
                Marca
              </Typography>
              <Input
                name="marca"
                onChange={handleInput}
                required="required"
                sx={{ color: "white" }}
                value={input.marca}
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
          <button className="btn5">CARGAR</button>
        </Stack>
      </form>
    </>
  );
}
