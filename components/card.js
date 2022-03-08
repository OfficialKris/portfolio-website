import Link from 'next/link'
import styles from '../styles/Projects.module.css'

export default function Card(props) {
    return (
        <Link href={props.link}>
            <a className={styles.card}>
                <h2>{props.heading}</h2>
                <p>{props.detail}</p>
            </a>
        </Link>
    )
}