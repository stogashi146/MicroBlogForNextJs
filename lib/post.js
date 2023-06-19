import path from "path";
import fs from "fs";
// メタデータの分析
import matter from "gray-matter";

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
