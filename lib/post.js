import path from "path";
import fs from "fs";
// メタデータの分析
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// process.cwd():ルートディレクトリのパスを取得
const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsData() {
  // postsディレクトリ内のファイル名を配列で取得
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); // ファイル名

    // ファイル名からファイルパスを取得
    const fullPath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    // mdファイルのメタデータを解析してjsオブジェクトを返す
    const matterResult = matter(fileContent);

    // idとデータを返す
    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData;
}

// getStaticPathでreturnで使うpathを取得する
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  const idParams = fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });

  return idParams;
}

// idに基づいてブログ投稿データを返す
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContent);

  // remarkを使ってmarkdownをhtmlに変換
  const blogContent = await remark().use(html).process(matterResult.content);

  const blogContentHTML = blogContent.toString();

  return {
    id,
    blogContentHTML,
    ...matterResult.data,
  };
}
