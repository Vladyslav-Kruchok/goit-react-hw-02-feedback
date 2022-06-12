//import componet that export as default
//import Feedback from "./Feedback";

//#region DATA #
import textFeedback from "../data/titleFeedback.json"
//#endregion #

//#region COMPONETS #
//import componet as a component
import { Feedback } from "./Feedback";
import { Statistics } from "./Statistics";

//#endregion #


export const App = () => {
  return (
    <div>
      <Feedback title="Please leave feedback" textFeedback={textFeedback} />
      <Statistics title="Statistics" textFeedback={textFeedback}/>
    </div>
  );
};
