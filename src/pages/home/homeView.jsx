import Navbar from "../../components/navbar/navbar"
import hero from '../../assets/img_artikel/hero.png'
import SlideContainer from "../../components/slideContainer/slideContainer"

const HomeView = ({ artikel, artikels, isLoading, isError, error }) => (
    <>
    <Navbar />
    <section className="px-6 py-4 w-full text-black lg:px-24 lg:py-14">
        {/* Hero Section */}
        <div className="block lg:flex lg:flex-row-reverse lg:items-center lg:justify-between">
            <div className="my-6 md:my-8">
                <img src={hero} alt="Hero Image" className="w-40 mx-auto md:w-48 lg:w-[18rem]" />
            </div>
            <div className="my-6 md:my-8 lg:w-[50%]">
                <h1 className="font-semibold text-xl md:text-3xl">{artikel.title}</h1>
                <p className="font-normal text-lg mt-2 text-justify lg:mt-4">{artikel.paragraf1}</p>
                <button className="bg-gray-500 px-4 py-2 rounded-md text-white mt-4 hover:bg-gray-600 cursor-pointer">BACA</button>
            </div>
        </div>
        {/* Artikel Lainnya Section */}
        <div className="my-12">
            <h1 className="font-bold text-blue-700 text-2xl">Artikel Lainnya</h1>
            <p className="font-normal text-lg">Artikel Terpopuler</p>
            <SlideContainer artikels={artikels} isLoading={isLoading} isError={isError} error={error} />
        </div>
    </section>
    </>
)

export default HomeView