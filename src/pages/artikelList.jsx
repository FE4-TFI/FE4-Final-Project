import { Link } from "react-router-dom";
import '../css/main.css';
import hero from '../assets/img_artikel/hero.png';
import { useGetAllArtikelQuery, useGetArtikelByIdQuery } from "../redux/reducer";

function ArtikelList () {
    // Mengambil data artikel by id dengan RTK Query
    const { data: artikel, isLoading: loadingArtikel, isError: errorArtikel, error: errorArt } = useGetArtikelByIdQuery(1);

    // Mengambil semua data artikel
    const { data:artikels, isLoading: loadingArtikels, isError: errorArtikels, error: errorArts } = useGetAllArtikelQuery();

    if (errorArtikel || errorArtikels) return <h1>{errorArt.message || errorArts.message}</h1>
    return (
        <div className="list-container">
            <div className="list-hero">
                <div>
                    <h1 className="list-title">{loadingArtikel ? <h1>Loading...</h1> : artikel.title}</h1>
                    <p className="list-text">{loadingArtikel ? <h1>Loading...</h1> : artikel.paragraf1}</p>
                    <button className="btn-primary">Baca</button>
                </div>
                <div>
                    <img src={hero} alt="...." className="list-img" />
                </div>
            </div>
            <div className="list-lainnya">
                <h1 className="list-heading">Artikel Lainnya</h1>
                <p className="list-subheading">Artikel Terpopuler</p>
                <div className="lainnya-box">
                    {loadingArtikels ? <h1>Loading....</h1> : artikels.map((artikel) => (
                        <div className="card" key={artikel.id}>
                            <img src={`/img_artikel/${artikel.img}`} alt="" className="card-img" />
                            <div className="card-body">
                                <p className="artikel-title">{artikel.title}</p>
                                <Link to={`/artikel/${artikel.id}`}><button className="btn-primary">Baca</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArtikelList