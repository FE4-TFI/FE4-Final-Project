import CardSlide from "../cardSlide/cardSlideView"

const SlideContainerView = ({ artikels, activeIndex, prevSlide, nextSlide }) => (
    <div className="relative">
        <div className="flex flex-wrap">
            {artikels.map((artikel, index) => (
                <div key={artikel.id} className={`transition-all duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4 ${index === activeIndex ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    <CardSlide {...artikel} />
                </div>
            ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-center mt-4">
            <button className="text-gray-500 hover:text-gray-800 mr-4" onClick={prevSlide}>Prev</button>
            <button className="text-gray-500 hover:text-gray-800" onClick={nextSlide}>Next</button>
        </div>
    </div>
)

export default SlideContainerView