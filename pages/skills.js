import styles from '../styles/Skills.module.css'
import Back from '../components/back'
import Skill from '../components/skill'
import Copyright from '../components/copyright'

export default function Skills() {
    return (
        <div className={styles.container}>
            <Back />
            <div className={styles.skills}>
                <Skill title="Software Development"
                    skills="Java | C++ | Python | Golang | UNIX | HTML | CSS | JavaScript | Node | React | MySQL | AWS"></Skill>
                <Skill title="Project Managment"
                    skills="Git | GitHub | Docker | JIRA | SCRUM | UML"></Skill>
                <Skill title="Embedded Systems"
                    skills="KiCAD | Computer Architecture | GPS | CAN | Arduino | Raspberry Pi | PCB Design"></Skill>
            </div>
            <Copyright />
        </div>
    )
}