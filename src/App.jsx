import { useState } from "react";
import { Container } from "./App.styled";
import Options from "./Options/Options"
import Feadback from './Feadback/Feadback'
import Notification from "./Notification/Notification";
import Description from './Description/Description'


const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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