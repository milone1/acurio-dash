import iguana from "../../assets/iguana.jpg";
import { Container, Grid, Button, Card, CardContent, CardMedia, Typography, CardActions } from "@mui/material";

const CardArequipa = () => {
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
                image={iguana}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CardArequipa;