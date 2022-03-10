import styles from '../styles/Contact.module.css'
import Image from 'next/image'
import Back from '../components/back'

export default function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Back></Back>
                <div className={styles.info}>
                    <h2>Get in Contact with Christian Kuklis</h2>
                    <div className={styles.links}>
                        <a href='https://www.linkedin.com/in/christiankuklis/'>
                            <Image src='/ico/linkedin-ico.png' width={100} height={100}></Image>
                        </a>

                        <a href='https://github.com/OfficialKris/'>
                            <Image src='/ico/github-ico.png' width={100} height={100}></Image>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}