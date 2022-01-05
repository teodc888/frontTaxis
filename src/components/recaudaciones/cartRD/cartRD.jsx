import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CartRD(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#fdd835" }} aria-label="recipe">
            T
          </Avatar>
        }
        title={props.nombre}
        title={props.apellido}
        subheader={props.dia}
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          Neto: ${props.neto}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          35%: ${props.montoChofer}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          GNC: ${props.gnc}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Kilometros recorridos: {props.kilometros}km
        </Typography>
        <Typography variant="body1">TOTAL: ${props.total}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Chofer:</Typography>
          <Typography paragraph>
            {props.nombre} {props.apellido}
          </Typography>
          <Typography paragraph>Documento:</Typography>
          <Typography paragraph>{props.documento}</Typography>
          <Typography paragraph>Telefono:</Typography>
          <Typography paragraph>{props.telefono}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
