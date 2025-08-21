import React from "react";
import { ThumbsUp, MessageCircle } from "lucide-react";

const PostList = ({ posts, search }) => {
  return (
    <div className="max-w-3xl mx-auto mt-6 space-y-4">
      {posts
        .filter((post) =>
          post.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((post) => (
          <div
            key={post.id}
            className="rounded-2xl bg-gray-400 shadow-md hover:shadow-lg transition p-4"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {post.title}
            </h2>

            {/* <p className="text-gray-700 mt-2">{post.body}</p> */}

            {/* <hr className="m-5" /> */}
            <p className="text-sm text-gray-500 mt-1">
              {post.author} • {post.time}
            </p>

            <div className="flex items-center gap-4 mt-3 text-gray-600">
              <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                <ThumbsUp size={18} /> {post.likes}
              </span>
              <span className="flex items-center gap-1 cursor-pointer hover:text-green-600">
                <MessageCircle size={18} /> {post.comments}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
