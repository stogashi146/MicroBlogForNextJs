import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import UtilStyles from "@/styles/utils.module.css";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <section className={UtilStyles.headingMd}>
          <p>私はフルスタックエンジニアです。</p>
        </section>
        <section className={`${UtilStyles.headingMd} ${UtilStyles.padding1px}`}>
          <h2>📝エンジニアのブログ</h2>
          <div className={styles.grid}>
            <article>
              <Link href="/">
                <img
                  src="images/thumbnail01.jpg"
                  alt=""
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href="/" className={UtilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </Link>
              <br />
              <small className={UtilStyles.lightText}>Februray 23, 2020</small>
            </article>
            <article>
              <Link href="/">
                <img
                  src="images/thumbnail01.jpg"
                  alt=""
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href="/" className={UtilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </Link>
              <br />
              <small className={UtilStyles.lightText}>Februray 23, 2020</small>
            </article>
            <article>
              <Link href="/">
                <img
                  src="images/thumbnail01.jpg"
                  alt=""
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href="/" className={UtilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </Link>
              <br />
              <small className={UtilStyles.lightText}>Februray 23, 2020</small>
            </article>
            <article>
              <Link href="/">
                <img
                  src="images/thumbnail01.jpg"
                  alt=""
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href="/" className={UtilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </Link>
              <br />
              <small className={UtilStyles.lightText}>Februray 23, 2020</small>
            </article>
          </div>
        </section>
      </Layout>
    </>
  );
}
