import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { obtenerChoferes } from "../../../redux/actions/index";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";

export default function GetChoferes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerChoferes());
  }, [dispatch]);
  
  const choferes = useSelector((state) => state.choferes);


  const useStyles = makeStyles(() => ({
    cardChoferes: {
      background: "#263238",
      color:"white",
      maxWidth: 345,
      margin: "auto",
    },
  }));



  const classes = useStyles();

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
          {choferes &&
            choferes.map((chofer) => (
              <Grid item xs={4} sm={4} md={4} key={chofer.id}>
                <Card className={classes.cardChoferes}>
                  <CardMedia
                    component="img"
                    height="350"
                    image="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      {chofer.nombre} {chofer.apellido}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                      Documento:{chofer.documento}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                      Telefono:{chofer.telefono}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                      Carnet:{chofer.carnet}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                      Vencimiento:{chofer.vencimientoCarnet}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Informacion</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
}
