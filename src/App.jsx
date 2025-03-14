import { useState } from "react";
import "./App.css";
import Feedback from "./components/Feedback";
import Options from "./components/Options";
import Description from "./components/Description";
import Notification from "./components/Notification";

function App() {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;

  const updateFeedback = (feedbackType) => {
    setReviews({
      ...reviews,
      [feedbackType]: reviews[feedbackType] + 1,
    });
  };

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
