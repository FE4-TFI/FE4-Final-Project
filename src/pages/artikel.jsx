import { useParams } from "react-router-dom";
import { useGetArtikelByIdQuery } from "../redux/reducer";
import '../css/main.css';

function Artikel (){
    const { id } = useParams()

    const {data, isLoading, isError, error} = useGetArtikelByIdQuery(id)

    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>{error.message}</h1>

    return(
        <div className="artikel-container">
            <div className="img-box">
                <img src={`/img_artikel/${data.img}`} alt="" className="artikel-img" />
            </div>
            <div className="artikel-content">
                <h1 className="artikel-heading">{data.title}</h1>
                <p className="artikel-paragraf">{data.paragraf1}</p>
                <p className="artikel-paragraf">{data.paragraf2}</p>
                <p className="artikel-paragraf">{data.paragraf3}</p>
                <p className="artikel-paragraf">{data.paragraf4}</p>
                <p className="artikel-paragraf">{data.paragraf5}</p>
            </div>
        </div>
    );
}
export default Artikel