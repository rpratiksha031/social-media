import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  return currentPostList;
};
const PostListProvider = ({ children }) => {
  const addPost = () => {};

  const deletePost = (postId) => {
    console.log(`clicked ${postId}`);
  };

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "going to mumbai",
    body: "Hi friends, I am going to Mumbai for my vacation.Hope to enjoy a lot",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Travelling"],
  },
  {
    id: "2",
    title: "Do bichde dosto ka hua milan",
    body: "finally we met after so long time ,guys it is very amazing.",
    reactions: 59,
    userId: "user-2",
    tags: ["Frindship", "Friendship Goals", "LearningReact"],
  },
];
export default PostListProvider;
