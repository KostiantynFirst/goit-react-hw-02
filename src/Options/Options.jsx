import { FeedbackBtns, FeedbackButton } from "./FeadbackOptions.styled"

export const Options = ({options, updateFeedback }) => {
    return (
        <FeedbackBtns>
         {options.map(option => (
        <FeedbackButton type="button" key={option} onClick={() => updateFeedback (option)}>{option}</FeedbackButton>
    ))}
        </FeedbackBtns>
    )
}