import BgVideo from '../assets/recycle.mp4'
import imgCard1 from '../assets/card1.jpg'
import imgCard2 from '../assets/card2.jpg'
import imgCard3 from '../assets/card3.jpg'
import imgSecondCard1 from '../assets/recycle.png'
import imgSecondCard2 from '../assets/reuse.png'
import imgSecondCard3 from '../assets/reduce.png'


function Home() {
    return (
        <>
            <div className="allhome">
                <div className="firstbanner">
                    <video src={BgVideo} autoPlay muted loop className="video-bg" />
                    <div className="bg-overlay"></div>
                    <h1>Keep the sea plastic free</h1>
                </div>
                <div className="cardhome">
                    <div className="card1">
                        <div className="image-card">
                            <img className="first-image" src={imgCard2} alt="" />
                        </div>
                        <div className="img-bio">
                            <p> Biodiversity is <br /> <br /> the spice of nature </p>
                            <img className="second-image" src={imgSecondCard1} alt="" />
                        </div>

                    </div>

                    <div className="card2">
                        <div className="image-card">
                            <img className="first-image" src={imgCard1} alt="" />
                        </div>
                        <div className="img-bio">
                            <p> World Environment Day <br /> <br /> reminds us to work for <br /> <br /> the safety of nature </p>
                            <img className="second-image" src={imgSecondCard2} alt="" />
                        </div>
                    </div>

                    <div className="card3">
                        <div className="image-card">
                            <img className="first-image" src={imgCard3} alt="" />
                        </div>
                        <div className="img-bio">
                            <p> Celebrate Biodiversity <br /> <br /> on June 5th & Everyday</p>
                            <img className="second-image" src={imgSecondCard3} alt="" />
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Home