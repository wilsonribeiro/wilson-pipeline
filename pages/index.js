import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my Wilson-Pipeline App!" />
        <p className="description">
          Application created to exemplify the cycle of a DevOps PipeLine

          For more information, visit my profile on [LinkedIn](https://www.linkedin.com/in/wilsonribeiro2/)

          Thanks in advance!!

          Wilson Ribeiro
        </p>
      </main>

      <Footer />
    </div>
  )
}
