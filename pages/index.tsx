import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import EmptyPage from './components/404';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>甘小虎的个人网站</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <EmptyPage />
      </main>

      <footer className={styles.footer}>
        <div className={styles.copyright}>
          <a className={styles.link}
           target="_blank"
           rel="noreferrer"
           href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002016295">
             <Image src="/copyright.png" alt="" width={20} height={20} />
             <p>浙公网安备 33011002016295号</p>
             </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
