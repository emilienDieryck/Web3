import React, { useState } from 'react';
import '../../ColorBox.css';

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

const ColorBox = () => {

    const [colorIndex, setColorIndex] = useState(0);

    const handleClick = () => {
        setColorIndex((colorIndex + 1) % colors.length);
    };

    const currentColor = colors[colorIndex];
    const nextColor = colors[(colorIndex + 1) % colors.length];

    return (
        <div className="ColorBox" style={{ backgroundColor: currentColor }}>
            <button onClick={handleClick}>{nextColor}</button>
            <p>{currentColor}</p>
        </div>
    );
};

export default ColorBox;