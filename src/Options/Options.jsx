import { FeedbackBtns, FeedbackButton } from "./Options.styled"

const Options = ({options, updateFeedback, resetFeedback, total }) => {
    return (
        <>
        <FeedbackBtns>
         {options.map(option => (
        <FeedbackButton type="button" key={option} onClick={() => updateFeedback(option)}>{option}</FeedbackButton>
         ))}
                
        {total > 0 && <FeedbackButton type="button" onClick={resetFeedback}>reset</FeedbackButton> }

            </FeedbackBtns>



            
       
        </>
    )
}

export default Options