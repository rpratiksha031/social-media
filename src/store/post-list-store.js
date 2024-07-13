import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        // reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: posts,
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPost, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};
// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "going to mumbai",
//     body: "Hi friends, I am going to Mumbai for my vacation.Hope to enjoy a lot",
//     reactions: 2,
//     userId: "user-9",
//     tags: ["vacation", "Travelling"],
//   },
//   {
//     id: "2",
//     title: "Learning react",
//     body: "We are learning react from scrach here.",
//     reactions: 59,
//     userId: "user-2",
//     tags: ["study", "learning", "LearningReact"],
//   },
// ];
export default PostListProvider;
