import style from "./Options.module.css";

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
    <div className={style.options}>
      {Object.keys(reviews).map((option) => (
        <button
          className={style.button}
          type="button"
          key={option}
          onClick={handleClick(option)}
        >
          {option}
        </button>
      ))}
      {totalFeedback > 0 ?? (
        <button className={style.button} onClick={resetReview} type="reset">
          Reset
        </button>
      )}
    </div>
  );
}
