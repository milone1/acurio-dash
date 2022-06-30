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

//* import icons
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import BackspaceIcon from '@mui/icons-material/Backspace';

import BadgeIcon from '@mui/icons-material/Badge';

const Clients = () => {
  return (
    <Container sx={{ boxShadow: "60px -16px teal" }} maxWidth={"1200px"}>
      <Grid container spacing={3} mt={5}>
        <Grid item md={12} alignItems="center">
          <center className="flex spacer">
            <Typography variant="h3">LISTA DE CLIENTES</Typography>
            <div className="flex">
                <h3>Agregar clientes</h3>
                <BadgeIcon />
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
                <Typography variant="overline">Tipo</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline">Cliente</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline">Teléfono</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline">Dirección</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline">Linea</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline">Descuento</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline">Estado</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline">Estatus</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Sin tipo</TableCell>
              <TableCell>Carla Tang</TableCell>
              <TableCell>+51 985475445</TableCell>
              <TableCell>Calle Pedro Salazar #210</TableCell>
              <TableCell>500.00</TableCell>
              <TableCell>0</TableCell>
              <TableCell>Sin estado</TableCell>
              <TableCell><Checkbox disabled/></TableCell>
			        <TableCell><BackspaceIcon /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sin tipo</TableCell>
              <TableCell>Carla Tang</TableCell>
              <TableCell>+51 985475445</TableCell>
              <TableCell>Calle Pedro Salazar #210</TableCell>
              <TableCell>500.00</TableCell>
              <TableCell>0</TableCell>
              <TableCell>Sin estado</TableCell>
              <TableCell><Checkbox defaultChecked/></TableCell>
			        <TableCell><BackspaceIcon /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sin tipo</TableCell>
              <TableCell>Carla Tang</TableCell>
              <TableCell>+51 985475445</TableCell>
              <TableCell>Calle Pedro Salazar #210</TableCell>
              <TableCell>500.00</TableCell>
              <TableCell>0</TableCell>
              <TableCell>Sin estado</TableCell>
              <TableCell><Checkbox disabled/></TableCell>
			        <TableCell><BackspaceIcon /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sin tipo</TableCell>
              <TableCell>Carla Tang</TableCell>
              <TableCell>+51 985475445</TableCell>
              <TableCell>Calle Pedro Salazar #210</TableCell>
              <TableCell>500.00</TableCell>
              <TableCell>0</TableCell>
              <TableCell>Sin estado</TableCell>
              <TableCell><Checkbox /></TableCell>
			        <TableCell><BackspaceIcon /></TableCell>
            </TableRow>  
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Clients;
