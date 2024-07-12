import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
function CreatePost() {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = " ";
    postTitleElement.current.value = " ";
    postBodyElement.current.value = " ";
    reactionsElement.current.value = " ";
    tagsElement.current.value = " ";

    addPost(userId, postTitle, postBody, reactions, tags);
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userIdElement" className="form-label">
          Enter your user id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          placeholder="your user id"
          id="userid"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          placeholder="How are you feeling ..."
          id="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          placeholder="Tell us more about it"
          id="body"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          placeholder="How many people have reacted to it"
          id="reactions"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tagsElement" className="form-label">
          Enter your hashtags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          placeholder="please enter your tags using spaces"
          id="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
