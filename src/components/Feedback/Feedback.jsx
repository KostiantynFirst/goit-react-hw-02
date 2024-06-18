import { FeedbackGood, FeedbacknNeutral, FeedbackBad, FeedbackTotal, FeedbackPositive, StatisticsSection, StatisticsHeading, FeedbackContent, FeedbackContentHeading } from "./Feedback.styled"

const Feedback = ({good, neutral, bad, total, positiveFeedback }) => {

  // const positiveFeedback =
  //   total === 0 ? 0 : Math.round((good / total) * 100);

    return (
        <StatisticsSection>
        <StatisticsHeading>Statistics</StatisticsHeading>
        <FeedbackContent>
          <FeedbackGood>
            <FeedbackContentHeading>Good : {good}</FeedbackContentHeading>
          </FeedbackGood>
          <FeedbacknNeutral>
            <FeedbackContentHeading>Neutral : {neutral}</FeedbackContentHeading>
          </FeedbacknNeutral>
          <FeedbackBad>
            <FeedbackContentHeading>Bad : {bad}</FeedbackContentHeading>
          </FeedbackBad>
          <FeedbackTotal>
            <FeedbackContentHeading>Total : {total}</FeedbackContentHeading>
          </FeedbackTotal>
          <FeedbackPositive>
            <FeedbackContentHeading>Positive<br/>feedback : {positiveFeedback}%</FeedbackContentHeading>
          </FeedbackPositive>
        </FeedbackContent>
        </StatisticsSection>

    )

}

export default Feedback