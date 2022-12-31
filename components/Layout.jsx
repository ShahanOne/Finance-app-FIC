import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Navbar from './Navbar';
import Script from 'next/script';
function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Finance App</title>
        <meta
          name="description"
          content="Finance and Investment Cell, Jamia Millia Islamia"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"
      />
    </>
  );
}

export default Layout;
