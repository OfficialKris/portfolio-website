import styles from '../styles/Home.module.css'
import Copyright from '../components/copyright'
import Head from 'next/head'
import Image from 'next/image'
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
            Christian Kuklis is a software engineer with skills in developing
            websites, working on complex projects, and designing and coding embedded systems.
          </p>

          <div className={styles.logos}>
            <Image src="/images/github-logo.png" height={100} width={100} alt="GitHub logo"></Image>
            <Image src="/images/wordpress-logo.png" height={100} width={100} alt="GitHub logo"></Image>
            <Image src="/images/react-logo.png" height={100} width={100} alt="GitHub logo"></Image>
            <Image src="/images/nextjs-logo.png" height={100} width={100} alt="GitHub logo"></Image>
            <Image src="/images/sae-logo.png" height={100} width={100} alt="GitHub logo"></Image>
          </div>

          <Copyright />
        </div>
      </main>
    </div>
  )
}
