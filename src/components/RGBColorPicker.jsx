import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

const RGBColorPicker = () => {
    const [rValue, setRValue] = useState(0);
    const [gValue, setGValue] = useState(0);
    const [bValue, setBValue] = useState(0);

    const handleColorChange = (color, value) => {
        if (color === 'r') {
            setRValue(value);
        } else if (color === 'g') {
            setGValue(value);
        } else if (color === 'b') {
            setBValue(value);
        }
    };

    const rgbColor = `rgb(${rValue}, ${gValue}, ${bValue})`;

    return (
        <div>
            <SingleColorPicker color='r' value={rValue} onChange={handleColorChange} />
            <SingleColorPicker color='g' value={gValue} onChange={handleColorChange} />
            <SingleColorPicker color='b' value={bValue} onChange={handleColorChange} />

            <div
                style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: rgbColor,
                }}
            ></div>
        </div>
    );
};

export default RGBColorPicker;