import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import { Header } from "../Header";

export const Statistics = (props) => { 
    return (
        <section className={styles.section}>
            <Header title={props.title} />
            <ul className={styles.box}>
                {
                    props.textFeedback.map((item, index) =>
                        <li className={styles.boxItem} key={item.id}>{item.feedback}: {index}</li>
                )}
            </ul>
        </section>
    );
};

Statistics.protoType = {
        textFeedback: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            feedback: PropTypes.string.isRequired
    })),
    title: PropTypes.string.isRequired
};