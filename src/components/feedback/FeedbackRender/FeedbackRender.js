import React, { useState } from "react";
import Section from "../Section/Section";
import Controls from "../Controls/Controls";
import Statistics from "../Statistics/Statistics";

import s from "./FeedbackRender.module.css";

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const state = { good, bad, neutral };

  const handleClick = (e) => {
    const { name } = e.currentTarget;
    switch (name) {
      case "good":
        setGood((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break;
      case "bad":
        setBad((state) => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedBack = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedBack());
  };

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <Controls options={state} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedBack()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}
