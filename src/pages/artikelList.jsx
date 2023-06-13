import { Link } from "react-router-dom";
import '../css/main.css';
import hero from '../assets/img_artikel/hero.png';
import { useGetArtikelByIdQuery } from "../redux/reducer";

function ArtikelList () {
    // Mengambil data artikel by id dengan RTK Query
    const { data: artikel, isLoading: loadingArtikel, isError: errorArtikel, error: errorArt } = useGetArtikelByIdQuery(1);

    if (errorArtikel) return <h1>{errorArt.message}</h1>
    return (
        <div className="list-container">
            <div className="list-box">
                <div>
                    <h1 className="list-title">{loadingArtikel ? <h1>Loading...</h1> : artikel.title}</h1>
                    <p className="list-text">{loadingArtikel ? <h1>Loading...</h1> : artikel.paragraf1}</p>
                    <button className="btn-primary">Baca</button>
                </div>
                <div>
                    <img src={hero} alt="...." />
                </div>
            </div>
        </div>
    )
}

export default ArtikelList