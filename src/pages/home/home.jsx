import HomeView from "./homeView"
import { useGetAllArtikelQuery, useGetArtikelByIdQuery } from "../../helper/apiSlice"
import Loading from "../../components/loadingbox/loading"

const Home = () => {
    const { data: artikel, isLoading: isLoadingArtikel, isError: isErrorArtikel, error: errorArtikel } = useGetArtikelByIdQuery(1)

    if (isLoadingArtikel) return <Loading msg={"Loading data artikel...."} />
    if (isErrorArtikel) return <h1>{errorArtikel.message}</h1>

    return <HomeView artikel={artikel} isLoading={isLoadingArtikel} isError={isErrorArtikel} error={errorArtikel} />
}

export default Home