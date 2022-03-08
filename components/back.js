import styles from '../styles/Utils.module.css'
import Link from 'next/link'

export default function Back() {
    return (
        <h2 className={styles.back}>
            <Link href='/'>
                <a>&larr;</a>
            </Link>
        </h2>
    )
}