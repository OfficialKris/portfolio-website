import Head from 'next/head'
import Image from 'next/image'
import Copyright from '../components/copyright'
import styles from '../styles/home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christian Kuklis Portfolio</title>
        <meta name="description" content="Website portfolio for Christian Kuklis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.homeLeft}>
          <h1 className={styles.title}>
            <Link href="/">
              <a>Christian Kuklis</a>
            </Link>
          </h1>
          <p>
            <code className={styles.code}>`web/projects/embedded`</code>
          </p>
        </div>
        
        <div className={styles.homeRight}>
          <h1 className={styles.navbar}>
            <Link href="/"><a className={styles.linkcurrent}>Home</a></Link>
            <Link href="/projects"><a>Projects</a></Link>
            <Link href="/skills"><a>Skills</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
          </h1>

          <p className={styles.description}>
            I am a software engineer with skills in developing software including
            websites, managing complex projects, and designing embedded systems.
          </p>

          <Copyright />
        </div>
      </main>
    </div>
  )
}
