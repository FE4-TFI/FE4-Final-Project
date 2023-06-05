import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Edukasi from "./pages/Edukasi"
import Lapor from "./pages/Lapor"
import NotFound from "./pages/NotFound"
import logo from "./assets/Logo.png"
import Login from "./Login"


function App() {
  return (
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
              <Link className="linknav" to="/Home"> Home </Link>
            </li>

            <li>
              <Link className="linknav" to="/Edukasi"> Edukasi </Link>
            </li>

            <li>
              <Link className="linknav" to="/Lapor"> Lapor </Link>
            </li>
            <li>
              <Link className="linknav" to="/LoginForm">Login</Link>
            </li>
          </ul>
        </nav>
      </div>


      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route path="/Edukasi" element={<Edukasi />} />
        <Route path="/Lapor" element={<Lapor />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>


    </>
  )
}

export default App
