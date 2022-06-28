import { Link } from "react-router-dom";

const SideBar = () => {
    return(
        <div className="sideBar">
            <ul>
                <li>
                    <Link to="dashboard">Perfil</Link>
                </li>
                <li>
                    <Link to="/dashboard/ventas">Ventas</Link>
                </li>
                <li>
                    <Link to="/dashboard/clientes">Clientes</Link>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;