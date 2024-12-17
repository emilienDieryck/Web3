import { useState } from 'react'
import { Button } from '../Button/Button'
import { Display } from '../Display/Display'

const App = () => {

  const [counter, setCount] = useState(0)

  const changeCount = (delta) => {
    setCount(counter + delta)
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