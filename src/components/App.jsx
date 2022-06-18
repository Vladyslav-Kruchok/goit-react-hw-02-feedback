//import componet that export as default
//import Feedback from "./Feedback";

import React from "react";

//#region DATA #
import textFeedback from "../data/titleFeedback.json"
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
  };
  step = 1;
  //#region STATE_UPDTE #
    updateState = (event) => {
    const nameBtn = event.currentTarget.name;

    this.setState(prevState => {
          return { [nameBtn]: prevState[nameBtn] + this.step };
    });
  };
  //#endregion #
  
  //#region UTILS #
  totalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positivePercentage = () => {
    return Math.ceil((this.state.good / this.totalFeedback()) * 100) || 0;
  };
  //#endregion
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={textFeedback}
            onLeaveFeedback={this.updateState}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.totalFeedback()}
            positivePercentage={this.positivePercentage()}
          />
        </Section>
      </div>
    );
  };
};