import { useState } from "react";

const LikeButton = () => {
    // useState hook to manage the state.
    // state variable count to track the number of likes
    const [count, setCount] = useState(0);
    // state variable colorIndex to track the current color from array
    const [colorIndex, setColorIndex] = useState(0);

    // array of colors used to change the background on each click
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

    // function that increments the count and updates the colorIndex
    // based on the length of the colors array
    const buttonClicked = () => {
        setCount(count + 1);
        setColorIndex((colorIndex + 1) % colors.length);
    };

    // object to set the styles of the button
    const buttonStyle = {
        backgroundColor: colors[colorIndex],
        color: 'white',
        padding: '10px',
        border: '1px grey solid',
        borderRadius: '0.4rem',
        cursor: 'pointer',
    };

    // render the button with the count, the styles, and an onClick event
    return (
        <button style={buttonStyle} onClick={buttonClicked}>
            {count} Likes
        </button>
    );
};

export default LikeButton;