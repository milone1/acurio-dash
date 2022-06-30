import iguana from "../../assets/iguana.jpg";
import { Container, Grid, Button, Card, CardContent, CardMedia, Typography, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const CardArequipa = () => {
  const imgTanta = "http://admin.tantaperu.com/wp-content/uploads/2019/09/tanta-fb.png";
  return (
    <>
      <Container maxWidth="xl">
        <h2>Contenido de Arequipa</h2>
        <Grid container spacing={3} mt={5}>
          <Grid item md={3} sm={6} xs={12}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={imgTanta}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tanta
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"><Link to="/dashboard">Editar</Link></Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CardArequipa;