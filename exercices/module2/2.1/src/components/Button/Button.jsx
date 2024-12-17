export const Button = ( { changeCount , text, delta , clickCount , message } ) => {

    const handleClick = (e) => {
        const value = parseInt(e.target.dataset.delta)
        changeCount(value)
    }

    return (
        <div>
            <button onClick={handleClick} data-delta={delta}>
                {text}
            </button>
            {clickCount >= 10 && <p>{message}</p>}
        </div>
      
    )
}