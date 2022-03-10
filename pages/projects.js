import styles from '../styles/Projects.module.css'
import Back from '../components/back'
import Card from '../components/card'
import Copyright from '../components/copyright'

export default function Projects() {
    return (
        <div className={styles.container}>
            <Back />
            <div className={styles.grid}>
                <Card link="/projects/" image="/backgrounds/coding.jpg"
                heading="Portfolio Website &rarr;"
                detail="Next.js, React, Vercel, Node.js, Git, HTML, CSS, and JavaScript"></Card>
                
                <Card link="/projects/" image="/backgrounds/drone.jpg"
                heading="Drone GPS & Mapping &rarr;"
                detail="GPS standard, Python, OpenCV, Machine Learning, and Project Management"></Card>
                
                <Card link="/projects/" image="/backgrounds/embedded.jpg"
                heading="SAE Electrical System &rarr;"
                detail="CAN, Arduino Coding, KiCad, and Embedded Electronics"></Card>
            </div>
            <Copyright />
        </div>
    )
}
