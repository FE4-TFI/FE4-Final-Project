import CardSlide from "../cardSlide/cardSlideView"
import './slideContainer.css'

const SlideContainerView = ({ artikels, prevSlide, nextSlide }) => (
    <div className="slide-container">
        <div className="artikels-container">
            {artikels.map((artikel) => (
                <div key={artikel.id} className="artikel-box">
                    <CardSlide {...artikel} />
                </div>
            ))}
        </div>
        <div className="button-box">
            <button className="btn-slide" onClick={prevSlide}>&lt;</button>
            <button className="btn-slide" onClick={nextSlide}>&gt;</button>
        </div>
    </div>
)

export default SlideContainerView