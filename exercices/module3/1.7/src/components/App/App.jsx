import { useState } from 'react'
import { Title } from '../Display/Title'
import { Button } from '../Button/Button'
import { Value } from '../Display/Value'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const setGoodValue = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const setNeutralValue = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const setBadValue = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  const average = all === 0 ? 0 : (good - bad) / all;
  const positivePercentage = all === 0 ? 0 : (good / all) * 100;

  return (
    <div>
      <Title text={'give feedback'} />
      <Button handleClick={setGoodValue}  text={'good'} />
      <Button handleClick={setNeutralValue} text={'neutral'} />
      <Button handleClick={setBadValue} text={'bad'} />

      <Title text={'statistics'} />
      <Value text={'good'} value={good} />
      <Value text={'neutral'} value={neutral} />
      <Value text={'bad'} value={bad} />
      <Value text={'all'} value={all} />
      <Value text={'average'} value={average.toFixed(2) + ' %'} />
      <Value text={'positive'} value={positivePercentage.toFixed(2) + ' %'} />
    </div>
  )
}

export default App
