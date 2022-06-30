import { Link } from "react-router-dom";

//*  import icons 
import PeopleIcon from '@mui/icons-material/People';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import TableBarIcon from '@mui/icons-material/TableBar';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const SideBar = () => {
    return(
        <div className="sideBar">
            <ul>
                <li className="container-links">
                    <FastfoodIcon />
                    <Link to="dashboard" underline="none">Platos</Link>
                </li>
                <li className="container-links">
                    <PeopleIcon />
                    <Link to="/dashboard/clientes" underline="none">Clientes</Link>
                </li>
                <li className="container-links">
                    <TableBarIcon />
                    <Link to="/dashboard/mesas" underline="none">Mesas</Link>
                </li>
                <li className="container-links">
                    <GroupAddIcon />
                    <Link to="/dashboard/usuarios" underline="none">Usuarios</Link>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;