import { Link } from "react-router-dom";

function artikelList(){
    return(
        <>
            <h1>My Artikel</h1>
            <Link to="/artikel/reuse">Reuse</Link>
            <Link to="/artikel/reduce">Reduce</Link>
            <Link to="/artikel/recycle">Recycle</Link>
        </>
    );
}
export default artikelList