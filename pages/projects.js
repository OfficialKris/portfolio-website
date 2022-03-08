import Back from '../components/back'
import Card from '../components/card'
import Copyright from '../components/copyright'
import styles from '../styles/projects.module.css'

export default function Projects() {
    return (
        <>
            <Back />
            <div className={styles.grid}>
                <Card link="/projects/1/" heading="Portfolio Website &rarr;"
                detail="Find in-depth information about Next.js features and API."></Card>
                
                <Card link="/projects/2/" heading="Drone GPS & Mapping &rarr;"
                detail="Learn about Next.js in an interactive course with quizzes!"></Card>
                
                <Card link="/projects/3/" heading="SAE Electrical System &rarr;"
                detail="Discover and deploy boilerplate example Next.js projects."></Card>
                
                <Card link="/projects/4/" heading="Portfolio Website &rarr;"
                detail="Find in-depth information about Next.js features and API."></Card>
                
                <Card link="/projects/5/" heading="Portfolio Website &rarr;"
                detail="Find in-depth information about Next.js features and API."></Card>
            </div>
            <Copyright />
        </>
    )
}

