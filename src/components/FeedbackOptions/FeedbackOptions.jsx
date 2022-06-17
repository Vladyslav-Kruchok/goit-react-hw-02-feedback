import PropTypes from "prop-types";
import React from "react";
import styles from "./FeedbackOptions.module.css";

export class FeedbackOptions extends React.Component {
    state = {
        stepGood: 1,
        stepNeutral: 1,
        stepBad: 1
    };
    extFunc = this.props.options;
    render() {
        return (
            <ul className={styles.box}>
                <li className={styles.boxItem}>
                    <button
                        className={styles.btn}
                        type="button"
                        onClick={() => {
                            this.extFunc.good(this.state.stepGood);
                            }}
                    >good</button>
                </li>
                <li className={styles.boxItem}>
                    <button
                        className={styles.btn}
                        type="button"
                        onClick={() => {
                            this.extFunc.neutral(this.state.stepNeutral);
                            }}
                    >neutral</button>
                </li>
                <li className={styles.boxItem}>
                    <button
                        className={styles.btn}
                        type="button"
                        onClick={() => {
                            this.extFunc.bad(this.state.stepBad);
                        }}
                    >bad</button>
                </li>
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