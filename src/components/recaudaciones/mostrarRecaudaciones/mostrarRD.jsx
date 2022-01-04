import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mostrarRecaudaciones } from "../../../redux/actions/index";
import CartRD from "../cartRD/cartRD";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
export default function MostrarRD() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mostrarRecaudaciones());
  }, [dispatch]);

  const recaudaciones = useSelector((state) => state.recaudaciones);

  console.log(recaudaciones);
  return (
    <div>
      <Box sx={{ width: "100%", marginTop: "50px"}}>
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
