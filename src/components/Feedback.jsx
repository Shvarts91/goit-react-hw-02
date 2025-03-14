export default function Feedback({ totalFeedback, reviewsValue }) {
  return (
    <div>
      <p>Good: {reviewsValue.good}</p>
      <p>Neutral: {reviewsValue.neutral}</p>
      <p>Bad: {reviewsValue.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {Math.round((reviewsValue.good / totalFeedback) * 100)}%</p>
    </div>
  );
}
