import React from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Section from './Section/Section.jsx';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);

  const [neutral, setNeutral] = useState(0);

  const [bad, setBad] = useState(0);

  const addFeedback = e => {
    console.log(e);

    switch (e) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };
  console.log(good);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() === 0
      ? 0
      : Math.round((100 / countTotalFeedback()) * good);
  };

  return (
    <div
      style={{
        width: '600px',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          action={addFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          persent={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};
