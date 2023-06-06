import Navbar from "../../components/navbar/navbar"

const HomeView = ({ artikel, isLoadingArtikel, isErrorArtikel, errorArtikel }) => (
    <>
    <Navbar />
    <section className="px-6 py-4 w-full text-black">
        <div className="block">
            {isLoadingArtikel ? (
                <div className="bg-blue-500 bg-opacity-30 px-4 py-2 rounded-md">
                    <h1 className="text-blue-500 font-medium text-lg">Loading data artikel...</h1>
                </div>
            ) : isErrorArtikel ? (
                <div className="bg-red-600 bg-opacity-30 px-4 py-2 rounded-md">
                    <h1 className="text-red-600 font-medium text-lg">Terjadi error saat load data artikel: {errorArtikel.message}</h1>
                </div>
            ) : (
                <div>
                    <h1>{artikel.title}</h1>
                </div>
            )}
            <div>

            </div>
        </div>
    </section>
    </>
)

export default HomeView