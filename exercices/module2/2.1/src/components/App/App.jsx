import { useState } from 'react'
import { Button } from '../Button/Button'
import { Display } from '../Display/Display'

const App = () => {
  const defaultCount = JSON.parse(localStorage.getItem('counter')) || 0
  const [counter, setCount] = useState(defaultCount)

  const changeCount = (delta) => {
    setCount(currentCount => {
      const newCount = currentCount + delta
      localStorage.setItem('counter', JSON.stringify(newCount))
      return newCount
    }
    )
  }

  return (
    <div>
      <Display
        counter={counter} 
        hoverMessage="Please, click on me now!"  
      />
      <Button changeCount={changeCount} text="Increment" delta={1}  
        clickCount={counter} message="You are the master in the art of clicking !"
      />
      <Button changeCount={changeCount} text="zero" delta={-counter} 
        clickCount={counter} message="You are the master in the art of clicking !"
      />
      <Button changeCount={changeCount} text="Decrement" delta={-1} 
        clickCount={counter} message="You are the master in the art of clicking !"
      />
    </div>
  )
}

export default App