import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  mostrarRecaudaciones,
  obtenerChoferes,
} from "../../../redux/actions/index";
import CartRD from "../cartRD/cartRD";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function MostrarRD() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mostrarRecaudaciones());
    dispatch(obtenerChoferes());
  }, [dispatch]);

  const recaudaciones = useSelector((state) => state.recaudaciones);
  const choferes = useSelector((state) => state.choferes);

  const aux = recaudaciones.map((el) => Number(el.total));
  const aux2 = recaudaciones.map((el) => el.kilometros);
  const aux3 = recaudaciones.map((el) => el.gnc);

  const total = aux.reduce((a, b) => a + b, 0);
  const kilometro = aux2.reduce((a, b) => a + b, 0);
  const gnc = aux3.reduce((a, b) => a + b, 0);

  console.log(aux2);

  return (
    <div>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <h1>RECAUDACIONES TOTALES</h1>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4}>
            <h3>TOTAL: ${total}</h3>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <h3>GNC TOTAL: ${gnc}</h3>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <h3>KILOMETROS TOTALES: {kilometro} km</h3>
          </Grid>
        </Grid>
        <FormControl sx={{ m: 1, minWidth: 320 }}>
          <InputLabel id="demo-simple-select-label">
            FILTRAR POR CHOFERES
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="FILTRAR POR CHOFERES"
          >
            <MenuItem value={"ALL"}>TODOS</MenuItem>
            {choferes.map((el) => (
              <MenuItem value={el.nombre}>{el.nombre}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Stack 
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                  sx={{marginTop: "2rem"}}
      >
          <Pagination count={10} color="secondary" />
        </Stack>

      <Box sx={{ width: "100%", marginTop: "50px" }}>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {recaudaciones &&
            recaudaciones.map((recaudacion) => (
              <>
                <Grid item xs={4} sm={4} md={4}>
                  <CartRD
                    nombre={recaudacion.choferes.map((el) => el.nombre)}
                    dia={recaudacion.dia}
                    apellido={recaudacion.choferes.map((el) => el.apellido)}
                    total={recaudacion.total}
                    neto={recaudacion.neto}
                    kilometros={recaudacion.kilometros}
                    gnc={recaudacion.gnc}
                    montoChofer={recaudacion.montoChofer}
                    documento={recaudacion.choferes.map((el) => el.documento)}
                    telefono={recaudacion.choferes.map((el) => el.telefono)}
                  />
                </Grid>
              </>
            ))}
        </Grid>
      </Box>
    </div>
  );
}
