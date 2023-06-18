import { useState } from "react";

const Carousel = ({images}) => {
    // useState hook to manage the state.
    // state variable count to track the index of current image
    const [currentIndex, setCurrentIndex] = useState(0);

    // function to handle the click event of left button
    // function update image based on the index and the legth of the array
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length -1 : prevIndex - 1));
    };

    // function to handle the click event of right button
    // function update image based on the index and the legth of the array
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    // render the element containing the left and right button based on the array
    return (
        <div>
            <button onClick={handlePrevious} >Left</button>
            <img src={images[currentIndex]} alt="Carousel" />
            <button onClick={handleNext} >Right</button>
        </div>
    );
};

export default Carousel;