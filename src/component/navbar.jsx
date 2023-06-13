import { NavLink, Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import ListEdukasi from "../pages/ListEdukasi"
import Edukasi from "../pages/Edukasi"
import Lapor from "../pages/Lapor"
import Register from "../pages/Register"
import NotFound from "../pages/NotFound"
import logo from "../assets/Logo.png"
import Login from "../pages/Login"

function Navbar(){
    return(
        <>
        
        <div className="navbar">
            <nav>
                <div className="logo">
                    <img src={logo} alt="inilogo" />
                </div>
                <div className="brand">
                    <h1>Save Environment</h1>
                </div>
                <ul>
                    <li>
                    <NavLink className="linknav" to="/"> Home </NavLink>
                    </li>

                    <li>
                    <NavLink className="linknav" to="/Edukasi"> Edukasi </NavLink>
                    </li>

                    <li>
                    <NavLink className="linknav" to="/Lapor"> Lapor </NavLink>
                    </li>

                    <li>
                    <NavLink className="linknav" to="/Login"> Login </NavLink>
                    </li>
                </ul>
            </nav>
      </div>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Edukasi" element={<ListEdukasi />} />
        <Route path="/Lapor" element={<Lapor />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        <Route path="/Edukasi" element={<ListEdukasi />} />
        <Route path="/Edukasi/:title" element={<Edukasi/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

        </>
    );
}
export default Navbar