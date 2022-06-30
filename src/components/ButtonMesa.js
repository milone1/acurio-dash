import { Button, Dialog, DialogContent, Divider } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";



const ButtonMesa = ({ mesa1, mesa2 }) => {
    const [ open, setOpen ] = useState(false);

    const handleOpenDialog = () => {
        setOpen(!open);
        console.log(mesa1)
    }

    return(
        <>
        <Button onClick={handleOpenDialog}>
            Ver Mesas
        </Button>
        <Dialog open={open} onClose={handleOpenDialog} fullWidth maxWidth={"xl"}    >
            <DialogContent className="flex">
                <Container maxWidth="xl">
                    <div className="flex gap">
                    <Button variant="contained" className="button-t" color="success">T-01</Button>
                    <Button variant="outlined" className="button-t">T-02</Button>
                    <Button variant="outlined" className="button-t">T-03</Button>
                    <Button variant="contained" className="button-t" color="error">T-04</Button>
                    </div>
                    <div className="flex gap">
                    <Button variant="outlined" className="button-t">T-05</Button>
                    <Button variant="outlined" className="button-t" disabled>T-06</Button>
                    <Button variant="outlined" className="button-t" disabled>T-07</Button>
                    <Button variant="outlined" className="button-t" disabled>T-08</Button>
                    </div>
                    <div className="flex gap">
                    <Button variant="contained" className="button-t" color="error">T-09</Button>
                    <Button variant="contained" className="button-t" color="error">T-10</Button>
                    <Button variant="outlined" className="button-t">T-11</Button>
                    <Button variant="outlined" className="button-t">T-12</Button>
                    </div>
                </Container>
                <div className="padding">
                    <h2>LEYENDA</h2>
                    <Divider />
                    <div className="flex alinear">
                        <div className="color">
                        </div>
                        <h5>Ocupado</h5>
                    </div>
                    <Divider />
                    <div className="flex alinear">
                        <div className="color green">
                        </div>
                        <h5>En limpieza</h5>
                    </div>
                    <Divider />
                    <div className="flex alinear">
                        <div className="color blue">
                        </div>
                        <h5>Disponible</h5>
                    </div>
                </div>
                <div>
                    <h1>{mesa2.nombre}</h1>
                </div>
            </DialogContent>
        </Dialog>
        </>
    );
}

export default ButtonMesa;