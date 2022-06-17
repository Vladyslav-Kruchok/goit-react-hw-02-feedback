import React from "react";
import PropTypes from "prop-types";
//import styles from "./Notification.module.css";

export class Notification extends React.Component {
    render() {
        return (
            <ul>
                <li>{this.props.message}</li>
            </ul>
        );
    };
};

Notification.propType = {
    message: PropTypes.string.isRequired
};