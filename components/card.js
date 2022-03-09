import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Projects.module.css'

export default function Card(props) {
    return (
        <Link href={props.link}>
            <a className={styles.card}>
                <div className={styles.content}>
                    <h2>{props.heading}</h2>
                    <p>{props.detail}</p>
                </div>
                <div className={styles.imageholder}><Image src={props.image} layout='fill' objectFit={'cover'}></Image></div>
            </a>
        </Link>
    )
}