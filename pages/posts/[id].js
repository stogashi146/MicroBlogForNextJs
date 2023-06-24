// 任意URLを受け付けるために[]を使用
import Layout from "@/components/Layout";
import { getAllPostIds, getPostData } from "@/lib/post";

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
      {postData.title}
      <br />
      {postData.date}
      <br />
      {postData.blogContentHTML}
    </Layout>
  );
}
