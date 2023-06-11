import { Link, Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import Edukasi from "../pages/Edukasi"
import Lapor from "../pages/Lapor"
import Register from "../pages/Register"
import NotFound from "../pages/NotFound"
import logo from "../assets/Logo.png"
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
                    <Link className="linknav" to="/"> Home </Link>
                    </li>

                    <li>
                    <Link className="linknav" to="/Edukasi"> Edukasi </Link>
                    </li>

                    <li>
                    <Link className="linknav" to="/Lapor"> Lapor </Link>
                    </li>

                    <li>
                    <Link className="linknav" to="/Register"> Register </Link>
                    </li>
                </ul>
            </nav>
      </div>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Edukasi" element={<Edukasi />} />
        <Route path="/Lapor" element={<Lapor />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/artikel/:id" element={<artikel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

        </>
    );
}
export default Navbar