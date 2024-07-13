import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";
function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            key={post.id}
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            <MdDelete onClick={() => deletePost(post.id)} />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p key={post.id} className="card-text">
          {post.body}
        </p>
        {post.tags.map((tag) => (
          <span key={post.id} className="badge text-bg-primary tags">
            {tag}
          </span>
        ))}
        <div className="alert alert-info reaction" role="alert">
          This post has got reactions from {post.reactions} people.
        </div>{" "}
      </div>
    </div>
  );
}

export default Post;
