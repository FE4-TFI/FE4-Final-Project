import {Link} from "react-router-dom"
function navbar(){
    return(
        <div className="navbar">
            <h1> halo</h1>
            <nav>
                <ul>
                <li>
                    <Link to="/Home"> Home </Link>
                </li>

                <li>
                    <Link to="/Edukasi"> Edukasi </Link>
                </li>

                <li>
                    <Link to="/Lapor"> Lapor </Link>
                </li>
                </ul>
            </nav>
        </div>
    )
}

export default navbar