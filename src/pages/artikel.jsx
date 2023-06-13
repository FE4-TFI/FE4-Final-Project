import { useParams } from "react-router-dom";
import { useGetArtikelByIdQuery } from "../redux/reducer";

function Artikel (){
    const { id } = useParams()

    const {data, isLoading, isError, error} = useGetArtikelByIdQuery(id)

    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>{error.message}</h1>

    return(
        <div className="artikel-container">
            <img src="" alt="" />
        </div>
    );
}
export default Artikel