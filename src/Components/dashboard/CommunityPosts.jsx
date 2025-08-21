import React from "react";

export default function CommunityPosts() {
  const posts = [
    { id: 1, title: "React Hooks Tips", author: "Alice" },
    { id: 2, title: "Tailwind Styling Tricks", author: "Bob" },
    { id: 3, title: "Effective Component Design", author: "Charlie" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Community Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-medium">{post.title}</h3>
            <p className="text-gray-500 mt-1">by {post.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
