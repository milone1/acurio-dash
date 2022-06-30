import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const All = () => {
    const imgTanta = "http://admin.tantaperu.com/wp-content/uploads/2019/09/tanta-fb.png";
    const manko = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm68LEoYLLvzUvT05ABXzrqI1QwU8N6HGWaw&usqp=CAU";
    const yakumanka = "https://yakumanka.com/wp-content/uploads/2017/08/YAKUMANKA_logo.png";
  return (
    <>
      <Container maxWidth="xl">
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
          <Grid item md={3} sm={6} xs={12}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={manko}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Manko
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
          <Grid item md={3} sm={6} xs={12}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia            
                component="img"
                height="140"
                image={yakumanka}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  yakumanka
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

export default All;