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

    return (
      <Container>
        <Description />
      
    <Options options={['good', 'neutral', 'bad']} updateFeedback ={updateFeedback }/>

    {
      good || neutral || bad ?  
        <Feadback
          good={good}
          neutral={neutral}
          bad={bad} /> 
          :
        <Notification
          message="There is no feedback" 
     
    />
    
    }

  </Container>
  );  

}

export default App