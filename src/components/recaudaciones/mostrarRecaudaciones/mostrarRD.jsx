import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mostrarRecaudaciones } from "../../../redux/actions/index";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
      <Box sx={{ width: "100%", marginTop: "50px", marginLeft: "3.5%" }}>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {recaudaciones &&
            recaudaciones.map((recaudacion) => (
              <>
                <Grid item xs={4} sm={4} md={4}>
                  <CardContent key={recaudacion.id}>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {recaudacion.dia}
                    </Typography>
                    <Typography variant="h3" component="div" sx={{ mb: 1.5 }}>
                      {recaudacion.choferes.map((el) => el.nombre)}{" "}
                      {recaudacion.choferes.map((el) => el.apellido)}
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 1.5 }}>
                      TOTAL: ${recaudacion.total}
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 1.5 }}>
                      35%: ${recaudacion.montoChofer}
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 1.5 }}>
                      GNC: ${recaudacion.gnc}
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 1.5 }}>
                      Kilometros: {recaudacion.kilometros} km
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1.5 }}>
                      Gastos Extra: {recaudacion.gastosExtra} km
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1.5 }}>
                      Gasto: ${recaudacion.totalGastos} km
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Grid>
              </>
            ))}
        </Grid>
      </Box>
    </div>
  );
}
