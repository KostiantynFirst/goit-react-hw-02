import { useState, useEffect } from "react";
import { Container } from "./App.styled";
import Options from "./components/Options/Options"
import Feadback from './components/Feadback/Feadback'
import Notification from "./components/Notification/Notification";
import Description from './components/Description/Description'


const App = () => {

  const [good, setGood] = useState(() => {
    const savedGood = Number(window.localStorage.getItem("saved-good"));
    if (savedGood !== null) {
      return savedGood;
    } 
    return 0;
  });

    const [neutral, setNeutral] = useState(() => {
    const savedNeutral = Number(window.localStorage.getItem("saved-neutral"));
    if (savedNeutral !== null) {
      return savedNeutral;
    } 
    return 0;
    });
  
    const [bad, setBad] = useState(() => {
    const savedBad = Number(window.localStorage.getItem("saved-bad"));
    if (savedBad !== null) {
      return savedBad;
    } 
    return 0;
  });

useEffect(() => {
    window.localStorage.setItem("saved-good", good);
    window.localStorage.setItem("saved-neutral", neutral);
    window.localStorage.setItem("saved-bad", bad);
  }, [good, neutral, bad]);


  const total = good + neutral + bad;
 
  const  updateFeedback  = option => {
      switch (option) {
        case 'good':
          setGood(good + 1);
          break;
          case 'neutral':
          setNeutral(neutral + 1);
          break;
          case 'bad':
          setBad(bad + 1);
          break;

        default:
          break;
      }
  }
  
  const resetFeedback = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  }

    return (
      <Container>
        <Description />
      
    <Options options={['good', 'neutral', 'bad']} resetFeedback={resetFeedback} updateFeedback={updateFeedback} total={total}/>

    { total > 0 ?  
        <Feadback
          good={good}
          neutral={neutral}
          bad={bad} 
          total={total}/> 
          :
        <Notification
          message="There is no feedback" 
     
    />
    
    }

  </Container>
  );  

}

export default App