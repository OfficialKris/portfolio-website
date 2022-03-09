import styles from '../styles/Projects.module.css'
import Back from '../components/back'
import Card from '../components/card'
import Copyright from '../components/copyright'

export default function Projects() {
    return (
        <div className={styles.container}>
            <Back />
            <div className={styles.grid}>
                <Card link="/projects/1/" image="/backgrounds/coding.jpg"
                heading="Portfolio Website &rarr;"
                detail="Find out what tools were used to make this website!"></Card>
                
                <Card link="/projects/2/" image="/backgrounds/drone.jpg"
                heading="Drone GPS & Mapping &rarr;"
                detail="Discover the tools used to develop an autonomous drone!"></Card>
                
                <Card link="/projects/3/" image="/backgrounds/embedded.jpg"
                heading="SAE Electrical System &rarr;"
                detail="Dive deep into the electronics of a modern race car!"></Card>
            </div>
            <Copyright />
        </div>
    )
}
