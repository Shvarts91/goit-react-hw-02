export default function Options({
  resetReview,
  totalFeedback,
  changeReviews,
  reviews,
}) {
  const handleClick = (option) => () => {
    changeReviews(option);
  };

  return (
    <>
      {Object.keys(reviews).map((option) => (
        <button key={option} onClick={handleClick(option)}>
          {option}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button onClick={resetReview} type="reset">
          Reset
        </button>
      )}
    </>
  );
}
