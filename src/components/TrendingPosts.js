import React, { useEffect, useState } from "react";
import { fetchPosts } from "../services/api";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      const sortedPosts = data.sort((a, b) => b.comments.length - a.comments.length);
      setPosts(sortedPosts.slice(0, 5));
    };
    getPosts();
  }, []);

  return (
    <div>
      <h2>Trending Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content} - {post.comments.length} comments</li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;
