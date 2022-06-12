import PropTypes from "prop-types";
import styles from "./Feedback.module.css";
import { Header } from "../Header";


export const Feedback = (props) => {
    return (
        <section className={styles.section}>
            <Header title={props.title} />
            <ul className={styles.box}>
                {
                    props.textFeedback.map(item =>
                        <li className={styles.boxItem} key={item.id}>
                            <button className={styles.btn} type="button">{item.feedback}</button>
                        </li>
                )}
            </ul>
        </section>
    );
};

Feedback.protoType = {
    textFeedback: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        feedback: PropTypes.string.isRequired
    })),
    title: PropTypes.string.isRequired
};
//export as a default
//export default Feedback;