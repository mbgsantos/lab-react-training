const SingleColorPicker = ({color, value, onChange}) => {
    return (
        <div>
            <label htmlFor="color">{color.toUpperCase()}</label>
            <input 
                type="number"
                id={color}
                min={0}
                max={255}
                value={value}
                onChange={(c) => onChange(color, c.target.value)}
            />
        </div>
    );
};

export default SingleColorPicker;