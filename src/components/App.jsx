import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

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

    console.log(this.state);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} />
        </Section>
      </div>
    );
  }
}

export default App;
