import {
    Button,
    Card,
    CardContent,
    CardMedia,
  Checkbox,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

//* import icons.
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import DeleteIcon from '@mui/icons-material/Delete';

//* import component Modal
import ButtonMesa from "../../components/ButtonMesa";

const Tables = () => {
    const mesa1 = {
        id: 1,
        nombre: "terraza",
        ocupante: "principal",
        color: "red",
    }
    const mesa2 = {
        id: 2,
        nombre: "salon",
        ocupante: "principal",
        color: "red",
    }
    const mesa3 = {
        id:3,
        ocupante: "principal",
        color: "red",
    }

  return (
    <Container sx={{ boxShadow: "60px -16px teal" }} maxWidth={"1200px"}>
      <Grid container spacing={3} mt={5}>
        <Grid item md={12} alignItems="center">
          <center className="flex spacer">
            <Typography variant="h3">LISTA DE MESAS</Typography>
            <div className="flex">
                <h3>Agregar mesa</h3>
                <TableRestaurantIcon />
            </div>
          </center>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4} lg={4} sm={12} xs={12}>
            <Card sx={{ width: 300 }}>
              <CardMedia component='img' width={250} height={250} image="https://image.shutterstock.com/image-illustration/3d-render-urban-terrace-natural-260nw-1912368484.jpg"/>
              <CardContent>
                <h3>Terraza-01</h3>
                <div className="flex">
                    <ButtonMesa mesa1={mesa1} />
                    <Button variant='error'>
                        <DeleteIcon />
                    </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} lg={4} sm={12} xs={12}>
            <Card sx={{ width: 300 }}>
              <CardMedia component='img' width={250} height={250} image="https://media-cdn.tripadvisor.com/media/photo-s/18/90/bc/b1/restaurante-en-guadarrama.jpg"/>
              <CardContent>
                <h3>Salon</h3>
                <div className="flex">
                    <ButtonMesa mesa2={mesa2} />
                    <Button variant='error'>
                        <DeleteIcon />
                    </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} lg={4} sm={12} xs={12}>
            <Card sx={{ width: 300 }}>
              <CardMedia component='img' width={250} height={250} image="https://www.hola.com/imagenes/decoracion/20210617190842/decoracion-terrazas-estilo-encanto-am/0-960-293/terraza-instagram-6m-m.jpg"/>
              <CardContent>
                <h3>Terraza-02</h3>
                <div className="flex">
                    <Button>Ver mesas</Button>
                    <Button variant='error'>
                        <DeleteIcon />
                    </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} lg={4} sm={12} xs={12}>
            <Card sx={{ width: 300 }}>
              <CardMedia component='img' width={250} height={250} image="https://www.hola.com/imagenes/decoracion/20210617190842/decoracion-terrazas-estilo-encanto-am/0-960-293/terraza-instagram-6m-m.jpg"/>
              <CardContent>
                <h3>Terraza-02</h3>
                <div className="flex">
                    <Button>Ver mesas</Button>
                    <Button variant='error'>
                        <DeleteIcon />
                    </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} lg={4} sm={12} xs={12}>
            <Card sx={{ width: 300 }}>
              <CardMedia component='img' width={250} height={250} image="https://www.hola.com/imagenes/decoracion/20210617190842/decoracion-terrazas-estilo-encanto-am/0-960-293/terraza-instagram-6m-m.jpg"/>
              <CardContent>
                <h3>Terraza-02</h3>
                <div className="flex">
                    <Button>Ver mesas</Button>
                    <Button variant='error'>
                        <DeleteIcon />
                    </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tables;
