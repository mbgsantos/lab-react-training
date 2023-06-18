const BoxColor = ({r, g, b}) => {
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
    };

    return (
        <div style={divStyle} className="BoxColorInfo">
            <p className="BoxColorText">rgb({r}, {g}, {b})</p>
        </div>
    )
};

export default BoxColor;