import { useState, useEffect } from 'react';
import { Title } from '../Display/Title';
import { Button } from '../Button/Button';
import { Statistics } from '../Statistics/Statistics';
import { Loading } from '../Loading/Loading';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [loading , setLoading] = useState(true);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const average = all === 0 ? 0 : (good - bad) / all;
  const positivePercentage = all === 0 ? 0 : (good / all) * 100;

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Title text={'give feedback'} />
          <Button handleClick={setGoodValue}  text={'good'} />
          <Button handleClick={setNeutralValue} text={'neutral'} />
          <Button handleClick={setBadValue} text={'bad'} />

          <Title text={'statistics'} />
          {all > 0 ? (
            <Statistics 
              good={good}
              neutral={neutral}
              bad={bad}
              all={all}
              average={average}
              positivePercentage={positivePercentage}
            />
          ) : (
            <p>No feedback given</p>
          )}
        </>
      )}
    </div>
  )
}

export default App
