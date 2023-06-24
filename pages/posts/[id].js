// 任意URLを受け付けるために[]を使用
import Layout from "@/components/Layout";
import { getAllPostIds, getPostData } from "@/lib/post";
import utilStyles from "@/styles/utils.module.css";

// getStaticPathsはnextjsで用意されている関数
export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    // fallback: falseの場合、存在しないパスは404ページになる
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
      </article>
    </Layout>
  );
}
