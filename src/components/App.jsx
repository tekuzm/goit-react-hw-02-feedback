import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = optionKey => {
    this.setState({ [optionKey]: this.state[optionKey] + 1 });

    // if (optionKey === 'Good') {
    //   this.setState({ good: this.state.good + 1 });
    // } else if (optionKey === 'Neutral') {
    //   this.setState({ neutral: this.state.neutral + 1 });
    // } else {
    //   this.setState({ bad: this.state.bad + 1 });
    // }
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const total = values.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    return total;

    // const { good, neutral, bad } = this.state;
    // return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return ((good / this.countTotalFeedback()) * 100).toFixed(1);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          margin: '20px',
          padding: '20px',
          width: 'fit-content',
          border: 'thick double grey',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
