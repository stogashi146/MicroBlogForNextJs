import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import UtilStyles from "@/styles/utils.module.css";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { getPostsData } from "@/lib/post";

// SSG（静的生成）の場合　１回だけ表示したいデータなど
// getStaticPropsはnextjsで用意されている関数
export async function getStaticProps() {
  // mdの中身をオブジェクトとして取得
  const allPostsData = getPostsData();
  console.log(allPostsData);

  // getStaticProps特有の書き方
  return {
    props: {
      allPostsData,
    },
  };
}

const inter = Inter({ subsets: ["latin"] });

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout>
        <section className={UtilStyles.headingMd}>
          <p>私はフルスタックエンジニアです。</p>
        </section>
        <section className={`${UtilStyles.headingMd} ${UtilStyles.padding1px}`}>
          <h2>📝エンジニアのブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, title, date, thumbnail }) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img
                    src={thumbnail}
                    alt=""
                    className={styles.thumbnailImage}
                  />
                </Link>
                <Link href={`/posts/${id}`} className={UtilStyles.boldText}>
                  {title}
                </Link>
                <br />
                <small className={UtilStyles.lightText}>{date}</small>
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
