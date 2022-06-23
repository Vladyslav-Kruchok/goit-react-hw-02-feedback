import PropTypes from "prop-types";
import React from "react";
import styles from "./Section.module.css";

export class Section extends React.Component {
    render() {
        return (
            <section>
                <h1 className={styles.title}>{this.props.title}</h1>
                {this.props.children}
            </section>
        );
    };
};

Section.protoType = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};