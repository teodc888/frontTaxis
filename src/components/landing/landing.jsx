import React from "react";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import {Link} from "react-router-dom";
export default function Landing() {
  return (
    <div>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{marginTop:"10%"}}
      >
        <Link to="/home">
          <Button variant="contained" sx={{bgcolor:"black", color:"white"}}> Bienvenidos </Button>
        </Link>
      </Stack>
    </div>
  );
}
