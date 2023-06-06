import { useEffect, useState } from "react"
import SlideContainerView from "./slideContainerView"

const SlideContainer = ({ artikels, isLoading, isError, error }) => {
    const [cardCount, setCardCount] = useState(1);
    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setCardCount(4);
        } else if (window.innerWidth >= 768) {
          setCardCount(3);
        } else {
          setCardCount(1);
        }
      };
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    if (isLoading) return <h1>Loading</h1>
    if (isError) return <h1>{error.message}</h1>

    const visibleArtikels = artikels.slice(activeIndex, activeIndex + cardCount);
  
    const prevSlide = () => {
      setActiveIndex((prevIndex) =>
        prevIndex - cardCount < 0 ? artikels.length - cardCount : prevIndex - cardCount
      );
    };
  
    const nextSlide = () => {
      setActiveIndex((prevIndex) =>
        prevIndex + cardCount >= artikels.length ? 0 : prevIndex + cardCount
      );
    };

    return <SlideContainerView prevSlide={prevSlide} nextSlide={nextSlide} artikels={visibleArtikels} activeIndex={activeIndex} />
}

export default SlideContainer