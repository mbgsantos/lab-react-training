import { useState } from "react";

const Dice = () => {
    // useState hook to manage the state.
    // state variable to track the current value of the dice
    const [diceValue, setDiceValue] = useState(null);

    // function that sets de value to null to display the empty picture
    const handleClick = () => {
        setDiceValue(null);

        // generate a random dice value between 1 and 6
        setTimeout(() => {
            const randomValue = Math.floor(Math.random() * 6) + 1;
            setDiceValue(randomValue);
        }, 1000);
    };

    // render the image with the src based on the dice Value state
    return (
        <img 
            src={diceValue ? `../assets/images/dice3.png` : '../assets/images/dice-empty.png'}
            alt="Dice"
            onClick={handleClick}
            style={{cursor: 'pointer'}}
        />
    );
};

export default Dice;