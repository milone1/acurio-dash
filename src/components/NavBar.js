import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Box } from "@mui/system";

const NavBar = () => {
    const imgLogo = "https://acuriorestaurantes.net/favicon.ico";
    return(
        <div className="navBar active">
            <img src={imgLogo} alt="" width={100} height={30}/>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="Ingrese su busqueda" variant="standard" />
            </Box>
        </div>
    );
}

export default NavBar;