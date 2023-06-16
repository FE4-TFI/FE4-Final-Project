import { NavLink, Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import ListEdukasi from "../pages/ListEdukasi"
import Lapor from "../pages/Lapor"
import Register from "../pages/Register"
import NotFound from "../pages/NotFound"
import logo from "../assets/Logo.png"
import Login from "../pages/Login"
import Reuse from "../pages/Reuse"
import Reduce from "../pages/Reduce"
import Recycle from "../pages/Recycle"
import Menumpuk from "../pages/Menumpuk"
import Membantu from "../pages/Membantu"
import GotongRoyong from "../pages/GotongRoyong"
import Stop from "../pages/Stop"
import Perusakan from "../pages/Perusakan"
import Efektif from "../pages/Efektif"
import Selengkapnya from "../pages/Selengkapnya"

function Navbar(){

    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');


            const handlemenu = (e) => {
                e.preventDefault();
                menu.classList.toggle('bx-x');
                navbar.classList.toggle('active');

            }

            // menu.onclick = () => {
            //     menu.classList.toggle('bx-x');
            //     navbar.classList.toggle('active');}
    return(
        <>
        
        <div className="navbar">

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container">
                        <a href="/Home" className="logo">
                            <img src={logo} alt="logo" />
                            <h1>Save Environment</h1>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav " style={{ 'backgroundColor': 'white', 'marginLeft': 'auto' }}>


                                <li className="nav-item">
                                    <NavLink className="linknav " to="/Home"> Home </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className=" linknav" to="/Edukasi"> Edukasi </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="linknav " to="/Lapor"> Lapor </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="linknav " to="/Login"> Login </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
            </nav>





            {/* <nav>
                <div className="bx bx-menu" id="menu-icon"></div>
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
            </nav> */}
      </div>

        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Edukasi" element={<ListEdukasi />} />
        <Route path="/Lapor" element={<Lapor />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Reuse" element={<Reuse />}/>
        <Route path="/Reduce" element={<Reduce />}/>
        <Route path="/Recycle" element={<Recycle />} />
        <Route path="/Menumpuk" element={<Menumpuk />} />
        <Route path="/Membantu" element={<Membantu />} />
        <Route path="/GotongRoyong" element={<GotongRoyong />} />
        <Route path="/Stop" element={<Stop />} />
        <Route path="/Perusakan" element={<Perusakan />} />
        <Route path="/Efektif" element={<Efektif />} />
        <Route path="/Selengkapnya" element={<Selengkapnya />} />
        {/* <Route path="/Edukasi" element={<ListEdukasi />} />
        <Route path="/Edukasi/:title" element={<Edukasi/>} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>

        </>
    );
}
export default Navbar