import { useState } from "react";

const ClickablePicture = ({img, imgClicked}) => {
    // useState hook to manage the state.
    // state variable to track whether the picture is clicked or not.
    const [isClicked, setIsClicked] = useState(false);

    // function that toggles the value when the picture is clicked
    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    // render the image with the source based on the state variable
    // if the state is true, shows the image clicked
    // otherwise we show the initial image
    // the style sets the cursor to pointer to indicate that the img is clickable
    return (
        <img 
            src={isClicked ? imgClicked : img}
            alt="Click"
            onClick={handleClick}
            style={{cursor: 'pointer'}}
        />
    );
};

export default ClickablePicture;