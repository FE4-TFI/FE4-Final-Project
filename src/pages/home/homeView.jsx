import Navbar from "../../components/navbar/navbar"
import hero from '../../assets/img_artikel/hero.png'
import SlideContainer from "../../components/slideContainer/slideContainer"
import './home.css'

const HomeView = ({ artikel, artikels, isLoading, isError, error }) => (
    <>
    <Navbar />
    <section className="home-container">
        {/* Hero Section */}
        <div className="hero-box">
            <div className="hero-img">
                <img src={hero} alt="Hero Image" className="hero-img" />
            </div>
            <div className="hero-text">
                <h1 className="hero-title">{artikel.title}</h1>
                <p className="hero-paragraf">{artikel.paragraf1}</p>
                <button className="baca-btn">BACA</button>
            </div>
        </div>
        {/* Artikel Lainnya Section */}
        <div className="artikel-box">
            <h1 className="artikel-heading">Artikel Lainnya</h1>
            <p className="artikel-subheading">Artikel Terpopuler</p>
            <SlideContainer artikels={artikels} isLoading={isLoading} isError={isError} error={error} />
        </div>
    </section>
    </>
)

export default HomeView