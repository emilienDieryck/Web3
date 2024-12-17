import React, { useState } from 'react';

export const Display = ({ counter, hoverMessage }) => {

    const [showMessage, setShowMessage] = useState(false)

    const handleMouseEnter = () => {
        setShowMessage(true)
    }

    const handleMouseLeave = () => {
        setShowMessage(false)
    }
    
    return (
      <div>
        {showMessage && <p>{hoverMessage}</p>}
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {counter}
        </div>
      </div>
    );
}