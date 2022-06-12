import PropTypes from "prop-types";
import styles from "./Header.module.css";

export const Header = (prop) => {
    return (
        <h1 className={styles.headTitle}>{ prop.title }</h1>
    );
};

Header.protoType = {
    title: PropTypes.string.isRequired
};