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
	Typography
  } from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';

import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';


const Plates = () => {
	const imgCard = "https://www.trendtic.cl/wp-content/uploads/2018/05/003-Rub%C3%A9n-Belluomo-INFOR-2018.jpg";
	return (
		<Container sx={{ boxShadow: "60px -16px teal"}} maxWidth={'1200px'}>
      <Grid container spacing={3} mt={5} >
        <Grid item md={12} alignItems='center'>
          <center>
            <Typography variant="h3">LISTA DE CONSUMIDORES</Typography>
          </center>
        </Grid>
        <Grid item md={6} sx={{ textAlign: "right" }}>

        </Grid>
      </Grid>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="overline">
                  Nombre
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline">
                  EDAD
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline">
                  Consumiendo
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline" >
                  Foto
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline" > 
                  % de descuento
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline">
                  acciones
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                <TableRow>
                  <TableCell>Pepe Perez</TableCell>
                  <TableCell>24</TableCell>
                  <TableCell>frecuente</TableCell>
                  <TableCell>
                    <img  className="img-dash" alt="/" src="https://img.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg?w=2000" />
                  </TableCell>
                  <TableCell> 24 % </TableCell>
                  <TableCell>
                    <Button className="button-prof"><ModeEditOutlineRoundedIcon /></Button>
                    <Button className="button-prof" variant="outlined" color="error"><HighlightOffRoundedIcon /></Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Juan Martinez</TableCell>
                  <TableCell>32</TableCell>
                  <TableCell>regular</TableCell>
                  <TableCell>
                    <img className="img-dash" alt="/" src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000" />
                  </TableCell>
                  <TableCell> 10 % </TableCell>
                  <TableCell>
                    <Button className="button-prof"><ModeEditOutlineRoundedIcon /></Button>
                    <Button className="button-prof" variant="outlined" color="error"><HighlightOffRoundedIcon /></Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ivana Zione </TableCell>
                  <TableCell>19</TableCell>
                  <TableCell>habitual</TableCell>
                  <TableCell>
                    <img className="img-dash" alt="/" src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=2000" />
                  </TableCell>
                  <TableCell> 80 % </TableCell>
                  <TableCell>
                    <Button className="button-prof"><ModeEditOutlineRoundedIcon /></Button>
                    <Button className="button-prof" variant="outlined" color="error"><HighlightOffRoundedIcon /></Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ana Marin</TableCell>
                  <TableCell>19</TableCell>
                  <TableCell>regular</TableCell>
                  <TableCell  >
                    <img className="img-dash" alt="/" src="https://cdnb.20m.es/sites/112/2019/04/cara6.jpg" />
                  </TableCell>
                  <TableCell>80%</TableCell>
                  <TableCell>
                    <Button className="button-prof"><ModeEditOutlineRoundedIcon /></Button>
                    <Button className="button-prof" variant="outlined" color="error"><HighlightOffRoundedIcon /></Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Silvia Rodriguez</TableCell>
                  <TableCell>45</TableCell>
                  <TableCell>frecuente</TableCell>
                  <TableCell>
                    <img className="img-dash" alt="/" src="https://www.ashoka.org/sites/default/files/styles/medium_1600x1000/public/thumbnails/images/daniela-kreimer.jpg?itok=R89tVtb4" />
                  </TableCell>
                  <TableCell> 50 % </TableCell>
                  <TableCell>
                    <Button className="button-prof"><ModeEditOutlineRoundedIcon /></Button>
                    <Button variant="outlined" color="error" className="button-prof"><HighlightOffRoundedIcon /></Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Silvia Rodriguez</TableCell>
                  <TableCell>45</TableCell>
                  <TableCell>frecuente</TableCell>
                  <TableCell>
                    <img className="img-dash" alt="/" src="https://www.ashoka.org/sites/default/files/styles/medium_1600x1000/public/thumbnails/images/daniela-kreimer.jpg?itok=R89tVtb4" />
                  </TableCell>
                  <TableCell> 50 % </TableCell>
                  <TableCell>
                    <Button className="button-prof"><ModeEditOutlineRoundedIcon /></Button>
                    <Button variant="outlined" color="error" className="button-prof"><HighlightOffRoundedIcon /></Button>
                  </TableCell>
                </TableRow><TableRow>
                  <TableCell>Silvia Rodriguez</TableCell>
                  <TableCell>45</TableCell>
                  <TableCell>frecuente</TableCell>
                  <TableCell>
                    <img className="img-dash" alt="/" src="https://www.ashoka.org/sites/default/files/styles/medium_1600x1000/public/thumbnails/images/daniela-kreimer.jpg?itok=R89tVtb4" />
                  </TableCell>
                  <TableCell> 50 % </TableCell>
                  <TableCell>
                    <Button className="button-prof"><ModeEditOutlineRoundedIcon /></Button>
                    <Button variant="outlined" color="error" className="button-prof"><HighlightOffRoundedIcon /></Button>
                  </TableCell>
                </TableRow><TableRow>
                  <TableCell>Silvia Rodriguez</TableCell>
                  <TableCell>45</TableCell>
                  <TableCell>frecuente</TableCell>
                  <TableCell>
                    <img className="img-dash" alt="/" src="https://www.ashoka.org/sites/default/files/styles/medium_1600x1000/public/thumbnails/images/daniela-kreimer.jpg?itok=R89tVtb4" />
                  </TableCell>
                  <TableCell> 50 % </TableCell>
                  <TableCell>
                    <Button className="button-prof"><ModeEditOutlineRoundedIcon /></Button>
                    <Button variant="outlined" color="error" className="button-prof"><HighlightOffRoundedIcon /></Button>
                  </TableCell>
                </TableRow><TableRow>
                  <TableCell>Silvia Rodriguez</TableCell>
                  <TableCell>45</TableCell>
                  <TableCell>frecuente</TableCell>
                  <TableCell>
                    <img className="img-dash" alt="/" src="https://www.ashoka.org/sites/default/files/styles/medium_1600x1000/public/thumbnails/images/daniela-kreimer.jpg?itok=R89tVtb4" />
                  </TableCell>
                  <TableCell> 50 % </TableCell>
                  <TableCell>
                    <Button className="button-prof"><ModeEditOutlineRoundedIcon /></Button>
                    <Button variant="outlined" color="error" className="button-prof"><HighlightOffRoundedIcon /></Button>
                  </TableCell>
                </TableRow><TableRow>
                  <TableCell>Silvia Rodriguez</TableCell>
                  <TableCell>45</TableCell>
                  <TableCell>frecuente</TableCell>
                  <TableCell>
                    <img className="img-dash" alt="/" src="https://www.ashoka.org/sites/default/files/styles/medium_1600x1000/public/thumbnails/images/daniela-kreimer.jpg?itok=R89tVtb4" />
                  </TableCell>
                  <TableCell> 50 % </TableCell>
                  <TableCell>
                    <Button className="button-prof"><ModeEditOutlineRoundedIcon /></Button>
                    <Button variant="outlined" color="error" className="button-prof"><HighlightOffRoundedIcon /></Button>
                  </TableCell>
                </TableRow><TableRow>
                  <TableCell>Silvia Rodriguez</TableCell>
                  <TableCell>45</TableCell>
                  <TableCell>frecuente</TableCell>
                  <TableCell>
                    <img className="img-dash" alt="/" src="https://www.ashoka.org/sites/default/files/styles/medium_1600x1000/public/thumbnails/images/daniela-kreimer.jpg?itok=R89tVtb4" />
                  </TableCell>
                  <TableCell> 50 % </TableCell>
                  <TableCell>
                    <Button className="button-prof"><ModeEditOutlineRoundedIcon /></Button>
                    <Button variant="outlined" color="error" className="button-prof"><HighlightOffRoundedIcon /></Button>
                  </TableCell>
                </TableRow><TableRow>
                  <TableCell>Silvia Rodriguez</TableCell>
                  <TableCell>45</TableCell>
                  <TableCell>frecuente</TableCell>
                  <TableCell>
                    <img className="img-dash" alt="/" src="https://www.ashoka.org/sites/default/files/styles/medium_1600x1000/public/thumbnails/images/daniela-kreimer.jpg?itok=R89tVtb4" />
                  </TableCell>
                  <TableCell> 50 % </TableCell>
                  <TableCell>
                    <Button className="button-prof"><ModeEditOutlineRoundedIcon /></Button>
                    <Button variant="outlined" color="error" className="button-prof"><HighlightOffRoundedIcon /></Button>
                  </TableCell>
                </TableRow><TableRow>
                  <TableCell>Silvia Rodriguez</TableCell>
                  <TableCell>45</TableCell>
                  <TableCell>frecuente</TableCell>
                  <TableCell>
                    <img className="img-dash" alt="/" src="https://www.ashoka.org/sites/default/files/styles/medium_1600x1000/public/thumbnails/images/daniela-kreimer.jpg?itok=R89tVtb4" />
                  </TableCell>
                  <TableCell> 50 % </TableCell>
                  <TableCell>
                    <Button className="button-prof"><ModeEditOutlineRoundedIcon /></Button>
                    <Button variant="outlined" color="error" className="button-prof"><HighlightOffRoundedIcon /></Button>
                  </TableCell>
                </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
	);
}

export default Plates;