import PropTypes from "prop-types";
import React from "react";
import styles from "./FeedbackOptions.module.css";

export class FeedbackOptions extends React.Component {
    state = {
        stepGood: 1,
        stepNeutral: 1,
        stepBad: 1
    }
    render() {
        return (
            <ul className={styles.box}>
                <li className={styles.boxItem}>
                    <button
                        className={styles.btn}
                        type="button"
                        onClick={() => {
                            this.props.options.good(this.state.stepGood);
                            }}
                    >good</button>
                </li>
                <li className={styles.boxItem}>
                    <button
                        className={styles.btn}
                        type="button"
                        onClick={() => {
                            this.props.options.neutral(this.state.stepNeutral);
                            }}
                    >neutral</button>
                </li>
                <li className={styles.boxItem}>
                    <button
                        className={styles.btn}
                        type="button"
                        onClick={() => {
                            this.props.options.bad(this.state.stepBad);
                        }}
                    >bad</button>
                </li>
            </ul>
        );
    };
};

FeedbackOptions.protoType = {
    textFeedback: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        feedback: PropTypes.string.isRequired
    })),
    title: PropTypes.string.isRequired
};
//export as a default
//export default Feedback;