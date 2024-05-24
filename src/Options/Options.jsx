import { FeedbackBtns, FeedbackButton } from "./Options.styled"

const Options = ({options, updateFeedback }) => {
    return (
        <FeedbackBtns>
         {options.map(option => (
        <FeedbackButton type="button" key={option} onClick={() => updateFeedback (option)}>{option}</FeedbackButton>
    ))}
        </FeedbackBtns>
    )
}

export default Options