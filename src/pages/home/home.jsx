import HomeView from "./homeView"
import { useGetAllArtikelQuery, useGetArtikelByIdQuery } from "../../helper/apiSlice"
import Loading from "../../components/loadingbox/loading"

const Home = () => {
    const { data: artikel, isLoading: isLoadingArtikel, isError: isErrorArtikel, error: errorArtikel } = useGetArtikelByIdQuery(1)

    const { data: artikels, isLoading: isLoadingArtikels, isError: isErrorArtikels, error: errorArtikels } = useGetAllArtikelQuery()

    if (isLoadingArtikel) return <Loading msg={"Loading data artikel...."} />
    if (isErrorArtikel) return <h1>{errorArtikel.message || errorArtikels.message}</h1>

    return <HomeView artikel={artikel} artikels={artikels} isLoading={isLoadingArtikels} isError={isErrorArtikels} error={errorArtikels} />
}

export default Home