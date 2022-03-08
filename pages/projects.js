import Back from '../components/back'
import Copyright from '../components/copyright'
import styles from '../styles/projects.module.css'

export default function Projects() {
    return (
        <>
            <Back />
            <div className={styles.grid}>
                <a href="/projects/1/" className={styles.card}>
                    <h2>Portfolio Website &rarr;</h2>
                    <p>Find in-depth information about Next.js features and API.</p>
                </a>

                <a href="/projects/2/" className={styles.card}>
                    <h2>Drone GPS & Mapping &rarr;</h2>
                    <p>Learn about Next.js in an interactive course with quizzes!</p>
                </a>

                <a href="projects/3/" className={styles.card}>
                    <h2>SAE Electrical System &rarr;</h2>
                    <p>Discover and deploy boilerplate example Next.js projects.</p>
                </a>

                <a href="projects/3/" className={styles.card}>
                    <h2>Examples &rarr;</h2>
                    <p>Discover and deploy boilerplate example Next.js projects.</p>
                </a>

                <a href="projects/3/" className={styles.card}>
                    <h2>Examples &rarr;</h2>
                    <p>Discover and deploy boilerplate example Next.js projects.</p>
                </a>
            </div>
            <Copyright />
        </>
    )
}

