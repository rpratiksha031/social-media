import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
function PostList() {
  const { postList, addInitialPost } = useContext(PostListData);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
  });

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
export default PostList;
