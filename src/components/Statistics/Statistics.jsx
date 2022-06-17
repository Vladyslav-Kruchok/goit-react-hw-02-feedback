import PropTypes from "prop-types";
import React from "react";
import styles from "./Statistics.module.css";
import { Notification } from "../Notification";

export class Statistics extends React.Component { 
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        if (!total)
        {
            return <Notification message="There is no feedback"/>;
        };
        return (
            <ul className={styles.box}>
                <li className={styles.boxItem}>Good: {good}</li>
                <li className={styles.boxItem}>Neutral: {neutral}</li>
                <li className={styles.boxItem}>Bad: {bad}</li>
                <li className={styles.boxItem}>Total: {total}</li>
                <li className={styles.boxItem}>Positive feedback: {positivePercentage} %</li>
            </ul>
        );
    };
};

Statistics.protoType = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};