import PropTypes from "prop-types";
import React from "react";
import styles from "./FeedbackOptions.module.css";

export class FeedbackOptions extends React.Component {
    //extFunc = this.props.options;
    render() {
        const {options, onLeaveFeedback} = this.props;
        return (
            <ul className={styles.box}>
                {
                    options.map(item =>
                        <li className={styles.boxItem} key={item.id}>
                            <button
                                className={styles.btn}
                                name={item.feedback}
                                type="button"
                                onClick={onLeaveFeedback}
                            >{item.feedback}</button>
                        </li>
                    )
                }
            </ul>
        );
    };
};

FeedbackOptions.protoType = {
    options: PropTypes.objectOf(PropTypes.shape({
        good: PropTypes.func.isRequired,
        neutral: PropTypes.func.isRequired,
        bad: PropTypes.func.isRequired
    })),
};
//export as a default
//export default Feedback;