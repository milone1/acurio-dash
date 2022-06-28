import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";

const Clients = () => {

  return (
    <Container>
      <Grid container spacing={3} mt={5}>
        <Grid item md={6}>
          <h4>Lista de Consumidores</h4>
        </Grid>
        <Grid item md={6} sx={{ textAlign: "right" }}>

        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>edad</TableCell>
              <TableCell>Consumidor</TableCell>
              <TableCell>photo</TableCell>
              <TableCell>descuento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                <TableRow>
                  <TableCell>Pepe Perez</TableCell>
                  <TableCell>24</TableCell>
                  <TableCell>frecuente</TableCell>
                  <TableCell className="img">
                    <img  alt="/" src="https://img.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg?w=2000" />
                  </TableCell>
                  <TableCell> 24 % </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Juan Martinez</TableCell>
                  <TableCell>32</TableCell>
                  <TableCell>regular</TableCell>
                  <TableCell className="img">
                    <img  alt="/" src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000" />
                  </TableCell>
                  <TableCell> 10 % </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ivana Zione </TableCell>
                  <TableCell>19</TableCell>
                  <TableCell>habitual</TableCell>
                  <TableCell className="img">
                    <img  alt="/" src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=2000" />
                  </TableCell>
                  <TableCell> 80 % </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ana Marin</TableCell>
                  <TableCell>19</TableCell>
                  <TableCell>regular</TableCell>
                  <TableCell className="img">
                    <img  alt="/" src="https://cdnb.20m.es/sites/112/2019/04/cara6.jpg" />
                  </TableCell>
                  <TableCell>80%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Silvia Rodriguez</TableCell>
                  <TableCell>45</TableCell>
                  <TableCell>frecuente</TableCell>
                  <TableCell className="img">
                    <img  alt="/" src="https://www.ashoka.org/sites/default/files/styles/medium_1600x1000/public/thumbnails/images/daniela-kreimer.jpg?itok=R89tVtb4" />
                  </TableCell>
                  <TableCell> 50 % </TableCell>
                </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Clients;