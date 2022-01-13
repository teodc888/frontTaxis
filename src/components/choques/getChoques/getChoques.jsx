import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { mostrarChoques } from "../../../redux/actions/index";

export default function GetChoques() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mostrarChoques());
  }, [dispatch]);

  const choques = useSelector((state) => state.choques);


  return (
    <div>
      <Box
        sx={{ width: "100%", marginTop: "50px" }}
        alignItems="center"
        justify="center"
      >
        <Grid
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          container
        >
          {choques &&
            choques.map((choque) => (
              <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 645,    margin: "auto", }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="400"
                      width="500"
                      image="https://www.autopista.es/uploads/s1/57/35/47/4/article-choque-coches-en-cadena-sonido-golpe-seguros-578e25e12c819.jpeg"
                      alt="green iguana"
                    />
                    <CardContent sx={{textAlign:"center"}}>
                      <Typography gutterBottom variant="h3" component="div">
                        Dia: {choque.dia}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Chofer: {choque.choferes.map((chofer) => chofer.nombre)}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                      Informacion del choque
                      </Typography>
                      <Typography gutterBottom variant="h7" component="div">
                      Seguro: {choque.seguro}
                      </Typography>
                      <Typography gutterBottom variant="h7" component="div">
                      Poliza: {choque.poliza}
                      </Typography>
                      <Typography gutterBottom variant="h7" component="div">
                      Auto: {choque.marca}
                      </Typography>
                      <Typography gutterBottom variant="h7" component="div">
                      Nombre: {choque.nombre}
                      </Typography>
                      <Typography gutterBottom variant="h7" component="div">
                      Apellido: {choque.apellido}
                      </Typography>
                      <Typography gutterBottom variant="h7" component="div">
                      Telefono: {choque.telefono}
                      </Typography>
                      <Typography gutterBottom variant="h7" component="div">
                      DNI: {choque.dni}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
}
