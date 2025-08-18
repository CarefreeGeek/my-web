import React, { useState } from "react";
import { Search } from "lucide-react";
import PostList from "../Components/community/PostList.jsx";
import CommHero from "../Components/community/CommHero.jsx";

const CommunityPage = () => {
  const [search, setSearch] = useState("");

  const posts = [
    {
      id: 1,
      title: "How to optimize React performance?",
      author: "Rohit Sharma",
      time: "2 hours ago",
      likes: 23,
      comments: 12,
    },
    {
      id: 2,
      title: "Best resources to learn Data Structures",
      author: "Neha Verma",
      time: "5 hours ago",
      likes: 41,
      comments: 20,
    },
    {
      id: 3,
      title: "How to deploy Django with PostgreSQL on VPS?",
      author: "Amit Patel",
      time: "1 day ago",
      likes: 15,
      comments: 9,
    },
  ];

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800">Community</h1>
        <p className="text-gray-600 mt-2">Discuss coding, share resources & help each other grow 🚀</p>
      </div>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mt-6 flex items-center border rounded-2xl bg-blend-soft-light px-4 py-2 shadow-sm">
        <Search className="text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search discussions, ask Questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none text-black px-2 bg-transparent border-none "
        />
      </div>

      {/* Create Post Button */}
      <div className="max-w-3xl mx-auto mt-4 text-right">
        <button className="bg-blue-600 text-white rounded-xl px-4 py-2 hover:bg-blue-700 transition">
          + Start Discussion
        </button>
      </div>

      {/* Posts List */}
      <PostList posts={posts} search={search} />

      {/* <CommHero /> */}
    </div>
  );
};

export default CommunityPage;