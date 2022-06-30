import { Checkbox, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import BackspaceIcon from '@mui/icons-material/Backspace';

const Users = () => {
    return(
        <Container sx={{ boxShadow: "60px -16px teal" }} maxWidth={"1200px"}>
        <Grid container spacing={3} mt={5}>
          <Grid item md={12} alignItems="center">
          <center className="flex spacer">
            <Typography variant="h3">LISTA DE USUARIOS</Typography>
            <div className="flex">
                <h3>Agregar usuarios</h3>
                <PersonAddAltIcon />
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
                  <Typography variant="overline">Usuario</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="overline">Descripción</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="overline">Grupo</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="overline">Fecha</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="overline">UsuarioModifica</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="overline">Activo</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>MASTER</TableCell>
                <TableCell>Sandra Brios</TableCell>
                <TableCell>Area de ti</TableCell>
                <TableCell>24/05/2022</TableCell>
                <TableCell>PRAMOS</TableCell>
                <TableCell><Checkbox disabled/></TableCell>
			    <TableCell><BackspaceIcon /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>MASTER</TableCell>
                <TableCell>Sandra Brios</TableCell>
                <TableCell>Area de ti</TableCell>
                <TableCell>24/05/2022</TableCell>
                <TableCell>PRAMOS</TableCell>
                <TableCell><Checkbox checked/></TableCell>
			    <TableCell><BackspaceIcon /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>MASTER</TableCell>
                <TableCell>Sandra Brios</TableCell>
                <TableCell>Area de ti</TableCell>
                <TableCell>24/05/2022</TableCell>
                <TableCell>PRAMOS</TableCell>
                <TableCell><Checkbox defaultChecked/></TableCell>
			    <TableCell><BackspaceIcon /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>MASTER</TableCell>
                <TableCell>Sandra Brios</TableCell>
                <TableCell>Area de ti</TableCell>
                <TableCell>24/05/2022</TableCell>
                <TableCell>PRAMOS</TableCell>
                <TableCell><Checkbox defaultChecked/></TableCell>
			    <TableCell><BackspaceIcon /></TableCell>
              </TableRow>  
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
}

export default Users;