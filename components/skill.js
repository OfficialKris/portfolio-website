import styles from '../styles/Utils.module.css'

export default function Skill(props) {
    return (
        <div className={styles.skill}>
            <h2>
                {props.title}
            </h2>
            <p>
                {props.skills}
            </p>
        </div>
    )
}