import Head from 'next/head'
import App from "@screens/App";

export default function Home() {
  return (
    <>
      <Head>
        <title>Готовь сани летом - новогоднее грузинское безумие</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <App/>
      </main>
    </>
  )
}
