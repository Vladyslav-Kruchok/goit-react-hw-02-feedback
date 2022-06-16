import PropTypes from "prop-types";
import React from "react";
import styles from "./Statistics.module.css";

export class Statistics extends React.Component { 
    render() {
        return (
            <ul className={styles.box}>
                <li className={styles.boxItem}>Good: {this.props.good}</li>
                <li className={styles.boxItem}>Neutral: {this.props.neutral}</li>
                <li className={styles.boxItem}>Bad: {this.props.bad}</li>
            </ul>
        );
    };
};

Statistics.protoType = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
};