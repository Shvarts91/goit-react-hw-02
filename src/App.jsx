import { useState, useEffect } from "react";
import "./App.css";
import Feedback from "./components/Feedback";
import Options from "./components/Options";
import Description from "./components/Description";
import Notification from "./components/Notification";

function App() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = window.localStorage.getItem("saved-reviews");
    return savedReviews
      ? JSON.parse(savedReviews)
      : { good: 0, neutral: 0, bad: 0 };
  });
  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;

  const updateFeedback = (feedbackType) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [feedbackType]: prevReviews[feedbackType] + 1,
    }));
  };

  useEffect(() => {
    window.localStorage.setItem("saved-reviews", JSON.stringify(reviews));
  }, [reviews]);

  const resetFeedback = () => {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  };
  return (
    <>
      <Description />
      <Options
        resetReview={resetFeedback}
        totalFeedback={totalFeedback}
        reviews={reviews}
        changeReviews={updateFeedback}
      />
      {totalFeedback ? (
        <Feedback totalFeedback={totalFeedback} reviewsValue={reviews} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
