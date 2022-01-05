import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mostrarRecaudaciones } from "../../../redux/actions/index";
import CartRD from "../cartRD/cartRD";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

export default function MostrarRD() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mostrarRecaudaciones());
  }, [dispatch]);

  const recaudaciones = useSelector((state) => state.recaudaciones);

  const aux = recaudaciones.map((el) => Number(el.total))
  const aux2 = recaudaciones.map((el) => el.kilometros)
  const aux3 = recaudaciones.map((el) => el.gnc)

  const total = aux.reduce((a, b) => a + b, 0)  
  const kilometro = aux2.reduce((a, b) => a + b, 0)
  const gnc = aux3.reduce((a, b) => a + b, 0)

  console.log(aux2)

  return (
    <div>
      <Box sx={{ width: "100%",  textAlign:"center" }}>
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
      </Box>

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
