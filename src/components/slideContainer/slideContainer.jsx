import { useState } from "react"
import SlideContainerView from "./slideContainerView"

const SlideContainer = ({ artikels, isLoading, isError, error }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const handlePrevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? artikels.length - 1 : prevIndex - 1))
    }

    const handleNextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === artikels.length - 1 ? 0 : prevIndex + 1))
    }

    if (isLoading) return <h1>Loading</h1>
    if (isError) return <h1>{error.message}</h1>
    return <SlideContainerView prevSlide={handlePrevSlide} nextSlide={handleNextSlide} artikels={artikels} activeIndex={activeIndex} />
}

export default SlideContainer