import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  Button,
  Typography,
  Checkbox,
} from "@mui/material";
import React from "react";

import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

import MenuBookIcon from '@mui/icons-material/MenuBook';
import BackspaceIcon from '@mui/icons-material/Backspace';

const Plates = () => {
	
  return (
    <Container sx={{ boxShadow: "60px -16px teal" }} maxWidth={"1200px"}>
      <Grid container spacing={3} mt={5}>
        <Grid item md={12} alignItems="center">
		<center className="flex spacer">
            <Typography variant="h3">LISTA DE PLATOS</Typography>
            <div className="flex">
                <h3>Agregar platos</h3>
                <MenuBookIcon />
            </div>
          </center>
        </Grid>
        <Grid item md={6} sx={{ textAlign: "right" }}></Grid>
      </Grid>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="overline">Grupo</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline">Sub-grupo</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline">Tipo de producto</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline">Descripcion</Typography>
              </TableCell>
			  <TableCell>
                <Typography variant="overline">CAN1 Precio</Typography>
              </TableCell>
			  <TableCell>
                <Typography variant="overline">CAN1 Neto</Typography>
              </TableCell>
			  <TableCell>
                <Typography variant="overline">CAN1 Costo</Typography>
              </TableCell>
			  <TableCell>
                <Typography variant="overline">CAN1 FC</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline">Fecha</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline">Estado</Typography>
              </TableCell>
			  <TableCell>
                <Typography variant="overline">CAN2 Precio</Typography>
              </TableCell>
			  <TableCell>
                <Typography variant="overline">CAN2 Precio</Typography>
              </TableCell>	
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Bebidas</TableCell>
              <TableCell>Bebidas Calientes</TableCell>
              <TableCell>Restaurante</TableCell>
              <TableCell>7.00</TableCell>
              <TableCell>6.48</TableCell>
              <TableCell>0.72</TableCell>
              <TableCell>3.47</TableCell>
              <TableCell>12/04/2022</TableCell>
              <TableCell><Checkbox disabled /></TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
			  <TableCell><BackspaceIcon /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bebidas</TableCell>
              <TableCell>Bebidas Calientes</TableCell>
              <TableCell>Restaurante</TableCell>
              <TableCell>7.00</TableCell>
              <TableCell>6.48</TableCell>
              <TableCell>0.72</TableCell>
              <TableCell>3.47</TableCell>
              <TableCell>12/04/2022</TableCell>
              <TableCell><Checkbox disabled checked /></TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
			  <TableCell><BackspaceIcon /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bebidas</TableCell>
              <TableCell>Bebidas Calientes</TableCell>
              <TableCell>Restaurante</TableCell>
              <TableCell>7.00</TableCell>
              <TableCell>6.48</TableCell>
              <TableCell>0.72</TableCell>
              <TableCell>3.47</TableCell>
              <TableCell>12/04/2022</TableCell>
              <TableCell><Checkbox defaultChecked/></TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
              <TableCell>0</TableCell>
			  <TableCell><BackspaceIcon /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Plates;
