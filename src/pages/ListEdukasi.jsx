import { Link } from "react-router-dom"


function Edukasi(){
    return(
        <>
            <div className="container-edukasi">
                <h1>Ini page edukasi</h1>
                <Link to="/Edukasi/reuse">Reuse</Link>
                <Link to="/Edukasi/reduce">Reduce</Link>
                <Link to="/Edukasi/recycle">Recycle</Link>
            </div>
            
        </>
    )
}

export default Edukasi