import Head from "next/head";
import styles from "./layout.module.css";
import utilsStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Shin Code";
export const siteTitle = "Next.js blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head className={styles.header}>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.png"
              className={`${utilsStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilsStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <Link href="/" className={utilsStyles.customLink}>
            <img
              src="/images/profile.png"
              className={`${utilsStyles.borderCircle} ${utilsStyles.centerCircle}`}
            />
            <h1 className={`${utilsStyles.heading2Xl} ${utilsStyles.boldText}`}>
              {name}
            </h1>
          </Link>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">←　ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
