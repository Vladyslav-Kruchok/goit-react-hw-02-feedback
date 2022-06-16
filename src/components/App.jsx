//import componet that export as default
//import Feedback from "./Feedback";

import React from "react";

//#region DATA #
//import textFeedback from "../data/titleFeedback.json"
//#endregion #

//#region COMPONETS #
//import componet as a component
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";
import { Section } from "./Section";
//#endregion #

export class App extends React.Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}
  updateGood = (value) => {
    this.setState(prevState => {
      return {
        good: prevState.good + value
      };
    });
  };
  updateNeutral = (value) => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + value
      };
    });
  };
  updateBad = (value) => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + value,
      };
    });
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{
              good: this.updateGood, 
              neutral: this.updateNeutral,
              bad: this.updateBad}}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        </Section>
      </div>
    );
  };
};